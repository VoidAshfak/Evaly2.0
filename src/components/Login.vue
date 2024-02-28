<template>
    <div class="login-window">
        <h2>Login</h2>
        <input class="control" v-model="name" type="text" placeholder="Username">
        <input class="control" v-model="pass" type="text" placeholder="Password">
        <button class="control" style="width: 10%; background-color: lightslategray; cursor: pointer;" @click="varifyUser">Login</button>
    </div>
</template>


<script setup>
import { ref } from 'vue';
import { MasterClientsProvider } from '@/libs/clients/MasterClientsProvider';
const { authClient } = MasterClientsProvider();


const name = ref('derek');
const pass = ref('jklg*_56');

const varifyUser = async () => {

    let data = {
        username: name.value,
        password: pass.value
    }

    let args = {
        host: "https://fakestoreapi.com",
        data: data
    }

    const res = await authClient.checkAuth(args);

    console.log(res.body);
    console.log(res.status);

    console.log("LOGGED IN");
}

</script>



<style>
.login-window {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.control {
    margin: 5px;
    width: 50%;
    height: 35px;        
}

</style>