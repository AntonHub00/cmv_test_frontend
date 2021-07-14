<template>
	<div>
		<b-table striped hover :items="clientsList" :fields="fields"> </b-table>
	</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
	name: 'ClientsTable',
	data() {
		return {
			fields: [
				{ key: 'id', label: 'Id' },
				{ key: 'first_name', label: 'Nombres' },
				{ key: 'first_last_name', label: 'Apellido materno' },
				{ key: 'second_last_name', label: 'Apellido paterno' },
				{ key: 'rfc', label: 'RFC' },
				{ key: 'curp', label: 'CURP' },
				{ key: 'created_at', label: 'Fecha de alta' },
			],
		}
	},
	computed: {
		...mapState('api', ['clients']),
		clientsList() {
			return this.clients.map((client) => {
				const { created_at, ...rest } = client
				const formattedDate = new Date(created_at).toLocaleDateString('es-MX')
				return { ...rest, created_at: formattedDate }
			})
		},
	},
}
</script>
