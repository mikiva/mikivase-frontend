import FadeInScrollTransition from "./FadeInScrollTransition";
import mikiva from "./img/mikiva.png";

function PageContentAbout() {
    return (
        <section id={"whoami"} className="max-w-3xl">
            <FadeInScrollTransition transitionDelay={500} timeout={100}>
                <h2 className="section-header"><span className="text-accent">&#47;#</span>whoami</h2>
            </FadeInScrollTransition>
            <div className="grid grid-cols-[3fr_2fr] gap-9">
                <FadeInScrollTransition transitionDelay={500} timeout={200}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet at
                        consectetur dignissimos dolor
                        dolorem error eum ex exercitationem illo in ipsum, itaque, laboriosam laborum minima
                        molestias
                        mollitia nihil nisi optio provident quisquam reiciendis rem sapiente sunt vitae
                        voluptatibus.
                        Amet
                        eligendi labore magni pariatur provident quidem sed tempora? At commodi, cum debitis dolorem
                        ea
                        eligendi et impedit in minima necessitatibus quibusdam quidem voluptate? Architecto autem
                        cum
                        eos
                        eum, expedita obcaecati optio quaerat sint totam.</p>
                </FadeInScrollTransition>


                <FadeInScrollTransition transitionDelay={500} timeout={300}>
                    <div id={"whoami-img-wrapper"}
                        className="">

                        <img width={500} height={500} src={mikiva} className="object-cover rounded"/>
                    </div>
                </FadeInScrollTransition>
            </div>
        </section>
    )
}

export default PageContentAbout;