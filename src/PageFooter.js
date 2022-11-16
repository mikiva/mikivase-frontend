import FadeInScrollTransition from "./FadeInScrollTransition";

function PageFooter() {
    return (
        <footer className="flex justify-center content-center items-center text-center text-xs text-slate-400 p-3 h-20">
            <FadeInScrollTransition>
                <div className="footer">
                    <div><a className="hover:text-accent" rel={"noreferrer"} href={"https://github.com/mikiva"} target={"_blank"}>mikiva</a></div>
                </div>
            </FadeInScrollTransition>

        </footer>
    )
}

export default PageFooter;
