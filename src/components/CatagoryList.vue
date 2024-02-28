<template>
    <div style="display: flex; flex-wrap: wrap; margin-top: 30px;">
        <div @click="filterCatagory(option)" class="catagory-card" v-for="(option, index) in catagories" :key="index">
            {{ option.toLocaleUpperCase() }}
        </div>
    </div>

    <div class="container" v-if="filteredProducts">
        <div class="card" v-for="(item, index) in filteredProducts" :item="item" :key="index">
            <img :src="item.image" :alt="item.id">
            <div style="min-height: 21%;">
                <h3 style="text-align: left;">{{ item.title }}</h3>
                <p style="color: darkred;">$${{ item.price }}</p>
            </div>
        </div>
	</div>
</template>


<script setup>
import { ref, onMounted } from 'vue';
// import { RouterLink } from 'vue-router'
import { MasterClientsProvider } from '@/libs/clients/MasterClientsProvider';
const { catagoriesClient, catagoryProductClient } = MasterClientsProvider()


const catagories = ref('');
const filteredProducts = ref('');

const apiCall = async () => {
    let args = {
        host: "https://fakestoreapi.com",
    }

    const res = await catagoriesClient.getAll(args);
    if(res.status == 200) {
        catagories.value = res.body;
    }
}

const filterCatagory = async (catagory) => {
    let args = {
        host: "https://fakestoreapi.com",
        id: catagory
    }

    const res = await catagoryProductClient.getOne(args);
    if(res.status == 200) {
        filteredProducts.value = res.body;
    }
}

onMounted(()=>apiCall());

</script>


<style>
.catagory-card {
    width: 24%;
    padding: 10px;
    text-align: center;
    font-size: 1rem;
    font-weight: bolder;
    cursor: pointer;
}

.catagory-card:hover {
    background-color: rgb(0, 0, 0);
    color: white;
}
</style>