import { useLocation } from "react-router-dom";
import BackToTop from "@/Components/Shared/BackToTopButton";

/** Render BackToTop on all pages EXCEPT Home, About, and Error */
const HIDE_ON = [
  /^\/$/,          // Home
  /^\/about\b/i,   // About (case-insensitive)
  /^\/error\b/i,   // Error/404 (optional; remove if you want it visible there)
];

export default function BackToTopGate() {
  const { pathname } = useLocation();
  const shouldHide = HIDE_ON.some((rx) => rx.test(pathname));
  if (shouldHide) return null;
  return <BackToTop />;
}