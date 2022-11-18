import React, { useState } from "react";
import Poja from '../../../assets/spore.png';
import Mush02 from '../../../assets/mush02.png';
import { Modal } from "@mui/material";
import Box from '@mui/material/Box';
import { useEffect } from "react";
import useStakingStore from "../../../stores/StakingStore";
import dummy from './dummy.json';

const BottomItembar = () => {

    console.log("BottomItembar");
    console.log(window.location.pathname);

    const [startopen, setStartopen] = useState(false); // 모달 여닫기를 관리하는 상태
    const [completeopen, setCompleteopen] = useState(false); // 모달 여닫기를 관리하는 상태
    const [item, setItem] = useState("");

    // const { StakingState, ChangeStakingState } = useStakingStore(state => state);

    const handleStartClose = () => setStartopen(false); // 모달 닫는 함수
    const handleStartOpen = () => setStartopen(true); // 모달 여는 함수

    const handleCompleteClose = () => setCompleteopen(false); // 모달 닫는 함수
    const handleCompleteOpen = () => setCompleteopen(true); // 모달 여는 함수

    const handleOpenStartModal = () => {
        console.log("startmodal");
        handleStartOpen();
    }

    const handleCloseStartModal = (val) => {
        handleMode(val);
        console.log(val);
        if(val=="start"){
            console.log("start");
        }

        handleStartClose();
    }

    const handleOpenCompleteModal = () => {
        console.log("completemodal");
        handleCompleteOpen();
    }

    const handleCloseCompleteModal = (val) => {
        console.log(val);

        handleCloseStartModal(val);
        handleCompleteClose();
    }

    const BigMushItem = () => {
        return (
            <img src={Mush02} onClick={() => handleOpenStartModal()} style={{ width: "50px", borderRadius: "5px" }} />
        )
    }

    useEffect(() => {
        console.log(StakingState);
        if (StakingState == "stop") {
            handleOpenCompleteModal();
        }
    }, [StakingState]);

    useEffect(() => {
        // j_viewMyNFTs(4, 1);
        ViewMyNFTs();
    });

    const ViewMyNFTs = () => {
        try{
            console.log("ViewMyNFTs");
            let testData = JSON.parse(JSON.stringify(dummy));
            console.log(testData);
            console.log(Array.isArray(testData));
            let res = testData.filter(function(element){
                return element.type=="mushroom"; 
            });
            console.log(res);
            // console.log(res[0]);
            setItem("item");
        }catch(error) {
            console.log(error);
        }
    }

    const StakingStartModal = () => {
        return (
            <Modal
                open={startopen}
                onClose={handleStartClose}
                disableAutoFocus={true}
            >
                <Box className="WalletModalBox">
                    <div className="WalletModalTitleContainer">
                        <span className="WalletModalTitleButton">Mushroom Staking?</span>
                        <button className="WalletModalCloseButton" onClick={() => handleStartClose()}>X</button>
                    </div>
                    <br />
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <img src={Mush02} style={{ width: "50%" }} />
                    </div>
                    <br />
                    <div className="ItemMenuDiv">
                        <button className="ItemMenuButtonStyleOne" onClick={() => handleCloseStartModal("start")}>STAKING</button>
                    </div>
                    <br />
                </Box>
            </Modal>
        )
    }

    const StakingCompleteModal = () => {
        return (
            <Modal
                open={completeopen}
                onClose={handleCompleteClose}
                disableAutoFocus={true}
            >
                <Box className="WalletModalBox">
                    <div className="WalletModalTitleContainer">
                        <span className="WalletModalTitleButton">Cancle Staking?</span>
                        <button className="WalletModalCloseButton" onClick={() => handleCompleteClose()}>X</button>
                    </div>
                    <br />
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <img src={Mush02} style={{ width: "50%" }} />
                    </div>
                    <br />
                    <div className="ItemMenuDiv">
                        <button className="ItemMenuButtonStyleOne" onClick={() => handleCloseCompleteModal("ready")}>YES</button>
                        <button className="ItemMenuButtonStyleTwo" onClick={() => handleCloseCompleteModal("start")}>NO</button>
                    </div>
                    <br />
                </Box>
            </Modal>
        )
    }

    return (
        <>
            {StakingState == "ready" ?
                <div className="Itembar">
                    <div className="ItemElement"><img src={item} onClick={() => handleOpenStartModal()} style={{ borderRadius: "5px" }} /></div>
                    <div className="ItemElement"></div>
                    <div className="ItemElement"></div>
                    <div className="ItemElement"></div>
                </div>
                :
                <div className="Itembar">
                    <div className="ItemElement"></div>
                    <div className="ItemElement"></div>
                    <div className="ItemElement"></div>
                    <div className="ItemElement"></div>
                </div>
            }
            <StakingStartModal />
            <StakingCompleteModal />
        </>
    )
}

export default BottomItembar;