<template>
    <div class="card bg-light border-light">
        <div class="card-header">
            Create new Offer
        </div>
        <!-- shows that i'm writing data to my contract -->
        <form id="newVoucher" v-on:submit.prevent="placeVoucher()">
            <div class="card-body">
                <div class="form-group">
                    <label for="title">Store Name:</label>
                    <input id="title" class="form-control" v-model="voucher.title"
                           placeholder="The name of your store like Domino's Pizza"
                           required/>
                </div>
                <div class="form-group">
                    <label for="description">Product specific offer description:</label>
                    <input id="description" class="form-control" v-model="voucher.description"
                           placeholder="Something like-Free Coke with Medium Pizza"/>
                </div>
                <div class="form-group">
                    <label for="priceInEther">Price:</label>
                    <div class="input-group-prepend">
                        <span class="input-group-text">Ether</span>
                        <input id="priceInEther" class="form-control" v-model="voucher.priceInEther"
                               placeholder="Enter price for your offer"
                               required/>
                    </div>
                </div>

            </div>
            <div class="card-footer">
                <div class="row">
  <span class="input-group-text">
                    <button  type="button" class="btn btn-outline-primary" >Create Offer</button>
                    </span>
                </div>
            </div>
        </form>
    </div>
</template>
<script>
    export default {
        data: () => (
            {
                voucher: {
                    title: '',
                    description: '',
                    priceInEther: null
                }
            }),
        methods: {
            async placeVoucher () {
                if (/^[0-9]+$/.test(this.voucher.priceInEther))
                    await this.$store.dispatch('placeVoucher', this.voucher)
                else {
                    alert("Should be a positive number")
                }
            }
        }
    }
</script>
<style scoped></style>
