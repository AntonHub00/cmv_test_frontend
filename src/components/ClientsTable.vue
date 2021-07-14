<template>
	<div>
		<b-table
			striped
			hover
			:responsive="true"
			:small="true"
			:items="clientsList"
			:fields="fields"
		>
			<template #cell(actions)="row">
				<b-button size="sm" class="mr-2" @click="row.toggleDetails">
					{{ row.detailsShowing ? 'Ocultar' : 'Mostrar' }} cuentas
				</b-button>
			</template>

			<template #row-details="row">
				<account-info-card :client-id="row.item.id" />
			</template>
		</b-table>
	</div>
</template>

<script>
import AccountInfoCard from '@/components/AccountInfoCard.vue'
import { mapState } from 'vuex'

export default {
	name: 'ClientsTable',
	components: {
		AccountInfoCard,
	},
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
				{ key: 'actions', label: 'Acciones' },
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
