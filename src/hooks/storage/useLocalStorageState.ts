import { useEffect, useState } from "react";

export function useLocalStorageState<T>(
  key: string,
  initialValue: T,
  options?: {
    serialize?: (value: T) => string;
    deserialize?: (raw: string) => T;
  }
) {
  const serialize = options?.serialize ?? ((v: T) => JSON.stringify(v));
  const deserialize = options?.deserialize ?? ((raw: string) => JSON.parse(raw) as T);

  const [state, setState] = useState<T>(() => {
    const raw = localStorage.getItem(key);
    if (raw == null) return initialValue;

    try {
      return deserialize(raw);
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, serialize(state));
    } catch {
      // ignore write failures (private mode, quota, etc.)
    }
  }, [key, serialize, state]);

  return [state, setState] as const;
}
