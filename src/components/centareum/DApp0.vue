<template class="temp">
    <div class="container">


        <h1>Available Offers</h1>

        <div v-if="web3Available">

            <div class="card-deck">

            </div>

            <OfferList/>
        </div>
        <div v-else class="alert alert-danger" role="alert">
            <div>No Web3 instance detected. Please configure MetaMask correctly and then reload this page.</div>
        </div>
    </div>
</template>

<script>
    import MetaMask from "./MetaMask";
    import OfferList from "./OfferList";
    import OfferInput from "./OfferInput";
    import ContractInformation from "./ContractInformation";

    export default {
        components: {
            ContractInformation,
            OfferInput,
            OfferList,
            MetaMask
        },
        computed: {
            web3Available () {
                return this.$store.state.web3.web3 != null;
            }
        },
        async beforeCreate () {
            console.log('Init components')
            await this.$store.dispatch('initWeb3')
            if (this.$store.state.web3.web3) {
                await this.$store.dispatch('fetchVoucherCount')
                await this.$store.dispatch('fetchContractInformation')
            }


    }
    }
</script>

<style scoped >



</style>
