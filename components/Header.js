app.component('header-section', {
	props: {
		cart: {
			type: Array,
			required: true
		}
	},
	template:
		/*html*/
		`
		<div class="header">
			<h1 id="logo" class="brand">{{ brand }}</h1>
			<div class="cart" @click="updateShowCart"><span class="ico">shopping_cart</span> {{ cart.length }}</div>
			<div class="modal" v-if="showCart">
				<div class="content">
					<div class="close ico" @click="updateShowCart">close</div>
					<ul>
						<li v-if="cart.length == 0">The cart is empty.</li>
						<li v-for="(item, index) in cart">
							<div class="separator"></div>
							<div>
								<b>{{item.brand}}</b> {{item.model}}<br>
								Color: {{item.color}}
							</div>
							<div>
								<img :src="item.image">
							</div>
						<span class="ico">delete&nbsp;</span>
						</li>
						<li>Total: {{ calcTotalPrice }}</li>
					</ul>
				</div>
			</div>
		</div>
	`,

	data() {
		return {
			brand: 'FlyLow',
			showCart: false,
			totalPrice: 0
		};
	},

	methods: {
		updateShowCart() {
			this.showCart = !this.showCart;
		}
	},
	computed: {
		calcTotalPrice(){
			this.cart.forEach(item => {
				this.totalPrice += item.price;
			});
			return this.totalPrice.toFixed(2);
		}
	}
});