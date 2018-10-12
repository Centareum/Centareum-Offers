<template>
    <div class="card">
        <div class="card-header">About Us</div>
        <div class="card-body">
            <div class="list-group">
            <div class="list-group-item">{{contactInfo}}</div>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        computed: {
            owner () {
                return this.$store.state.voucher.owner
            },
            contactInfo () {
                return this.$store.state.voucher.contactInfo
            }

        }
    }
</script>

<style scoped>


</style>
