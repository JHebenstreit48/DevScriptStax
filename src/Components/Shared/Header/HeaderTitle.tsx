import { getResponsiveHeaderSize } from "@/Components/Shared/Header/HeaderUtils";

interface HeaderTitleProps {
  text: string;
  size: "default" | "sm" | "md" | "lg";
  customClass?: string;
}

export default function HeaderTitle({ text, size, customClass }: HeaderTitleProps) {
  const responsiveSize = getResponsiveHeaderSize(text, size);
  const finalClass = `Header ${responsiveSize} ${customClass ?? ""}`.trim();

  return <h1 className={finalClass}>{text}</h1>;
}