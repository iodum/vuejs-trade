import Vue from 'vue';
import Vuex from 'vuex';

import stocks from './modules/Stocks.js'
import portfolio from './modules/Portfolio.js'
import * as actions from './actions.js'

Vue.use(Vuex);

export const store = new Vuex.Store({
    actions,
    modules: {
        stocks,
        portfolio
    }
});
