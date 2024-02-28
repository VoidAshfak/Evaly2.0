<template>
	<div class="container">
            <img style="width: 40%; margin-bottom: 100px;" :src="item.image" :alt="item.id">
            <div style="min-height: 21%; width: 80%;">
                <h2 style="text-align: left; font-weight: bolder;">{{ item.title }}</h2>
                <div><span class="catagory-tag">{{ item.category }}</span></div>
                <h4 style="text-align: left; font-weight: 600;">{{ item.description }}</h4>
                <p style="color: darkred;">$${{ item.price }}</p>
            </div>
	</div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { MasterClientsProvider } from '@/libs/clients/MasterClientsProvider';
const { productsClient } = MasterClientsProvider()
const route = useRoute();

const item = ref('');

const apiCall = async () => {
    let args = {
        host: "https://fakestoreapi.com",
        id: route.params.id
    }

    const res = await productsClient.getOne(args);

    if(res.status == 200){
        item.value = res.body;
    }

}
onMounted(() => apiCall());
</script>


<style>
.catagory-tag {
    background-color: black;
    color: white;
    border-radius: 5px;
    padding: 1px 5px;
    font-weight: bold;
    font-size: small;
}
.container {
	display: flex;
	flex-wrap: wrap;
    padding: 0% 5%;
}
</style>