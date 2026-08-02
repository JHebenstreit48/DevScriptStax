import { useLocation } from "react-router-dom";
import { useVisitTracker } from '@/hooks/storage/useVisitTracker';

export default function RouteTracker() {
  const { pathname } = useLocation();
  useVisitTracker(pathname);
  return null;
}