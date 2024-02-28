<template>
	<NavigationMenu />
	<RouterView />

</template>


<script setup>
import { RouterView } from 'vue-router'
import NavigationMenu from './components/NavigationMenu.vue'

</script>
