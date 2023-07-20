// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract Escrow {

    struct escrow {
        uint256 amount;
        address payable buyer;
        address payable seller;
        address payable agent;
        bool buyerApprove;
        bool sellerApprove;
        bool agentApprove;
    }

    uint public escrowCount = 0;

    mapping(uint => escrow) public escrows;

    event EscrowCreated(uint id, uint amount, address buyer, address seller, address agent);
    event EscrowApproved(uint id, address approver);
    event EscrowDisbursed(uint id, address approver);

    function createEscrow(uint _amount, address payable _seller, address payable _agent) public {
        escrowCount++;
        escrows[escrowCount] = escrow(_amount, payable(msg.sender), _seller, _agent, false, false, false);
        emit EscrowCreated(escrowCount, _amount, msg.sender, _seller, _agent);
    }

    function approveEscrow(uint _id) public {
        escrow memory _escrow = escrows[_id];
        require(msg.sender == _escrow.buyer || msg.sender == _escrow.seller || msg.sender == _escrow.agent, "Not authorized");
        if (msg.sender == _escrow.buyer) {
            _escrow.buyerApprove = true;
        }
        if (msg.sender == _escrow.seller) {
            _escrow.sellerApprove = true;
        }
        if (msg.sender == _escrow.agent) {
            _escrow.agentApprove = true;
        }
        escrows[_id] = _escrow;
        emit EscrowApproved(_id, msg.sender);
    }

    function disburseEscrow(uint _id) public {
        escrow memory _escrow = escrows[_id];
        require(_escrow.buyerApprove && _escrow.sellerApprove && _escrow.agentApprove, "Not approved");
        _escrow.seller.transfer(_escrow.amount);
        emit EscrowDisbursed(_id, msg.sender);
    }

    function getEscrow(uint _id) public view returns (escrow memory) {
        return escrows[_id];
    }
}