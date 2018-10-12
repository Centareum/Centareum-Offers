<template>
    <div class="card">
        <div class="card-header">About Us</div>
        <div class="card-body">
            <div class="list-group">
            <div class="list-group-item">{{"Centareum is refining the future of global brick & mortar retail business.We aim to drive an impact through a unique, easy to operate and Customer-loyalty creating end-to-end proximity based mobile marketing platform enabled by Blockchain and AI."}}</div>

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
