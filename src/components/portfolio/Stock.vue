<template lang="html">
    <div class="col-sm-6 col-md-4">
        <div class="panel panel-info">
            <div class="panel-heading">
                {{ stock.name }}
                <small>(Price: {{ stock.price }} | Quantity: {{ stock.quantity }})</small>
            </div>
            <div class="panel-body">
                <div class="pull-left">
                    <input v-model="quantity" type="number" class="form-control" placeholder="Quantity">
                </div>
                <div class="pull-right">
                    <button
                        class="btn btn-success"
                        @click="sellStock"
                        :disabled="!hasEnough || quantity <= 0">{{ hasEnough ? 'Sell' : 'hasnt enought' }}</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['stock'],
    computed:{
        funds() {
            return this.$store.getters.funds
        },
        hasEnough() {
            return this.quantity <= this.stock.quantity
        }
    },
    methods: {
        sellStock() {
            const order = {
                stockId: this.stock.id,
                stockPrice: this.stock.price,
                quantity: this.quantity
            };
            this.$store.dispatch('sellStock', order);
            this.quantity = 0;
        }
    },
    data() {
        return {
            quantity: 0
        }
    }
}
</script>

<style lang="css" scoped>
</style>
