import { getResponsiveHeaderSize } from "@/Components/Shared/Header/ResponsiveHeaderLogic";

interface HeaderTitleProps {
  text: string;
  size?: "default" | "md" | "lg";
  customClass?: string;
}

export default function HeaderTitle({ text, size = "default", customClass }: HeaderTitleProps) {
  const responsiveSize = getResponsiveHeaderSize(text, size);
  const classNames = ["Header", responsiveSize];
  if (customClass) classNames.push(customClass);

  return <h1 className={classNames.join(" ")}>{text}</h1>;
}