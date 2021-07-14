<template>
	<div>
		<b-modal
			v-model="showConfirmationDeletionModal"
			:title="'¿Deseas eliminar cliente?'"
			:cancel-title="'Cancelar'"
			:ok-title="'Continuar'"
			@ok="deleteClient(toDeleteClientId)"
		>
			Al eliminar este cliente todas sus cuentas asociadas serán eliminadas.
		</b-modal>

		<b-modal
			id="updateClientModal"
			v-model="showUpdateClientModal"
			:title="'Actualizar cliente'"
			:hide-footer="true"
		>
			<update-client-info
				:client="toUpdateClientObject"
				@updated="$bvModal.hide('updateClientModal')"
			/>
		</b-modal>

		<b-table
			striped
			hover
			:responsive="true"
			:small="true"
			:items="clientsList"
			:fields="fields"
		>
			<template #cell(actions)="row">
				<b-button size="sm" class="mx-2 my-1" @click="row.toggleDetails()">
					{{ row.detailsShowing ? 'Ocultar' : 'Mostrar' }} cuentas
				</b-button>

				<b-button
					size="sm"
					class="mx-2 my-1 btn-warning"
					@click="updateClientAction(row.item)"
				>
					Actualizar
				</b-button>

				<b-button
					size="sm"
					class="mx-2 my-1 btn-danger"
					@click="deleteClientAction(row.item.id)"
				>
					Eliminar
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
import UpdateClientInfo from '@/components/UpdateClientInfo.vue'
import { mapActions, mapState } from 'vuex'

export default {
	name: 'ClientsTable',
	components: {
		AccountInfoCard,
		UpdateClientInfo,
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
			showConfirmationDeletionModal: false,
			showUpdateClientModal: false,
			toDeleteClientId: null,
			toUpdateClientObject: null,
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
	methods: {
		...mapActions('api', ['deleteClient']),
		deleteClientAction(clientId) {
			this.toDeleteClientId = clientId
			this.showConfirmationDeletionModal = true
		},
		updateClientAction(clientObject) {
			this.toUpdateClientObject = clientObject
			this.showUpdateClientModal = true
		},
	},
}
</script>
