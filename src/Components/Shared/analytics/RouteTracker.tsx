import { useLocation } from "react-router-dom";
import { useVisitTracker } from "@/Components/Shared/hooks/useVisitTracker";

export default function RouteTracker() {
  const { pathname } = useLocation();
  useVisitTracker(pathname); // tracks EVERY page, not just Home
  return null;
}