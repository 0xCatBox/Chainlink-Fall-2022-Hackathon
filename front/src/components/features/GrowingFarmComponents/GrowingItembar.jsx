import React, { useState } from "react";
import Poja from '../../../assets/spore.png';
import Mush02 from '../../../assets/mush02.png';
import useMushStore from "../../../stores/MushStore";
import { MdOutlineRunningWithErrors } from "react-icons/md";
import { useEffect } from "react";
import useSporeStore from "../../../stores/SporeStore";

const GrowingItembar = ({ handleMode }) => {

    console.log("GrowingItembar");

    const [item, setItem] = useState("");

    const { SporeState, ChangeSporeState } = useSporeStore(state => state);
    const { MushOne, MushOneEXP, MushOneNameChange, MushOneEXPChange, MushTwo, MushTwoEXP, MushTwoNameChange, MushTwoEXPChange, MushThree, MushThreeEXP, MushThreeNameChange, MushThreeEXPChange, MushFour, MushFourEXP, MushFourNameChange, MushFourEXPChange } = useMushStore(state => state);

    useEffect(() => {
        ViewMyNFTs();
    },[]);

    const ViewMyNFTs = () => {
        try{
            console.log("ViewMyNFTs");
            setItem("items");
        } catch(error) {
            console.log(error);
        }
    }

    const handleEvent = () => {
        console.log("handleEvent");
        ChangeSporeState();
        if (MushOne == "hole") {
            MushOneNameChange("spore");
        } else {
            if (MushTwo == "hole") {
                MushTwoNameChange("spore");
            } else {
                if (MushThree == "hole") {
                    MushThreeNameChange("spore");
                } else {
                    if (MushFour == "hole") {
                        MushFourNameChange("spore");
                    }
                }
            }
        }
    }

    const PojaItem = ({ item }) => {
        return (
            <img src={item} style={{ borderRadius: "5px" }} onClick={() => handleEvent()} />
        )
    }

    return (
        <div className="Itembar">
            <div className="ItemElement">{SporeState == false ? <PojaItem item={item} />: <></>}</div>
            <div className="ItemElement"></div>
            <div className="ItemElement"></div>
            <div className="ItemElement"></div>
        </div>
    )
}

export default GrowingItembar;