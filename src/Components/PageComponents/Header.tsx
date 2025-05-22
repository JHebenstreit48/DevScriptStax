import Navigation from "@/Components/NavigationUI/Navigation";

interface Header {
  text: string;
  size?: "default" | "sm" | "md" | "lg";
}

export default function Header({ text, size = "default" }: Header) {
  return (
    <>
      <div>
        <h1 className={`Header ${size}`}>{text}</h1>
        <Navigation />
      </div>
    </>
  );
}
