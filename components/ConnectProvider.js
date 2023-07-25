import React, { createContext, useEffect, useState, useContext } from "react";

const { ethereum } = typeof window !== "undefined" ? window : {};

const ConnectContext = createContext();

export const useConnect = () => {
    return useContext(ConnectContext);
}

export default function ConnectProvider({ children }) {
    const [ walletAddress, setWalletAddress ] = useState(null);
    const [ loading, setLoading ] = useState(false);
    const [ error, setError ] = useState(null);

    function checkEthereumExists() {
        if (!ethereum) {
            setError("Please Install MetaMask.");
            return false;
        }
        return true;
    };

    async function connectWallet() {
        setLoading(true);
        setError("");
        if (checkEthereumExists()) {
            try {
                const accounts = await ethereum.request({
                    method: "eth_requestAccounts",
                });
                console.log(accounts);
                setWalletAddress(accounts[ 0 ]);
                setLoading(false);
            } catch (err) {
                setError(err.message);
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
        if (checkEthereumExists()) {
            ethereum.on("accountsChanged", getConnectedAccounts);
            getConnectedAccounts();
        }
        return () => {
            ethereum.removeListener("accountsChanged", getConnectedAccounts);
        };
    }, []);


    return <ConnectContext.Provider value={{ walletAddress, connectWallet, error, loading }}>
        {children}
    </ConnectContext.Provider>;
}