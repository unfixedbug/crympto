import React from "react";
import { TransactionContext } from "../context/TransactionContext";
import dummyData from "../utils/dummyData";
import { shortenAddress } from "../utils/shortenAddress";

// transaction card
const TransactionCard = ({
  addressTo,
  addressFrom,
  timestamp,
  message,
  keyword,
  amount,
  url,
}) => {
  return <div className="bg-[#181918] m-4 flex flex-1
  2xl:min-w-[450px]
  2xl:max-w-[500px]
  sm:min-w-[270px]
  sm:max-w-[300px]
  flex-col p-3 rounded;md hover:shadow-xl
  ">
    <div className="flex flex-col items-center w-full mt-3">
      <div className="w-full mb-6 p-2">
        {/* From line */}
        <a href={`https://ropsten.etherscan.io/address/${addressFrom}`} target="_blank" rel="noopener noreferrer">
          <p className="text-white text-base"> From: {shortenAddress(addressFrom)}</p>
        </a>
        {/* To line */}
        <a href={`https://ropsten.etherscan.io/address/${addressto}`} target="_blank" rel="noopener noreferrer">
          <p className="text-white text-base"> From: {shortenAddress(addressto)}</p>
        </a>
        <p className="text-white text-base">Amount: {amount} ETH</p>
        {message && (
          <>
          <br />
          <p className="text-white text-base">
            Message: {message}
          </p>
          </>
        )}

        <div className="bg-black p-3 px-5 w-max rounded-3xl -mt-5 shadow-2xl ">
          <p className="text-[#37C7D8] font-bold"></p>
        </div>
      </div>
    </div>

  </div>;
};

const Transactions = () => {
  const { currentAccount } = useContext(TransactionContext);

  return (
    <div className="flex w-full justify-center items-center 2xl:px-20 gradient-bg-transactions">
      <div className="flex flex-col md:p-12 py-12 px-4">
        {currentAccount ? (
          <h3 className="text-white text-3xl text-center my-2">
            Latest Transactions
          </h3>
        ) : (
          <h3 className="text-white text-3xl text-center my-2">
            Connect your account
          </h3>
        )}
        {/* latest Transctions if, account is connected */}
        <div className="flex flex-wrap items-center justify-center">
          {dummyData.reverse().map((transaction, i) => (
            <TransactionCard key={i} {...transaction} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Transactions;
