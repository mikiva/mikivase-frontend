import FadeInScrollTransition from "./FadeInScrollTransition";
import mikiva from "./img/mikiva.png";

function PageContentAbout() {
    return (
        <section id={"about"} className="max-w-3xl">
            <FadeInScrollTransition timeout={100}>
                <h2 className="section-header"><span className="text-accent">#</span>about</h2>
            </FadeInScrollTransition>

            <div className="grid md:grid-cols-[3fr_2fr] grid-cols-1 gap-9 ">
                <FadeInScrollTransition timeout={200} className="md:order-first order-last">
                    <div className="corner-border-accent reversed">
                        <FadeInScrollTransition timeout={400}>
                            <div className=" border border-accent/75 bg-accent/5 rounded overflow-hidden">
                                <FadeInScrollTransition timeout={600}>

                                    <p className="px-4 py-2 ">Lorem ipsum dolor sit
                                        amet, consectetur adipisicing
                                        elit. Amet at
                                        consectetur dignissimos dolor
                                        dolorem error eum ex exercitationem illo in ipsum, itaque, laboriosam laborum
                                        minima
                                        molestias
                                        mollitia nihil nisi optio provident quisquam reiciendis
                                        If you are reading this, you are kind of a legend.
                                        Amet
                                        eligendi labore magni pariatur provident quidem sed tempora? At commodi, cum
                                        debitis
                                        dolorem
                                        ea
                                        eligendi et impedit in minima necessitatibus quibusdam quidem voluptate?
                                        Architecto
                                        autem
                                        cum
                                        eos
                                        eum, expedita obcaecati optio quaerat sint totam.</p>
                                </FadeInScrollTransition>
                            </div>
                        </FadeInScrollTransition>
                    </div>
                </FadeInScrollTransition>


                <FadeInScrollTransition transitionDelay={500} timeout={300}>
                    <div id={"whoami-img-wrapper"}
                         className="max-w-xs max-md:mt-14 max-md:mx-auto max-md:mb-0">

                        <img width={500} height={500} src={mikiva} className="object-cover rounded"
                             alt={"Don't I look pretty? Wait..."}/>
                    </div>
                </FadeInScrollTransition>
            </div>
        </section>
    )
}

export default PageContentAbout;