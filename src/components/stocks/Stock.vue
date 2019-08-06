<template lang="html">
    <div class="col-sm-6 col-md-4">
        <div class="panel panel-success">
            <div class="panel-heading">
                {{ stock.name }}
                <small>(Price: {{ stock.price }})</small>
            </div>
            <div class="panel-body">
                <div class="pull-left">
                    <input v-model="quantity" type="number" class="form-control" placeholder="Quantity">
                </div>
                <div class="pull-right">
                    <button
                        class="btn btn-success"
                        @click="buyStock"
                        :disabled="quantity <= 0 || !Number.isInteger(quantity)">Buy</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['stock'],
    methods: {
        buyStock() {
            const order = {
                stockId: this.stock.id,
                stockPrice: this.stock.price,
                quantity: this.quantity
            };
            console.log(order);
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
