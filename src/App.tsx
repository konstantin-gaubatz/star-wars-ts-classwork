import Header from "./components/Header.tsx";
import Main from "./components/Main.tsx";
import Footer from "./components/Footer.tsx";
import {useState} from "react";
import {defaultHero} from "./utils/constants.ts";
import {SWContext} from "./utils/context.ts";
import ErrorPage from "./components/ErrorPage.tsx";

function App() {
    const [hero, setHero] = useState(defaultHero);
    const [isError, setIsError] = useState(false);



    if (isError) {
        return (
            <SWContext value={{hero, changeHero: setHero, isError, setIsError}}>
                <ErrorPage/>
            </SWContext>
        );
    }

    return (
        <div className={'mx-2'}>
            <SWContext value={{hero, changeHero: setHero, isError, setIsError}}>
                <Header/>
                <Main/>
                <Footer/>
            </SWContext>
        </div>
    )
}

export default App
