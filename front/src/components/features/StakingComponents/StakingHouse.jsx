import React, { useEffect } from "react";
import { useState } from "react";
import { GiWavyItinerary } from "react-icons/gi";
import Vault from '../../../assets/garagenew.png';
import Mush02 from '../../../assets/mush02.png';
import useStakingStore from "../../../stores/StakingStore";

const StakingHouse = ({ StakingState, handleMode }) => {

    console.log("StakingHouse");

    const [stakemode, setStakemode] = useState(false);

    const [data, setData] = useState("");
    const [tokenid, setTokenid] = useState("-");
    const [rate, setRate] = useState("-");
    const [timestamp, setTimestamp] = useState("-");
    const [uri, setUri] = useState("-");

    useEffect(() => {
        Stake(false);
    }, []);

    const Stake = (value) => {
        try{
            console.log("StakeMode: "+value);
            setStakemode(value);
        } catch(error) {
            console.log(error);
        }
    }

    const CancleStaking = () => {
        handleMode("stop");
        // j_unstake();
    }

    const StakingMode = () => {
        if (StakingState == "ready") {
            return (
                <>
                    <img src={Vault} className="StakingHouse" />
                </>
            )
        }
        else if (StakingState == "start" || StakingState == "stop") {
            // j_stake(4, userAddress);
            // j_viewStakeToken(4);
            // j_unstake();

            return (
                <>
                    <div className="StakingTitle">
                        Staking Complete
                    </div>
                    <div className="StakingInfo">
                        <p>tokenId: {tokenid}</p>
                        <p>rate: {rate}</p>
                        <p>timestamp: {timestamp}</p>
                        <p>uri: {uri}</p>
                    </div>
                    <img src={Vault} className="StakingHouse" />
                    <div className="StakingMushroomContainer">
                        {/* <img src={Mush02} className="StakingMushroom" /> */}
                    </div>
                    <div>
                        <button className="StakingCancle" onClick={() => CancleStaking()}>CANCLE</button>
                    </div>
                </>
            )
        }
    }

    return (
        <>
            {StakingMode()}
        </>
    )
}

export default StakingHouse;