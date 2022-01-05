import React, {useEffect, useState} from 'react';
import {ethers} from 'ethers';

import {contractAbi, contractAddress} from '../utils/constants';
import { BsWindowSidebar } from 'react-icons/bs';


export const TransactionContext = React.createContext();

const { ethereum } = window;

const createEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const transactionContract = new ethers.Contract(contractAddress, contractAbi, signer);

    return transactionContract;
}


export const TransactionProvider = ({ children }) => {
    const [currentAccount, setCurrentAccount] = useState("");
    const [formData, setFormData] = useState({ addressTo: '', amount: '', keyword: '', message: ''});
    const [isLoading, setIsLoading] = useState(false);
    const [transactionCount, setTransactionCount] = useState(localStorage.getItem('transactionCount'));
    const [transactions, setTransactions] = useState(null);

    const handleChange = (e, name) =>{
        setFormData((prevState) => ({ ...prevState, [name]: e.target.value }));

    }

    const getAllTransactions = async() =>{
        try {
            if(!ethereum) return alert("Please install MetaMask");
            const transactionContract = createEthereumContract();

            const availableTransactions = await transactionContract.getAllTransactions();
            const structuredTransactions = availableTransactions.map((transaction) => ({
                addressTo: transaction.receiver,
                addressFrom: transaction.sender,
                timestamp: new Date(transaction.timestamp.toNumber() * 1000).toLocaleString(),
                message: transaction.message,
                keyword: transaction.keyword,
                amount: parseInt(transaction.amount._hex) / (10 ** 18)
            }));

            console.log(structuredTransactions);

            setTransactions(structuredTransactions);
        } catch (error) {
            console.log(error);
            
            throw new Error('No ethereum object.');
        }
    }
    
    const checkIfWalletIsConnected = async () => {
        try{
            if(!ethereum) return alert("Please install MetaMask"); 
    
            const accounts = await ethereum.request({method: 'eth_accounts'});
            if(accounts.length) {
                setCurrentAccount(accounts[0]);
    
                getAllTransactions();
            }
            else{
                console.log("No accounts found");
            }
        }
        catch(err){
            console.log(err);
            
            throw new Error('No ethereum object.');
        }
    }

    const checkIfTransactionsExist = async () => {
        try {
            const transactionContract = createEthereumContract();
            const transactionCount = await transactionContract.getTransactionCount();

            window.localStorage.setItem("transactionCount", transactionCount);

        } catch (error) {
            console.log(error);
            
            throw new Error('No ethereum object.');
        }
    }

    const connectWallet = async () => {
        try{
            if(!ethereum) return alert("Wallet is not connected, install MetaMask");

            const accounts = await ethereum.request({method: 'eth_requestAccounts'});
            setCurrentAccount(accounts[0]);

        }
        catch(err){
            console.log(err);
            
            throw new Error('No ethereum object.');
        }
    }

    const sendTransaction = async () => {
        try{
            if(!ethereum) return alert("Wallet is not connected, install MetaMask");

            const { addressTo, amount, keyword, message } = formData;
            const transactionContract = createEthereumContract();
            const newAmount = ethers.utils.parseEther(amount);

            await ethereum.request({
                method: 'eth_sendTransaction',
                params: [{
                    from: currentAccount,
                    to: addressTo,
                    gas: '0x5208',
                    value: newAmount._hex,

                }]
            });

            const transactionHash = await transactionContract.addToBlockchain(addressTo, newAmount, message, keyword);

            setIsLoading(true);
            await transactionHash.wait();
            setIsLoading(false);

            const transactionCount = await transactionContract.getTransactionCount();
            setTransactionCount(transactionCount.toNumber());

            window.location.reload();
        }
        catch(err){
            console.log(err);
            
            throw new Error('No ethereum object.');
        }
    }

    useEffect(() => {
        checkIfWalletIsConnected();
        checkIfTransactionsExist();
    }, [])

    return (
        <TransactionContext.Provider value={{ connectWallet, currentAccount, formData, setFormData, handleChange, sendTransaction, transactions, isLoading }}>
            {children}
        </TransactionContext.Provider>
    )
}
