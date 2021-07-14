<template>
	<div>
		<b-row>
			<b-col style="text-align: center">
				<h1>Caja Morelia Valladolid</h1>
			</b-col>
		</b-row>
		<b-row class="mt-5">
			<b-col>
				<clients-table />
			</b-col>
		</b-row>
	</div>
</template>

<script>
import ClientsTable from '@/components/ClientsTable.vue'
import { mapActions } from 'vuex'

export default {
	name: 'Home',
	components: {
		ClientsTable,
	},
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

		// this.deleteClient(1)
	},
	methods: {
		...mapActions('api', [
			'fetchClients',
			'fetchClientsAccounts',
			'updateClient',
			'deleteClient',
		]),
	},
}
</script>
