import {useEffect, useRef, useState} from "react";
import React from "react";

function FadeInScrollTransition({children, ...props}) {

    const [isVisible, setVisible] = useState(false)
    const domRef = useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                setTimeout(() => {
                    setVisible(entry.isIntersecting)
                    if(entry.isIntersecting) observer.unobserve(entry.target)

                }, props.timeout)

            });

        }, {rootMargin: "-25px"})
        const {current} = domRef;
        observer.observe(current);

        return () => observer.unobserve(current);
    })
    return (
        <div className={`fadeUp-enter${isVisible ? "-active" : ""} ${props.reversed ? "reversed": ""}`} ref={domRef}>
            {children}
        </div>
    )
}

export default FadeInScrollTransition;