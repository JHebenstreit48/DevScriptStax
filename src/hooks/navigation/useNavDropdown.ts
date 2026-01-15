import { useCallback, useState } from "react";

export function useNavDropdown() {
  const [activeDropdown, setActiveDropdown] = useState<Set<string>>(new Set());

  const closeAll = useCallback(() => {
    setActiveDropdown(new Set());
  }, []);

  const toggleDropdown = useCallback((key: string) => {
    setActiveDropdown((prev) => {
      const updated = new Set(prev);
      const isTopLevel = key.startsWith("page-");
      const isOpen = updated.has(key);

      const rootKey = key.split("-").slice(0, 2).join("-");

      if (isTopLevel) {
        for (const k of Array.from(updated)) {
          if (k.startsWith("page-") && !k.startsWith(rootKey)) {
            updated.delete(k);
          }
        }
      }

      if (isOpen) {
        for (const k of Array.from(updated)) {
          if (k === key || k.startsWith(`${key}-`)) updated.delete(k);
        }
      } else {
        updated.add(key);
      }

      return updated;
    });
  }, []);

  return { activeDropdown, toggleDropdown, closeAll };
}