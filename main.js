const app = Vue.createApp({
	data() {
		return {
			cart: []
		};
	},

	methods: {
		updateCart(item) {
			this.cart.push(item);
		}
	}
});