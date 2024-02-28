<template>
<div class="list-container">
    <div style="width: 75%;">
        <ol>
            <li v-for="(customer, index) in customers" class="list-item">
                <p class="name"><span> {{ customer.name.firstname }}</span> <span> {{ customer.name.lastname }} 
                    <button @click="editCustomer(customer)" >Edit</button> </span></p>
                <ul>
                    <li><span>Email: </span>{{ customer.email }}</li>
                    <li><span>Phone: </span>{{ customer.phone }}</li>
                </ul>
            </li>
        </ol>
    </div>
    <div style="width: 25%; display: flex; flex-direction: column; margin-top: 20vh;">
        <input class="control" type="text" placeholder="Email..." v-model="newEmail">
    </div>
</div>
</template>


<script setup>
import { ref, onMounted } from 'vue';
import { MasterClientsProvider } from '@/libs/clients/MasterClientsProvider';

const customers = ref('');
const newEmail = ref('')

const { customersClient } = MasterClientsProvider();

const apiCall = async () => {

	let args = {
		host: "https://fakestoreapi.com",
	}

	const res = await customersClient.getAll(args);
	if(res.status == 200) {
		customers.value = res.body;
	}
}

let data;
let id;

const editCustomer = async (customer) => {

    data = {
        email:newEmail.value, //CHANGING VALUE
        username:customer.username,
        password:customer.password,
        name:{
            firstname:"Asif",
            lastname:"Ahnik"
        },
        address:{
            city:customer.address.city,
            street:customer.address.street,
            number:customer.address.number,
            zipcode:customer.address.zipcode,
            geolocation:{
                lat:customer.address.geolocation.lat,
                long:customer.address.geolocation.long
            }
        },
        phone:customer.phone
    }
    id = customer.id;

    let args = {
        host: "https://fakestoreapi.com",
        data: data,
        // id: id
    }
    const res = await customersClient.create(args);
    console.log(res);
}


onMounted(() => apiCall());

</SCript>

<style scoped>
.list-item {
    background-color: lightgray;
    margin: 8px;
    border-radius: 2px;
    padding: 5px 50px;
}

span {
    font-size: larger;
    font-weight: 700;    
}
.list-container {
    display: flex;
    flex-wrap: wrap;
}

</style>