import { useEffect } from "react";
import { wakeServices } from "@/lib/wake/wakeServices";

// Pre-wake the backend shortly after first paint.
// Uses same-origin so no env vars or CORS headaches.
export default function WakeGate() {
  useEffect(() => {
    const id = window.setTimeout(() => {
      const endpoints: Record<string, string | string[]> = {
        [window.location.origin]: ["/api/health", "/api/test"],
      };
      void wakeServices({
        endpoints,
        retries: 4,
        timeoutMs: 7000,
        backoffMs: 1500,
      });
    }, 300); // small delay avoids a T=0 request stampede

    return () => window.clearTimeout(id);
  }, []);

  return null;
}