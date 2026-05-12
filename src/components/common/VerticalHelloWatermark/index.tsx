const LETTERS = ['H', 'E', 'L', 'L', 'O'] as const

export function VerticalHelloWatermark() {
  return (
    <div className="pf-hello-watermark" aria-hidden="true">
      {LETTERS.map((letter, index) => (
        <span key={`${letter}-${index}`} className="pf-hello-watermark-letter">
          {letter}
        </span>
      ))}
    </div>
  )
}
