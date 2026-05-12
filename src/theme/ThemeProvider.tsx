import { useCallback, useLayoutEffect, useMemo, useState, type PropsWithChildren } from 'react'
import { ThemeContext, type ThemeMode } from './theme-context'

const STORAGE_KEY = 'portfolio-color-mode'

function readStoredMode(): ThemeMode {
  if (typeof window === 'undefined') {
    return 'dark'
  }
  const raw = window.localStorage.getItem(STORAGE_KEY)
  return raw === 'dark' || raw === 'light' ? raw : 'dark'
}

export function ThemeProvider({ children }: PropsWithChildren) {
  const [mode, setModeState] = useState<ThemeMode>(() => readStoredMode())

  useLayoutEffect(() => {
    document.documentElement.dataset.theme = mode
    window.localStorage.setItem(STORAGE_KEY, mode)
  }, [mode])

  const setMode = useCallback((next: ThemeMode) => {
    setModeState(next)
  }, [])

  const toggle = useCallback(() => {
    setModeState((prev) => (prev === 'light' ? 'dark' : 'light'))
  }, [])

  const value = useMemo(() => ({ mode, setMode, toggle }), [mode, setMode, toggle])

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
