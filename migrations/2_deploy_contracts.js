const Vouchers = artifacts.require('./Vouchers.sol')

module.exports = function (deployer) {
    deployer.deploy(Vouchers).then(function (instance) {
        instance.insert("Pizza Hut", "Flat 50% Off on Second Medium Pizza", 300000000000000000)
        instance.insert("Barbeque Nation", "Complementary Drink", 500000000000000000)
        instance.insert("Javed Habib", "30% Off on Haircut", 700000000000000000)
        instance.revoke(2)
    })
}
