import { Link } from "react-router-dom";

interface HeaderTitleProps {
  text: string;
  customClass?: string;
  asLink?: boolean;
  to?: string;
  ariaLabel?: string;
}

export default function HeaderTitle({
  text,
  customClass,
  asLink = false,
  to = "/",
  ariaLabel = "Home",
}: HeaderTitleProps) {
  const classNames = ["Header"];
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