// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.4;

contract TokenKing {
    
    address public owner;
    uint256 baseClaimPrice;

    struct King {
        address kingAddress;
        string kingAlias;
        uint256 claimPrice;
        uint claimTime;
    }
    
    King[] kings;
    
    event ThroneClaimed(King _newKing);
    
    modifier onlyOwner() {
        require(owner == msg.sender, "Only owner allowed");
        _;
    }
    
    modifier genesisCreated() {
        require(kings.length > 0, "Genesis King needs to be created");
        _;
    }
    
    constructor() payable {
        owner = msg.sender;
    }
    
    function createGenesis() onlyOwner public payable {
        require(kings.length == 0, "Genesis King already created");
        
        baseClaimPrice = msg.value;
        
        kings.push(King(owner, "Genesis King", baseClaimPrice, block.timestamp));
        
        emit ThroneClaimed(latestKing());
    }
    
    function latestKing() genesisCreated public view returns (King memory) {
        return kings[kings.length - 1];
    }
    
    function getKings() genesisCreated public view returns (King[] memory) {
        return kings;
    }
    
    function currentClaimPrice() genesisCreated public view returns (uint256) {
        if (block.timestamp - latestKing().claimTime >= 604800) {
            return baseClaimPrice * 2;
        } else {
            return latestKing().claimPrice * 2;
        }
    }
    
    function claimThrone(string memory _kingAlias) genesisCreated public payable {
        address _kingAddress = msg.sender;
        uint256 _claimPrice = msg.value;
        
        if (block.timestamp - latestKing().claimTime >= 604800) {
            require(_claimPrice == baseClaimPrice, "Wrong amount of Ether provided");
            
            kings.push(King(_kingAddress, _kingAlias, _claimPrice, block.timestamp));
            
            (bool claimSuccess, ) = owner.call{ value: _claimPrice }("");
            require(claimSuccess, "Transfer to owner failed");
        } else {
            require(_claimPrice == currentClaimPrice(), "Wrong amount of Ether provided");
            
            King memory _latestKing = latestKing();
        
            kings.push(King(_kingAddress, _kingAlias, _claimPrice, block.timestamp));
            
            // 2% fee
            uint256 _feePrice = _claimPrice / 50;
            uint256 _kingPrice = _claimPrice - _feePrice;
            
            (bool feeSuccess, ) = owner.call{ value: _feePrice }("");
            require(feeSuccess, "Transfer to owner failed");
            
            (bool kingSuccess, ) = _latestKing.kingAddress.call{ value: _kingPrice }("");
            require(kingSuccess, "Transfer to previous king failed");
        }
        
        emit ThroneClaimed(latestKing());
    }
    
}