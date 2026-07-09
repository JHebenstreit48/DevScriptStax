export function getResponsiveHeaderSize(
    text: string,
    size: "default" | "sm" | "md" | "lg"
  ): "sm" | "md" | "lg" {
    if (size !== "default") return size;
  
    const length = text.length;
  
    if (length <= 8) return "sm";
    if (length <= 20) return "md";
    return "lg";
  }  