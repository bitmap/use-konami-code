import { useEffect, useCallback, useRef } from 'react'

export function useKonamiCode(
  callback: () => void,
  sequence: string[] = [
    'ArrowUp',
    'ArrowUp',
    'ArrowDown',
    'ArrowDown',
    'ArrowLeft',
    'ArrowRight',
    'ArrowLeft',
    'ArrowRight',
    'b',
    'a',
    'Enter',
  ]
): void {
  const buffer = useRef<string[]>([])

  const keySequence = useCallback((event: KeyboardEvent) => {
    if (event.defaultPrevented) return

    if (event.key === sequence[buffer.current.length]) {
      buffer.current = [...buffer.current, event.key]
    } else {
      buffer.current = []
    }

    if (buffer.current.length === sequence.length) {
      const bufferString = buffer.current.toString()
      const sequenceString = sequence.toString()

      if (sequenceString === bufferString) {
        callback()
      }
    }
  }, [sequence])


  useEffect(() => {
    document.addEventListener('keydown', keySequence)
    return () => document.removeEventListener('keydown', keySequence)
  }, [keySequence])
}
