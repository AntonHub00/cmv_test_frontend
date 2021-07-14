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

		// this.fetchClientsAccounts(1)
		// 	.then((accounts) => console.log(accounts))
		// 	.catch((error) => console.log(error))

		// this.updateClient({
		// 	clientId: 1,
		// 	firstName: 'Antoni',
		// 	firstLastName: 'Ocho',
		// 	secondLastName: 'Adam',
		// 	rfc: 'AOOrfc12',
		// 	curp: 'AOOcurp12',
		// })
	},
	methods: {
		...mapActions('api', [
			'fetchClients',
			'fetchClientsAccounts',
			'updateClient',
		]),
	},
}
</script>
