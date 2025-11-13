import Hero from "./Hero.tsx";
import DreamTeam from "./DreamTeam.tsx";
import OpeningCrawl from "./OpeningCrawl.tsx";
import {SWContext} from "../utils/context.ts";
import {useContext, useEffect} from "react";
import {characters, defaultHero} from "../utils/constants.ts";
import {useParams} from "react-router";

const Home = () => {
    const {heroId = defaultHero} = useParams();
    const {changeHero, setIsError} = useContext(SWContext);

    useEffect(() => {
        if (!(heroId in characters)) {
            setIsError(true);
            return;
        }
        changeHero(heroId);
    }, [heroId])

    return (
        <main>
            <Hero/>
            <DreamTeam/>
            <OpeningCrawl/>
        </main>
    );
};

export default Home;