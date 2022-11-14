import PageContentHome from "./PageContentHome";
import PageContentAbout from "./PageContentAbout";
import PageContentFoot from "./PageContentFoot";

function PageContent() {
    return (
        <>
            <main className="pageContent">
                <PageContentHome/>
                <PageContentAbout/>

            </main>

            <footer className="pageFooter">
                <PageContentFoot/>
            </footer>
        </>


    )

}

export default PageContent;