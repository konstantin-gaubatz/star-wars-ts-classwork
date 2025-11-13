import {friends, navItems} from "../utils/constants.ts";
import Friend from "./Friend.tsx";
import {useContext} from "react";
import {SWContext} from "../utils/context.ts";
import {NavLink} from "react-router";

const DreamTeam = () => {

    const {hero} = useContext(SWContext)

    return (
        <section className="float-right w-1/2 grid grid-cols-3 gap-1.5 border rounded-b-3xl mt-2 ml-2">
            <h2 className="text-center col-span-3 text-2xl">Dream team</h2>
            {friends.filter(friend => friend !== hero).map((friend, index) =>
                <NavLink to={`/${navItems[0]}/${friend}`} key={index}>
                    <Friend friend={friend} pos={index + 1} />
                </NavLink>
            )}

        </section>
    );
};

export default DreamTeam;