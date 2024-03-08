<template>
	<div class="container" v-if="products">
        <RouterLink :to="`/products/${item.id}`" class="card" v-for="(item, index) in products" :item="item" :key="index">
            <img :src="item.image" :alt="item.id">
            <div style="min-height: 21%;">
                <h3 style="text-align: left;">{{ item.title }}</h3>
                <p style="color: darkred;">$${{ item.price }}</p>
            </div>
        </RouterLink>
	</div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { RouterLink } from 'vue-router'
import { MasterClientsProvider } from '@/libs/clients/MasterClientsProvider';

const products = ref('');

const { productsClient } = MasterClientsProvider();

const apiCall = async () => {

	let args = {
		host: "https://fakestoreapi.com",
	}

	const res = await productsClient.getAll(args);
	if(res.status == 200) {
		products.value = res.body;
	}
}


onMounted(() => apiCall());

</SCript>


<style>
.card {
	width: 23%;
	overflow: hidden;
	border-radius: 2%;
	margin: 10px;
	cursor: pointer;
	padding: 20px;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	transition: 0.2s;
	
}
.card:hover {
	box-shadow: 2px 2px 15px rgba(39, 11, 255, 0.2);
	transition-delay: 150ms;
}
.card img {
	width: 100%;
}
.container {
	display: flex;
	flex-wrap: wrap;
	margin: 25px;
}
a {
    text-decoration: none;
    color: rgb(48, 48, 48);
}

</style>