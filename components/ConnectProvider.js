import React, { createContext, useEffect, useState, useContext } from "react";
import abi from "./Escrow.json"
import { ethers } from "ethers";

const ConnectContext = createContext();
const CONTRACT_ADDRESS = "0x6d26449C2D1A0578E0a983a97FFE685018174ab1";
const contractABI = abi.abi;

export const useConnect = () => {
  return useContext(ConnectContext);
};

export default function ConnectProvider({ children }) {
    const [ ethereum, setEthereum ] = useState(null);
    const [ walletAddress, setWalletAddress ] = useState(null);
    const [ loading, setLoading ] = useState(false);
    const [ contract, setContract ] = useState(null);
    const [ error, setError ] = useState(null);

    async function connectWallet() {
        setLoading(true);
        setError("");
        if (ethereum) {
            try {
                const accounts = await ethereum.request({
                    method: "eth_requestAccounts",
                });
                console.log(accounts);
                setWalletAddress(accounts[ 0 ]);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                console.log(err);
            }
        }
    };

    async function getConnectedAccounts() {
        setError("");
        try {
            const accounts = await ethereum.request({
                method: "eth_accounts",
            });
            console.log(accounts);
            setWalletAddress(accounts[ 0 ]);
        } catch (err) {
            setError(err.message);
        }
    };


    useEffect(() => {
        if (ethereum) {
            ethereum.on("accountsChanged", getConnectedAccounts);
            getConnectedAccounts();
        }
        return () => {
            ethereum.removeListener("accountsChanged", getConnectedAccounts);
        };
    }, []);


    return <ConnectContext.Provider value={{ walletAddress, connectWallet, error, loading, ethereum, contract }}>
        {children}
    </ConnectContext.Provider>;
}
