<template class="temp">
    <div class="container">

        <h1> <img :src="image" />
        Centareum Offers DApp </h1>
        <h1>Seller Dashboard</h1>

        <div v-if="web3Available">

            <div class="card-deck">
            <MetaMask/>
            <OfferInput/>
            <ContractInformation/>
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
    import image from "@/assets/logo.png"

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
        },
        data: function () {
        return {
            image: image
        }
    }
    }
</script>

<style scoped >



</style>
