// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract Transactions {

    uint256 transactionCounter;
    
    event Transfer(
        address from,
        address receiver,
        uint256 amount,
        string message,
        uint256 timestamp,
        string keyword
    );

    struct TransferStruct {
        address sender;
        address receiver;
        uint256 amount;
        string message;
        uint256 timestamp;
        string keyword;
    }

    TransferStruct[] transactions;

    function addToBlockchain(address payable receiver, uint amount, string memory message, string memory keyword) public {
        // increment the transaction counter
        transactionCounter++;

        // store the transaction in the blockchain
        transactions.push(TransferStruct(msg.sender, receiver, amount, message, block.timestamp, keyword ));

        emit Transfer(msg.sender, receiver, amount, message, block.timestamp, keyword );
    }

    function getAllTransactions() public view returns (TransferStruct[] memory) {
        return transactions;
    }
    
    function getTransactionCount() public view returns (uint256) {
        return transactionCounter;
    }
}