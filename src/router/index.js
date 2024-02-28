// ROUTING RULES

import { createRouter, createWebHashHistory } from "vue-router";
import AllProducts from '../components/AllProducts.vue';
import Login from '../components/Login.vue';
import CustomerList from '../components/CustomerList.vue';
import ProductDetails from '../components/ProductDetails.vue';
import CatagoryList from '../components/CatagoryList.vue';

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: AllProducts
        },
        {
            path: "/auth",
            name: "Auth",
            component: Login
        },
        {
            path: "/customers",
            name: "customers",
            component: CustomerList
        },
        {
            path:"/products/:id",
            name:"product_details",
            component: ProductDetails
        },
        {
            path:"/catagories",
            name: "catagory",
            component: CatagoryList
        }

    ]
});

export default router;