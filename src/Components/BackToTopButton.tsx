import { useState, useEffect } from "react";
import "@/CSS/BackToTop.css"; // Import the CSS file for styling

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Toggle visibility of the button based on scroll position
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        isVisible && (
            <button
                className="scrollToTop"
                onClick={scrollToTop}
                aria-label="Scroll to top"
            >
                ↑
            </button>
        )
    );
};

export default BackToTop;
