// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract Escrow {
    struct Creator {
        string name;
        string description;
        bool available;
        uint charges;
        mapping(string => string) links;
        address adrs;
    }

    struct Sponsor {
        string name;
        string description;
        address adrs;
    }

    struct EscrowSponsorToCreator {
        uint escrowId;
        Creator creator;
        Sponsor sponsor;
        string title;
        string desc;
        uint contractValue;
        bool sponsorAccepted;
        bool creatorAccepted;
        bool workSent;
        bool proofOfWorkAccepted;
    }

    address payable public owner;
    mapping(address => Creator) public creators;
    mapping(address => Sponsor) public sponsors;
    mapping(address => EscrowSponsorToCreator[]) public contracts;
    uint escrowCounter;

    constructor() {
        owner = payable(msg.sender);
    }

    modifier onlyCreator(uint escrowId) {
        EscrowSponsorToCreator[] storage _contractsCreator = contracts[msg.sender];
        require(_contractsCreator[escrowId].creator.adrs == msg.sender, "Sender should be creator");
        _;
    }

    modifier onlySponsor(uint escrowId) {
        EscrowSponsorToCreator[] storage _contractsSponsor = contracts[msg.sender];
        require(_contractsSponsor[escrowId].sponsor.adrs == msg.sender, "Sender should be sponsor");
        _;
    }


    // Creators
    function createCreator(string memory _name, string memory _description, uint _charges, string[] memory _links) public {
        Creator memory _creator = creators[msg.sender];
        if(_creator.charges != 0) revert("Creator already exists, go and update");
        
        Creator memory creator;
        creator.name = _name;
        creator.description = _description;
        creator.charges = _charges;
        creator.links = _links;
        creator.adrs = msg.sender;
        
        creators[msg.sender] = creator;
    }

    function updateCreator(string memory _name, string memory _description, uint _charges, string[] memory _links) public {
        Creator storage creator = creators[msg.sender];

        creator.name = _name;
        creator.description = _description;
        creator.charges = _charges;
        creator.links = _links;
        creator.adrs = msg.sender;
        
        creators[msg.sender] = creator;
    }

    function deleteCreator() public {
        delete creators[msg.sender];
    }

    // Sponsors
    function createSponsor(string memory _name, string memory _description) public {
        Sponsor memory _sponsor = sponsors[msg.sender];
        if(bytes(_sponsor.name).length != 0) revert("Sponsor already exists, go and update");
        
        Sponsor memory sponsor;
        sponsor.name = _name;
        sponsor.description = _description;
        sponsor.adrs = msg.sender;
        
        sponsors[msg.sender] = sponsor;
    }

    function updateSponsor(string memory _name, string memory _description) public {
        Sponsor storage sponsor = sponsors[msg.sender];

        sponsor.name = _name;
        sponsor.description = _description;
        
        sponsors[msg.sender] = sponsor;
    }

    function deleteSponsor() public {
        delete sponsors[msg.sender];
    }

    // Escrow Contract between Sponsor and Creator

    function createEscrow(address _creator, address _sponsor, string memory _title, string memory _desc) public payable returns (address, address) {
        require(msg.sender == _sponsor, "You should be sponsor");
        Sponsor memory _testSponsor = sponsors[msg.sender];
        require(address(0) != _testSponsor.adrs, "Sponsor does not exists");

        EscrowSponsorToCreator memory escrow;
        
        Creator memory creator = creators[_creator];
        Sponsor memory sponsor = sponsors[_sponsor];

        bool isSponsor = false;

        if(msg.sender == _creator) isSponsor = false; 
        if(msg.sender == _sponsor) isSponsor = true; 

        escrow.escrowId = escrowCounter;
        escrow.creator = creator;
        escrow.sponsor = sponsor;
        escrow.title = _title;
        escrow.desc = _desc;
        escrow.contractValue = msg.value;
        escrow.sponsorAccepted = isSponsor;
        escrow.creatorAccepted = (!isSponsor);
        escrow.workSent = false;
        escrow.proofOfWorkAccepted = false;

        contracts[_creator].push(escrow);
        contracts[_sponsor].push(escrow);

        escrowCounter++;
        return (_testSponsor.adrs, address(0));
    }

    function acceptEscrowSponsor(uint escrowId) public {
        EscrowSponsorToCreator[] storage _contractsSponsor = contracts[msg.sender];
        require(_contractsSponsor[escrowId].sponsor.adrs == msg.sender, "Sender should be sponsor");
        EscrowSponsorToCreator[] storage _contractsCreator = contracts[_contractsSponsor[escrowId].creator.adrs];
       
        _contractsSponsor[escrowId].sponsorAccepted = true;
        _contractsCreator[escrowId].sponsorAccepted = true;
    }

    function acceptEscrowCreator(uint escrowId) public {
        EscrowSponsorToCreator[] storage _contractsCreator = contracts[msg.sender];
        require(_contractsCreator[escrowId].creator.adrs == msg.sender, "Sender should be creator");
        EscrowSponsorToCreator[] storage _contractsSponsor = contracts[_contractsCreator[escrowId].sponsor.adrs];
       
        _contractsSponsor[escrowId].creatorAccepted = true;
        _contractsCreator[escrowId].creatorAccepted = true;
    }

    function proofOfWorkCompleted(uint escrowId) public {
        EscrowSponsorToCreator[] storage _contractsSponsor = contracts[msg.sender];
        require(_contractsSponsor[escrowId].sponsor.adrs == msg.sender, "Sender should be sponsor");
        EscrowSponsorToCreator[] storage _contractsCreator = contracts[_contractsSponsor[escrowId].creator.adrs];

        _contractsCreator[escrowId].proofOfWorkAccepted = true;
        _contractsSponsor[escrowId].proofOfWorkAccepted = true;
    }

    function unlockFunds(uint escrowId) public onlyCreator(escrowId) {
        EscrowSponsorToCreator[] storage _contractsCreator = contracts[msg.sender];
        EscrowSponsorToCreator[] storage _contractsSponsor = contracts[_contractsCreator[escrowId].sponsor.adrs];
       
        require(address(this).balance >= _contractsCreator[escrowId].contractValue, "Something is wrong");
        require(_contractsSponsor[escrowId].proofOfWorkAccepted, "Proof of Work not completed");

        address _creatorAddress = payable(_contractsCreator[escrowId].creator.adrs);

        (bool success, ) = _creatorAddress.call{value: _contractsCreator[escrowId].contractValue}("");
        require(success, "Funds not transfered");

        _contractsCreator[escrowId].contractValue = 0;
        _contractsSponsor[escrowId].contractValue = 0;
    }
}
