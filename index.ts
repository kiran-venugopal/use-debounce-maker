import { useEffect } from "react";

export default function useDebounceWrapper(
  func: (...args: any) => any,
  duration: number = 300
): Function {
  let timeout: number;

  useEffect(() => {
    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, []);

  function debounced(...args: any[]) {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), duration);
  }

  return debounced;
}
