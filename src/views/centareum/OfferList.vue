<template>
    <div>
        <h1>Available Offers</h1>
        <div class="card-columns">
            <OfferCard v-for="voucher in vouchers" :key="voucher.index" :voucher="voucher"/>
        </div>
    </div>
</template>
<script>
    import OfferCard from '@/components/OfferCard'

    export default {
        components: {
            OfferCard
        },
        computed: {
            vouchers () {
                return this.$store.state.voucher.vouchers
            }
        }
    }
</script>
<style scoped></style>
