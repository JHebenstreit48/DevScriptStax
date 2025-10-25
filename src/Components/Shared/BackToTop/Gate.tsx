import { useLocation } from "react-router-dom";
import BackToTopButton from "@/Components/Shared/BackToTop/Button";

/** Render BackToTop on all pages EXCEPT Home, About, and Error */
const HIDE_ON = [
  /^\/$/,        // Home
  /^\/about\b/i, // About (case-insensitive)
  /^\/error\b/i, // Error/404
];

export default function BackToTopGate() {
  const { pathname } = useLocation();
  const shouldHide = HIDE_ON.some((rx) => rx.test(pathname));
  if (shouldHide) return null;
  return <BackToTopButton />;
}