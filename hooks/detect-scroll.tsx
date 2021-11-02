import React, { useRef, useEffect, useCallback } from "react";

export default function App() {
    const ref = useRef();

    // The scroll listener
    const handleScroll = useCallback(() => {
        console.log("scrolling");
    }, []);

    // Attach the scroll listener to the div
    useEffect(() => {
        const div = ref.current;
        div.addEventListener('scroll', handleScroll);
    }, [handleScroll]);

    return (
        <div className="scrollableContainer" ref={ref}>
            <div className="content">
                When this content is taller than the parent,
                it scrolls.
            </div>
        </div>
    );
}