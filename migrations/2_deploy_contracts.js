const HOTDOGE = artifacts.require("./hotdoge");
module.exports = function(deployer) {
  deployer.deploy(HOTDOGE);
};
