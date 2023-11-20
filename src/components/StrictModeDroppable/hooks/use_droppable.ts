import { useEffect, useState } from "react";

export const useDroppable = () => {
    const [enabled, setEnabled] = useState(false);
    useEffect(() => {
        const animation = requestAnimationFrame(() => setEnabled(true));
        return () => {
        cancelAnimationFrame(animation);
        setEnabled(false);
        };
    }, []);

    return {
        enabled
    }
}