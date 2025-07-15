import { useState, useRef, useEffect } from "react";
export function inViewFunction(threshold = 0.1) {
    const ref = useRef<HTMLDivElement | HTMLHeadingElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setIsVisible(true);
            },
            { threshold }
        );
        if (ref.current) observer.observe(ref.current);
        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, [])

    return { ref, isVisible };
}
export default inViewFunction;
