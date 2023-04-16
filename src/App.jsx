import "./index.scss";

import TopNav from "./TopNav";
import PageContent from "./PageContent";
import PageFooter from "./PageFooter";

function App() {
    return (
        <>
            <div className="mx-auto md:px-32 px-6 bg-darkblue text-slate-300">
                <TopNav/>
                <PageContent/>
                <PageFooter/>
            </div>
        </>
    );
}

export default App;