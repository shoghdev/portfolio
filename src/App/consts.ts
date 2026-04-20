import { theme } from 'antd'

export type ThemeMode = 'light' | 'dark'

export const getAppThemeConfig = (mode: ThemeMode) => {
  const isDarkMode = mode === 'dark'

  return {
    algorithm: isDarkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
    token: {
      colorPrimary: '#57dca8',
      borderRadius: 10,
      colorText: isDarkMode ? '#d8e8f7' : '#10213c',
      colorBgBase: isDarkMode ? '#070f27' : '#eff5ff',
    },
  }
}
