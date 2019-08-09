import Vue from 'vue'

export const loadData = ({ commit }) => {
    Vue.http.get('data.json')
        .then(resp => resp.json())
        .then(data => {
            if ( data ) {
                const stocks = data.stocks;
                const stockPortfolio = data.stockPortfolio;
                const funds = data.funds;

                const portfolio = {
                    stockPortfolio,
                    funds
                }

                commit('SET_PORTFOLIO', portfolio);
                commit('SET_STOCKS', stocks);
            }
        });
}
