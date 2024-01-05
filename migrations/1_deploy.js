var Router = artifacts.require("UniswapV2Router02.sol");

module.exports = function(deployer) {
  // Testnet
  
  const factory = '0x52fbA58f936833F8b643e881Ad308b2e37713a86'
  const weth = '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2'
  deployer.deploy(Router, factory, weth);
  
/*
  // BSC
  const factoryAddress = '0x5f76c63aAcA37ABDBcbFF0Ce67A1b8560ACDcbE7'
  const WBNBAddress = '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'
  deployer.deploy(Router, factoryAddress, WBNBAddress);*/
};