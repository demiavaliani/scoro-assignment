import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import axios from "axios";
import VueAxios from "vue-axios";
import "./assets/css/style.css";

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);

axios.interceptors.request.use(
	(config) => {
		config.data = {
			...config.data,
			lang: "eng",
			company_account_id: "",
			apiKey: "",
		};
		return config;
	},
	function (error) {
		// process error
		return Promise.reject(error);
	}
);

axios.interceptors.response.use((response) => {
	let data = response.data.data;
	return data;
});

new Vue({
	store,
	render: (h) => h(App),
}).$mount("#app");
