import React, {useState} from "react";
import { Link } from "react-router-dom";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { useEffect } from "react";

const TopBalancebar = () => {
    
    console.log("TopBalancebar");

    const [token, setToken] = useState(0);

    useEffect(() => {
        ViewMyToken();
    },[]);

    const ViewMyToken = () => {
        try{
            console.log("ViewMyToken");
            setToken(10);
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <div className="TopBalancebar">
            <div className="TopBalancebarBalances">
                <div className="TopBalanceBarToken"></div>
                <div>{token}</div>
            </div>
            <div className="TopBalanceBarIcon">
                <Link to="/wallet" className="WalletIcon">
                    <MdOutlineAccountBalanceWallet size={24} />
                </Link>
            </div>
        </div>
    )
}

export default TopBalancebar;