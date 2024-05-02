const {
    time,
    loadFixture,
  } = require("@nomicfoundation/hardhat-toolbox/network-helpers");
  const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
  const { expect } = require("chai");
  
  describe("Go_eth",()=>{
    let go_eth;

    beforeEach(async()=>{
      const Go_eth= await ethers.getContractFactory("GoETH");
      go_eth=await Go_eth.deploy();

    })
    describe("Deployment",async ()=>{
      it("deploys the smartcontract",async()=>{
        

        let result=await go_eth.name();
        expect(result).to.be.equal("GoETH");

        result= await go_eth.symbol();
        expect(result).to.be.equal("GETH");

    })

    })
    
  })