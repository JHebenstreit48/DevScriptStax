import Navigation from "@/Components/NavigationUI/Navigation";
import HeaderTitle from "@/Components/Shared/Header/HeaderTitle";

interface HeaderProps {
  text: string;
  size?: "default" | "sm" | "md" | "lg";
  customClass?: string; // Optional per-page tweak
}

export default function Header({ text, size = "default", customClass }: HeaderProps) {
  return (
    <header className="HeaderBar">
      <div className="HeaderLeft">
        <HeaderTitle text={text} size={size} customClass={customClass} />
      </div>
      <div className="HeaderRight">
        <Navigation />
      </div>
    </header>
  );
}
