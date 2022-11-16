import TopNavLinkItem from "./TopNavLinkItem";
import "./TopNav.scss";
import FadeInScrollTransition from "./FadeInScrollTransition";
import TopNavLogo from "./TopNavLogo";
import {useEffect, useState} from "react";

function TopNav() {
    const TOP_OFFSET = 45;
    const [show, setShow] = useState(true);
    const [isTop, setIsTop] = useState(window.scrollY < TOP_OFFSET);
    const [prevPos, setPrevPos] = useState(0);

    function handleScroll() {
        const currentPos = window.scrollY;
        if (currentPos < prevPos) {
            setShow(true)
        } else setShow(false)
        setIsTop(currentPos < TOP_OFFSET);
        setPrevPos(currentPos <= 0 ? 0 : currentPos);
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll, false);
    });


    return (
        <header
            className={`${isTop ? "shadow-none top-2" : ""}  ${show ? "top-0 backdrop-blur bg-darkblue/75" : "-top-20"} bg-darkblue shadow-2xl transition-all flex box-border fixed left-0 h-20 w-full justify-between items-center z-10 px-6 md:px-16`}>
            <nav className="flex flex-1 justify-between items-center h-full">
                <div>
                    <FadeInScrollTransition timeout={100} reversed>
                        <a href="/" className="block w-12 h-12 overflow-hidden relative">

                            <TopNavLogo className=""/>


                        </a>
                    </FadeInScrollTransition>
                </div>
                <div className="flex gap-3 pr-3">
                    <FadeInScrollTransition timeout={200} reversed>
                        <TopNavLinkItem href={"/#"} text={"~"}/>
                    </FadeInScrollTransition>
                    <FadeInScrollTransition timeout={300} reversed>
                        <TopNavLinkItem href={"/#about"} text={"about"}/>
                    </FadeInScrollTransition>
                    <FadeInScrollTransition timeout={400} reversed>
                        <TopNavLinkItem href={"/#whatami"} text={"whatami"}/>
                    </FadeInScrollTransition>
                    <FadeInScrollTransition timeout={500} reversed>
                        <TopNavLinkItem href={"/#where"} text={"where"}/>
                    </FadeInScrollTransition>
                </div>
            </nav>
        </header>
    )
}

export default TopNav;