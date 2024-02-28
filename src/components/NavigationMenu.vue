<template>
    <div class="menu">
        <RouterLink active-class="active" to="/">Home</RouterLink>
        <RouterLink active-class="active" to="/customers">Customers</RouterLink>
        <RouterLink active-class="active" to="/auth">Authorization</RouterLink>
        <RouterLink active-class="active" to="/catagories">Catagories</RouterLink>
        <RouterLink active-class="active" to="/carts">Cart</RouterLink>
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'

</script>

<style>
.menu {
    margin: 30px 0px;
    display: flex;
    justify-content: start;
    align-items: center;
    min-height: 50px;
}

.menu a {
    text-decoration: none;
    color: rgb(46, 46, 46);
    font-weight: bold;
    font-size: large;
    border-radius: 5px;
    padding: 5px 20px;
    margin: 2px;
}

.menu a:hover {
    box-shadow: 2px 2px 10px rgba(128, 128, 128, 0.405);
}
.active {
    box-shadow: 2px 2px 10px rgba(128, 128, 128, 0.405);
}

</style>