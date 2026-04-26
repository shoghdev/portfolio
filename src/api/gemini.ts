import axios from 'axios'

type GeminiPart = {
  text?: string
}

type GeminiResponse = {
  candidates?: Array<{
    content?: {
      parts?: GeminiPart[]
    }
  }>
}

// Safely read the Vite environment variables
const geminiApiKey = import.meta.env.VITE_GEMINI_API_KEY as string | undefined
const geminiBaseUrl = import.meta.env.VITE_GEMINI_BASE_URL as string | undefined
const geminiEndpointPath = import.meta.env.VITE_GEMINI_ENDPOINT_PATH as string | undefined
const geminiModel = import.meta.env.VITE_GEMINI_MODEL as string | undefined

const RATE_LIMIT_RETRIES = 3
const RATE_LIMIT_BASE_DELAY_MS = 1200

// Fixed URL generator to prevent crashes and double slashes
const getGeminiUrl = (): string => {
  const baseUrl = geminiBaseUrl ?? 'https://generativelanguage.googleapis.com/v1beta'
  const endpoint = geminiEndpointPath ?? '/models/{GEMINI_MODEL}:generateContent'
  const model = geminiModel ?? 'gemini-1.5-flash'

  const rawUrl = `${baseUrl}${endpoint.replace('{GEMINI_MODEL}', model)}`
  
  // Clean up any double slashes that might accidentally occur (except after "https:")
  return rawUrl.replace(/([^:]\/)\/+/g, "$1")
}

const wait = async (ms: number): Promise<void> =>
  new Promise((resolve) => {
    window.setTimeout(resolve, ms)
  })

const getRetryAfterMs = (retryAfterHeader: string | null | undefined): number | null => {
  if (!retryAfterHeader) {
    return null
  }

  const secondsValue = Number(retryAfterHeader)
  if (!Number.isNaN(secondsValue) && secondsValue > 0) {
    return Math.ceil(secondsValue * 1000)
  }

  const retryDateMs = Date.parse(retryAfterHeader)
  if (Number.isNaN(retryDateMs)) {
    return null
  }

  const msUntilRetry = retryDateMs - Date.now()
  return msUntilRetry > 0 ? msUntilRetry : null
}

export async function generateCvFromPrompt(prompt: string): Promise<string> {
  if (!geminiApiKey) {
    throw new Error('Missing VITE_GEMINI_API_KEY. Add it to your .env file.')
  }

  let lastError: unknown = null
  const url = getGeminiUrl()
  
  for (let attempt = 0; attempt <= RATE_LIMIT_RETRIES; attempt += 1) {
    try {
      const { data } = await axios.post<GeminiResponse>(
        `${url}?key=${geminiApiKey}`,
        {
          contents: [{ parts: [{ text: prompt }] }],
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )

      const markdownCv = data.candidates?.[0]?.content?.parts
        ?.map((part) => part.text ?? '')
        .join('\n')
        .trim()

      if (!markdownCv) {
        throw new Error('Gemini returned an empty response.')
      }

      return markdownCv
    } catch (error) {
      lastError = error

      if (!axios.isAxiosError(error)) {
        throw error
      }

      const statusCode = error.response?.status
      if (statusCode === 429 && attempt < RATE_LIMIT_RETRIES) {
        const retryAfterMs = getRetryAfterMs(error.response?.headers?.['retry-after'] as string)
        const delayMs = retryAfterMs ?? RATE_LIMIT_BASE_DELAY_MS * 2 ** attempt
        await wait(delayMs)
        continue
      }

      if (statusCode === 429) {
        const retryAfterMs = getRetryAfterMs(error.response?.headers?.['retry-after'] as string)
        const retryAfterSeconds = retryAfterMs ? Math.ceil(retryAfterMs / 1000) : null
        const retryMessage = retryAfterSeconds
          ? `Gemini rate limit reached. Try again in about ${retryAfterSeconds} seconds.`
          : 'Gemini rate limit reached. Please wait a minute and try again.'
        throw new Error(retryMessage)
      }

      if (statusCode === 404) {
        throw new Error('Gemini endpoint not found (404). Update your VITE_GEMINI variables to a valid model endpoint.')
      }

      throw error
    }
  }

  if (axios.isAxiosError(lastError) && lastError.response?.status === 429) {
    throw new Error('Gemini rate limit reached. Please wait a minute and try again.')
  }

  throw lastError instanceof Error ? lastError : new Error('Failed to call Gemini API.')
}