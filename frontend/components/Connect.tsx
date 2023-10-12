import React from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";


const Connect = () => {
    return (
        <div className="grid grid-rows-2 items-center justify-center">
            <div className="py-2">
                <h1 className="text-center text-white font-mono">Connect a wallet to start</h1>
            </div>
            <div className="py-2 flex justify-center">
                <ConnectButton label="connect" />
            </div>
        </div>
    )
}
export default Connect;
