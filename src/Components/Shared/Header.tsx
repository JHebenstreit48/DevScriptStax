import Navigation from "@/Components/NavigationUI/Navigation";

interface HeaderProps {
  text: string;
  size?: "default" | "sm" | "md" | "lg";
}

export default function Header({ text, size = "default" }: HeaderProps) {
  return (
    <header className="HeaderBar">
      <div className="HeaderLeft">
        <h1 className={`Header ${size}`}>{text}</h1>
      </div>
      <div className="HeaderRight">
        <Navigation />
      </div>
    </header>
  );
}