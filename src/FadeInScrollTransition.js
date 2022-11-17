import {useEffect, useRef, useState} from "react";
import React from "react";

function FadeInScrollTransition({children, ...props}) {

    const [isVisible, setVisible] = useState(false)
    const domRef = useRef(null);

    useEffect(() => {
        let t;
        const observer = new IntersectionObserver(entries => {
            const entry = entries[0]
            t = setTimeout(() => {
                setVisible(entry.isIntersecting || props.instant)
                if (entry.isIntersecting || props.instant) observer.unobserve(entry.target)

            }, props.timeout)

        })

        const {current} = domRef;
        observer.observe(current);

        return () => {
            observer.unobserve(current);
            //clearTimeout(t)
        }
    }, [])
    return (
        <div
            className={`fadeUp-enter${isVisible ? "-active" : ""} ${props.reversed ? "reversed" : ""}`}
            ref={domRef}>
            {children}
        </div>
    )
}

export default FadeInScrollTransition;