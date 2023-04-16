import FadeInScrollTransition from "./FadeInScrollTransition";

import m2015 from "./img/made/2015the_producers.png"
import m2016 from "./img/made/2016narnia.png"
import m2017 from "./img/made/2017footloose.png"
import m20181 from "./img/made/2018-01hotelliggaren.png"
import m20182 from "./img/made/2018-02fame.png"
import m2019 from "./img/made/2019all_shook_up.png"
import m2021 from "./img/made/2021sugar.png"
import m2022 from "./img/made/2022sallskapsresan.png"


let files = [
    m2015,
    m2016,
    m2017,
    m20181,
    m20182,
    m2019,
    m2021,
    m2022,
];

function PageContentStuffIMade() {




    return (
        <section id={"stuffimade"} className="max-w-3xl">
            <FadeInScrollTransition timeout={100}>
                <h2 className="section-header"><span className="text-accent">#</span>stuffimade</h2>
            </FadeInScrollTransition>

            <div className="block md:grid grid-cols-1 gap-9">
                <FadeInScrollTransition timeout={200}>
                    <div className="corner-border-accent reversed">
                        <FadeInScrollTransition timeout={400}>
                            <div className=" border border-accent/75 bg-accent/5 rounded overflow-hidden">
                                <FadeInScrollTransition timeout={600}>

                                    <p className="px-4 py-2 ">Here are some of the stuff that I have made.</p>
                                </FadeInScrollTransition>
                            </div>
                        </FadeInScrollTransition>
                    </div>
                </FadeInScrollTransition>



            </div>
            <div className="max-w-3xl mt-9">
                <FadeInScrollTransition timeout={700}>
                    <p className="px-4 py-2  border-b border-accent/75" id={"poster-header"}>Posters for some musicals and theatre.</p>
                <div className="flex  gap-2 flex-wrap justify-center py-5">

                    {files.map((file, idx) => {
                        return (
                            <FadeInScrollTransition timeout={100} key={idx}>
                                <img src={file} alt="" key={idx} className="max-w-[150px] md:max-w-[250px]" />
                            </FadeInScrollTransition >
                        )
                        
                    })}
                </div>
                    </FadeInScrollTransition>
            </div>
            <div className="max-w-3xl mt-9">
                <FadeInScrollTransition timeout={100}>
                    <p className="px-4 py-2  border-b border-accent/75">And that is about it... for now.</p>
                </FadeInScrollTransition>
            
            </div>
        </section>
    )
}

export default PageContentStuffIMade;