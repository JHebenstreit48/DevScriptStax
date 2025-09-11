import { getResponsiveHeaderSize } from "@/Components/Shared/Header/ResponsiveHeaderLogic";
import { Link } from "react-router-dom";

interface HeaderTitleProps {
  text: string;
  size?: "default" | "md" | "lg";
  customClass?: string;
  asLink?: boolean;
  to?: string;
  ariaLabel?: string;
}

export default function HeaderTitle({
  text,
  size = "default",
  customClass,
  asLink = false,
  to = "/",
  ariaLabel = "Home",
}: HeaderTitleProps) {
  const responsiveSize = getResponsiveHeaderSize(text, size);
  const classNames = ["Header", responsiveSize];
  if (customClass) classNames.push(customClass);

  return (
    <h1 className={classNames.join(" ")}>
      {asLink ? (
        <Link to={to} aria-label={ariaLabel} className="HeaderHomeLink">
          {text}
        </Link>
      ) : (
        text
      )}
    </h1>
  );
}