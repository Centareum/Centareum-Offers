<template>
    <div class="col-lg-3 col-md-6">
        <div class="card">
            <div class="card-top">
                <h4 class="card-title m-0 float-left">MetaMask</h4><!-- /.content-title -->


            </div><!-- /.card-top -->
            <div class="card-body p-0 pt-4 pb-4 download-chart">
            <ul class="list-group">
                <!-- shows that i'm reading account information from MetaMask -->
                <li class="list-group-item abbreviate">Account: {{account}}</li>
                <li class="list-group-item">Balance: {{balance}}</li>
            </ul>
            </div>

        </div>
    </div>
</template>

<script>

    export default {
        computed: {
            account () {
                return this.$store.state.web3.account;
            },
            balance () {
                return this.$store.state.web3.balance;
            }
        }
    }
</script>

<style scoped>
    .download-chart{
        height: 225px;
    }
    canvas{
        min-width: inherit;
    }
</style>
