import FadeInScrollTransition from "./FadeInScrollTransition";
import TopNavLinkItem from "./TopNavLinkItem";

function TopNavLinks({onClick}) {
    return (
        <>
            <FadeInScrollTransition timeout={200} reversed instant>
                <TopNavLinkItem onClick={onClick} href={"/#"} text={"~"} />
            </FadeInScrollTransition>
            <FadeInScrollTransition timeout={300} reversed instant>
                <TopNavLinkItem onClick={onClick} href={"/#about"} text={"about"}/>
            </FadeInScrollTransition>
            <FadeInScrollTransition timeout={400} reversed instant>
                <TopNavLinkItem onClick={onClick} href={"/#stuffimade"} text={"stuffimade"}/>
            </FadeInScrollTransition>
            <FadeInScrollTransition timeout={500} reversed instant>
                <TopNavLinkItem onClick={onClick} href={"/#where"} text={"where"}/>
            </FadeInScrollTransition>
        </>
    )
}

export default TopNavLinks;