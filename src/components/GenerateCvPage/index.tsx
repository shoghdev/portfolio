import { useState } from 'react'
import { Alert, Button, Card, Form, Input, Space, Typography } from 'antd'
import ReactMarkdown from 'react-markdown'
import { generateCvFromPrompt } from '../../api/gemini'
import { saveCvToFile } from '../../utils/cvFile'
import type { GenerateCvFormValues } from './types'

const { Title, Paragraph } = Typography

export function GenerateCvPage() {
  const [form] = Form.useForm<GenerateCvFormValues>()
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [cvMarkdown, setCvMarkdown] = useState<string>('')

  const handleGenerateCv = async ({ prompt }: GenerateCvFormValues) => {
    try {
      setIsLoading(true)
      setErrorMessage(null)

      const generatedCv = await generateCvFromPrompt(prompt)
      setCvMarkdown(generatedCv)
      saveCvToFile(generatedCv)
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Failed to generate CV.'
      setErrorMessage(message)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="portfolio-section generate-cv-page">
      <Title level={2}>Generate CV with Gemini</Title>
      <Paragraph>
        Enter a prompt for generating a CV. 
      </Paragraph>

      <Form form={form} layout="vertical" onFinish={handleGenerateCv}>
        <Form.Item
          name="prompt"
          label="Prompt"
          rules={[{ required: true, message: 'Please enter a prompt.' }]}
        >
          <Input.TextArea
            rows={6}
            placeholder="Example: Create a concise senior full-stack developer CV in Markdown."
          />
        </Form.Item>
        <Space>
          <Button type="primary" htmlType="submit" loading={isLoading}>
            Generate CV
          </Button>
          {cvMarkdown ? (
            <Button onClick={() => saveCvToFile(cvMarkdown)} disabled={isLoading}>
              Download CV File
            </Button>
          ) : null}
        </Space>
      </Form>

      {errorMessage ? (
        <Alert className="generate-cv-alert" type="error" showIcon message={errorMessage} />
      ) : null}

      {cvMarkdown ? (
        <Card className="generate-cv-result" title="Generated CV (Markdown)">
          <div className="generate-cv-markdown">
            <ReactMarkdown>{cvMarkdown}</ReactMarkdown>
          </div>
        </Card>
      ) : null}
    </section>
  )
}
