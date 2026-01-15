import { useEffect } from 'react';

export function useClickOutside<T extends HTMLElement>(
  ref: React.RefObject<T | null>,
  onOutside: () => void
) {
  useEffect(() => {
    const handleMouseDown = (event: MouseEvent) => {
      const el = ref.current;
      if (!el) return;
      if (!el.contains(event.target as Node)) onOutside();
    };

    document.addEventListener('mousedown', handleMouseDown);
    return () => document.removeEventListener('mousedown', handleMouseDown);
  }, [ref, onOutside]);
}