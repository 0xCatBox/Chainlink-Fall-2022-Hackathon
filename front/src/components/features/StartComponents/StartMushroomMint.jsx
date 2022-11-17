import React, { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import Mush02 from '../../../assets/mush02.png';
import LoadingScreen from "../GlobalFeatures/LoadingScreen";
import dotenv from 'dotenv';
dotenv.config();

const StartMushroomMint = ({ choosePage }) => {

    console.log("StartMushroomMint");

    const [page, setPage] = useState("mint01");
    const [display, setDisplay] = useState("none");

    const MintMushroom = () => {
        setDisplay("")
        try {
            console.log(process.env.REACT_APP_TEST_VALUE);
            console.log("mint complete");
            setPage("mint02");
            setDisplay("none");
            console.log("mint results");
        } catch (error) {
            console.log(error);
        }
    }

    const BeforeMint = () => {
        return (
            <>
                <div className="StartMushroomTitle">
                    <p>You can get </p>
                    <p>MUSHROOM!</p>
                </div>
                <div className="StartMushroomMintContainer">
                    <img src={Mush02} className="StartMushroomImage" />
                </div>
                <button className="StartMushroomMintButton" onClick={() => MintMushroom()}>MINT</button>
            </>
        )
    }

    const AfterMint = () => {
        return (
            <>
                <div className="StartMushroomTitle">
                    <p>This is your</p>
                    <p>MUSHROOM!</p>
                </div>
                <div className="StartMushroomMintContainer">
                    <img src={Mush02} className="StartMushroomImage" />
                </div>
                <NavLink to="/growing"><button className="StartMushroomMintButton">START</button></NavLink>
            </>
        )
    }

    const MintComponent = () => {
        if (page == "mint01") {
            return (<BeforeMint />)
        }
        else if (page == "mint02") {
            return (<AfterMint />)
        }
    }

    return (
        <>
            {MintComponent()}
            <LoadingScreen display={display} />
        </>
    )
}

export default StartMushroomMint;