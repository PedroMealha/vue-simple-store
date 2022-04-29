app.component('product-list', {
	template:
		/*html*/
		`
		<div class="product-list">
			<ul>
				<li v-for="(brand, index) in brands" @mouseover="updateBrandIndex(index)">
				{{ brand.name }}
				</li>
			</ul>
		</div>

		<div class="product-display">
			<div class="showcase">
				<h1>{{ brands[productBrandIndex].name }}</h1>
				<h3>{{ activeModel.name }}</h3>
				<p>{{ activeColor.name }}</p>
				<p><b>{{ activeModel.price}}€</b></p>
				<div class="colors">
					<div v-for="(color, index) in activeModel.colors"  :key="color.id" :class="{'double-color': color.secondary, active: color.isActive}" :style="{ backgroundColor: color.main, borderBottomColor: color.secondary }" @mouseover="updateColorIndex(index)"></div>
				</div>

				<img :src="activeImage">
				<img class="free-shipping" v-if="activeModel.freeShipping" src="./assets/free-shipping.svg"/>

				<ul class="views">
					<li v-for="(src, index) in activeColor.srcs" @mouseover="updateSrcIndex(index)">
						<img :src="src">
					</li>
				</ul>
			</div>	

			<button @click="addToCart">Add to cart</button>
		</div>
			
			`
	,

	data() {
		return {
			productBrandIndex: 0,
			productModelIndex: 0,
			productColorIndex: 0,
			productSrcIndex: 0,

			brands: [
				{
					name: 'Converse',
					models: [
						{
							name: 'Chuck Taylor All Star High',
							price: 89.99,
							freeShipping: true,
							colors: [
								{
									id: 314520506404,
									name: 'Black-Mason-White',
									main: '#dfdde1',
									secondary: '#2a292a',
									srcs: [
										'./assets/Shoes/Converse/Chuck Taylor All Star High/Black-Mason-White/314520506404_01.png',
										'./assets/Shoes/Converse/Chuck Taylor All Star High/Black-Mason-White/314520506404_02.png',
										'./assets/Shoes/Converse/Chuck Taylor All Star High/Black-Mason-White/314520506404_03.png',
										'./assets/Shoes/Converse/Chuck Taylor All Star High/Black-Mason-White/314520506404_04.png',
										'./assets/Shoes/Converse/Chuck Taylor All Star High/Black-Mason-White/314520506404_05.png'
									]
								},
								{
									id: 314520070104,
									name: 'White-Egret-White',
									main: '#e5e4ef',
									srcs: [
										'./assets/Shoes/Converse/Chuck Taylor All Star High/White-Egret-White/314520070104_01.png',
										'./assets/Shoes/Converse/Chuck Taylor All Star High/White-Egret-White/314520070104_02.png',
										'./assets/Shoes/Converse/Chuck Taylor All Star High/White-Egret-White/314520070104_03.png',
										'./assets/Shoes/Converse/Chuck Taylor All Star High/White-Egret-White/314520070104_04.png',
										'./assets/Shoes/Converse/Chuck Taylor All Star High/White-Egret-White/314520070104_05.png'
									]
								}
							]
						}
					]
				},
				{
					name: 'New Balance',
					models: [
						{
							name: '327',
							price: 99.99,
							freeShipping: false,
							colors: [
								{
									id: 314206840804,
									name: 'Angora-Dark Workwear-Norway Spruce',
									main: '#c9c5b7',
									secondary: '#996725',
									srcs: [
										'./assets/Shoes/New Balance/327/Angora-Dark Workwear-Norway Spruce/314206840804_01.png',
										'./assets/Shoes/New Balance/327/Angora-Dark Workwear-Norway Spruce/314206840804_02.png',
										'./assets/Shoes/New Balance/327/Angora-Dark Workwear-Norway Spruce/314206840804_03.png',
										'./assets/Shoes/New Balance/327/Angora-Dark Workwear-Norway Spruce/314206840804_04.png',
										'./assets/Shoes/New Balance/327/Angora-Dark Workwear-Norway Spruce/314206840804_05.png'
									]
								},
								{
									id: 314207800104,
									name: 'Navy-Burgundy-Yellow',
									main: '#734422',
									secondary: '#2e1317',
									srcs: [
										'./assets/Shoes/New Balance/327/Navy-Burgundy-Yellow/314207800104_01.png',
										'./assets/Shoes/New Balance/327/Navy-Burgundy-Yellow/314207800104_02.png',
										'./assets/Shoes/New Balance/327/Navy-Burgundy-Yellow/314207800104_03.png',
										'./assets/Shoes/New Balance/327/Navy-Burgundy-Yellow/314207800104_04.png',
										'./assets/Shoes/New Balance/327/Navy-Burgundy-Yellow/314207800104_05.png'
									]
								}
							]
						}
					]
				},
				{
					name: 'Puma',
					models: [
						{
							name: 'RS-Dreamer',
							price: 124.99,
							freeShipping: true,
							colors: [
								{
									id: 314103639804,
									name: 'Green-Black',
									main: '#32544f',
									srcs: [
										'./assets/Shoes/Puma/RS-Dreamer/Green-Black/314103639804_01.png',
										'./assets/Shoes/Puma/RS-Dreamer/Green-Black/314103639804_02.png',
										'./assets/Shoes/Puma/RS-Dreamer/Green-Black/314103639804_03.png',
										'./assets/Shoes/Puma/RS-Dreamer/Green-Black/314103639804_04.png',
										'./assets/Shoes/Puma/RS-Dreamer/Green-Black/314103639804_05.png'
									]
								},
								{
									id: 314101866904,
									name: 'White-Black',
									main: '#d5d4d7',
									secondary: '#312f2f',
									srcs: [
										'./assets/Shoes/Puma/RS-Dreamer/White-Black/314101866904_01.png',
										'./assets/Shoes/Puma/RS-Dreamer/White-Black/314101866904_02.png',
										'./assets/Shoes/Puma/RS-Dreamer/White-Black/314101866904_03.png',
										'./assets/Shoes/Puma/RS-Dreamer/White-Black/314101866904_04.png',
										'./assets/Shoes/Puma/RS-Dreamer/White-Black/314101866904_05.png'
									]
								}
							]
						}
					]
				}
			]
		};
	},

	methods: {
		updateBrandIndex(index) {
			this.productSrcIndex = 0;
			this.productBrandIndex = index;
		},

		updateModelIndex(index) {
			this.productModelIndex = index;
		},

		updateColorIndex(index) {
			this.productColorIndex = index;
		},

		updateSrcIndex(index) {
			this.productSrcIndex = index;
		},

		addToCart() {
			this.$emit('add-to-cart', {
				id: this.activeColor.id,
				brand: this.activeBrand.name,
				model: this.activeModel.name,
				color: this.activeColor.name,
				image: this.activeColor.srcs[0],
				price: this.activeModel.price
			});
		}
	},

	computed: {
		activeBrand() {
			return this.brands[this.productBrandIndex];
		},

		activeModel() {
			return this.brands[this.productBrandIndex].models[this.productModelIndex];
		},

		activeColor() {
			return this.brands[this.productBrandIndex].models[this.productModelIndex].colors[this.productColorIndex];
		},

		activeImage() {
			return this.brands[this.productBrandIndex].models[this.productModelIndex].colors[this.productColorIndex].srcs[this.productSrcIndex];
		}
	}
});