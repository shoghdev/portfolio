import { theme } from 'antd'

const emerald = '#16A34A'
const emeraldDark = '#15803D'

export const getAppThemeConfig = (mode: 'light' | 'dark') => ({
  algorithm: mode === 'dark' ? theme.darkAlgorithm : theme.defaultAlgorithm,
  token: {
    colorPrimary: emerald,
    colorSuccess: emerald,
    borderRadius: 14,
    borderRadiusLG: 24,
    colorText: mode === 'dark' ? '#f9fafb' : '#111827',
    colorTextSecondary: mode === 'dark' ? '#9ca3af' : '#4b5563',
    colorBgBase: mode === 'dark' ? '#0b1120' : '#ffffff',
    colorBorder: mode === 'dark' ? '#1f2937' : '#e5e7eb',
    fontFamily: '"Plus Jakarta Sans", Inter, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    lineHeightHeading: 1.15,
  },
  components: {
    Card: {
      headerBg: 'transparent',
    },
    Timeline: {
      tailColor: mode === 'dark' ? 'rgba(22, 163, 74, 0.35)' : 'rgba(22, 163, 74, 0.35)',
      dotBg: emerald,
    },
    Button: {
      primaryShadow: '0 8px 24px rgba(22, 163, 74, 0.28)',
    },
  },
})

export const designTokens = {
  emerald,
  emeraldDark,
} as const
