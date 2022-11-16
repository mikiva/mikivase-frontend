import FadeInScrollTransition from "./FadeInScrollTransition";
import TopNavLinkItem from "./TopNavLinkItem";

function TopNavLinks({onClick}) {
    return (
        <>
            <FadeInScrollTransition timeout={200} reversed>
                <TopNavLinkItem onClick={onClick} href={"/#"} text={"~"} />
            </FadeInScrollTransition>
            <FadeInScrollTransition timeout={300} reversed>
                <TopNavLinkItem onClick={onClick} href={"/#about"} text={"about"}/>
            </FadeInScrollTransition>
            <FadeInScrollTransition timeout={400} reversed>
                <TopNavLinkItem onClick={onClick} href={"/#whatami"} text={"whatami"}/>
            </FadeInScrollTransition>
            <FadeInScrollTransition timeout={500} reversed>
                <TopNavLinkItem onClick={onClick} href={"/#where"} text={"where"}/>
            </FadeInScrollTransition>
        </>
    )
}

export default TopNavLinks;