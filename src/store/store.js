import Vue from 'vue';
import Vuex from 'vuex';

import stocks from './modules/Stocks.js'
import portfolio from './modules/Portfolio.js'

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        stocks,
        portfolio
    }
});
