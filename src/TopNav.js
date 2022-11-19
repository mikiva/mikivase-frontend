import TopNavLinkItem from "./TopNavLinkItem";
import "./TopNav.scss";
import FadeInScrollTransition from "./FadeInScrollTransition";
import TopNavLogo from "./TopNavLogo";
import {useEffect, useState} from "react";
import TopNavLinks from "./TopNavLinks";
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/outline";

function TopNav() {
    const TOP_OFFSET = 45;
    const [showTop, setShowTop] = useState(true);
    const [isTop, setIsTop] = useState(window.scrollY < TOP_OFFSET);
    const [prevPos, setPrevPos] = useState(0);

    const [showMenu, setShowMenu] = useState(false);

    function handleScroll() {
        const currentPos = window.scrollY;
        if (currentPos < prevPos) {
            setShowTop(true)
        } else setShowTop(false)
        setIsTop(currentPos < TOP_OFFSET);
        const toPrevPos = currentPos <= 0 ? 0 : currentPos
        setPrevPos(toPrevPos);
    }

    function handleHashChange() {
        setShowMenu(false);

    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("hashChange", handleHashChange);

        return () => {
            window.removeEventListener("hashChange", handleHashChange);
            window.removeEventListener("scroll", handleScroll);

        }
    });


    return (
        <header
            className={`${!showTop && !isTop ? "-top-24" : ""}${showTop ^ isTop ? "-top-2 backdrop-blur bg-darkblue/75" : ""}  bg-darkblue transition-all flex box-border fixed left-0 h-24 w-full justify-between items-center z-10 px-6 md:px-16 ${isTop ? "shadow-none top-0" : "shadow-2xl "}  `}>
            <nav className="flex flex-1 relative justify-between items-center h-full">
                <div>
                    <FadeInScrollTransition timeout={100} reversed>
                        <a href="/" className="block w-12 h-12 overflow-hidden relative">

                            <TopNavLogo className=""/>


                        </a>
                    </FadeInScrollTransition>
                </div>
                <div className="hidden md:flex gap-3 pr-3">
                    <TopNavLinks/>
                </div>
                <div className="md:hidden z-20 w-12 relative">

                    <button className="z-10 absolute text-5xl -top-4 w-12 h-full"
                            onClick={() => setShowMenu(!showMenu)}>
                        <FadeInScrollTransition timeout={300} instant reversed>
                            <XMarkIcon className={`absolute transition-all ${showMenu ? "" : "opacity-0"}`}/>
                            <Bars3Icon className={`absolute transition-all ${showMenu ? "opacity-0" : ""}`}/>
                        </FadeInScrollTransition>
                    </button>

                    <aside
                        className={`w-[min(60vw,350px)] transition-all flex flex-col gap-4 text-2xl justify-center items-center h-screen top-0 bottom-0 right-0 fixed bg-slate-900 shadow-xl ${showMenu ? "" : "right-[-100%]"} `}>

                        <TopNavLinks onClick={() => setShowMenu(false)}/>
                    </aside>
                </div>

            </nav>
        </header>
    )
}

export default TopNav;