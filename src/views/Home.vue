<template>
	<div>
		<div>Home</div>
		<div>This is a test component</div>
	</div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
	name: 'Home',
	created() {
		this.fetchClients()
	},
	methods: {
		...mapActions('api', ['fetchClients']),
	},
}
</script>
