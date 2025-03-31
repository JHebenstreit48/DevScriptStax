import Navigation from "@/Components/Navigation/Navigation";

interface Header {
  text: string;
}

export default function Header({ text }: Header) {
  return (
    <>
      <div>
        <h1 className="Header">{text}</h1>
        <Navigation />
      </div>

    </>
  );
}
