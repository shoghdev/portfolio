export function saveCvToFile(markdownCv: string, fileName = 'generated-cv.md'): void {
  const blob = new Blob([markdownCv], { type: 'text/markdown;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const anchor = document.createElement('a')

  anchor.href = url
  anchor.download = fileName
  anchor.click()

  URL.revokeObjectURL(url)
}
