import {useState} from "react";

function TopNavLogo() {

    const [color, setColor] = useState("#64ffda");


    return (
        <>
            <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 170 170" className="fill-slate-300">
                <g>
                    <polygon points="0 50 0 170 41.62 170 0 50"/>
                    <polygon points="136 50 136 170 94.38 170 136 50"/>
                </g>
                <polygon points="67.88 87 52.97 43.5 38.06 0 67.88 0 97.7 0 82.79 43.5 67.88 87"/>
                <rect x="136" y="0" width="34" height="34" className="fill-accent"/>
            </svg>
        </>
    )


}

export default TopNavLogo;