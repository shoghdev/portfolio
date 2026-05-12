import { theme } from 'antd'

export const getAppThemeConfig = () => ({
  algorithm: theme.defaultAlgorithm,
  token: {
    colorPrimary: '#32cd32',
    colorSuccess: '#32cd32',
    borderRadius: 12,
    borderRadiusLG: 16,
    colorText: '#0a0f0d',
    colorTextSecondary: '#3d524c',
    colorBgBase: '#f4f7f6',
    colorBorder: '#e0ebe8',
    fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif',
    lineHeightHeading: 1.15,
  },
  components: {
    Card: {
      headerBg: 'transparent',
    },
    Timeline: {
      tailColor: 'rgba(50, 205, 50, 0.35)',
      dotBg: '#32cd32',
    },
    Button: {
      primaryShadow: '0 4px 14px rgba(50, 205, 50, 0.35)',
    },
  },
})
