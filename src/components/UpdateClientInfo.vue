<template>
	<div>
		<b-card>
			<b-row class="mb-2">
				<b-col sm="3" class="text-sm-right"><b>Id:</b></b-col>
				<b-col>{{ fieldValues.id }}</b-col>
			</b-row>

			<b-row class="mb-2">
				<b-col sm="3" class="text-sm-right"><b>Nombres:</b></b-col>
				<b-col>
					<b-form-input v-model="fieldValues.firstName"></b-form-input>
				</b-col>
			</b-row>

			<b-row class="mb-2">
				<b-col sm="3" class="text-sm-right"><b>Appellido materno:</b></b-col>
				<b-col>
					<b-form-input v-model="fieldValues.firstLastName"></b-form-input>
				</b-col>
			</b-row>

			<b-row class="mb-2">
				<b-col sm="3" class="text-sm-right"><b>Apellido paterno:</b></b-col>
				<b-col>
					<b-form-input v-model="fieldValues.secondLastName"></b-form-input>
				</b-col>
			</b-row>

			<b-row class="mb-2">
				<b-col sm="3" class="text-sm-right"><b>RFC:</b></b-col>
				<b-col>
					<b-form-input v-model="fieldValues.rfc"></b-form-input>
				</b-col>
			</b-row>

			<b-row class="mb-2">
				<b-col sm="3" class="text-sm-right"><b>CURP:</b></b-col>
				<b-col>
					<b-form-input v-model="fieldValues.curp"></b-form-input>
				</b-col>
			</b-row>

			<b-row class="mb-2">
				<b-col cols="8"></b-col>
				<b-col cols="4">
					<b-button class="mx-2 mt-3 btn-success" @click="localUpdateClient"
						>Continuar</b-button
					>
				</b-col>
			</b-row>
		</b-card>
	</div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
	name: 'UpdateClientInfo',
	props: {
		client: {
			type: Object,
			default: () => {
				return {
					created_at: null,
					curp: null,
					first_last_name: null,
					first_name: null,
					id: null,
					rfc: null,
					second_last_name: null,
				}
			},
		},
	},
	data() {
		return {
			fieldValues: {
				firstName: null,
				firstLastName: null,
				secondLastName: null,
				rfc: null,
				curp: null,
				id: null,
			},
		}
	},
	created() {
		this.fieldValues = {
			firstName: this.client.first_name,
			firstLastName: this.client.first_last_name,
			secondLastName: this.client.second_last_name,
			rfc: this.client.rfc,
			curp: this.client.curp,
			id: this.client.id,
		}
	},
	methods: {
		...mapActions('api', ['updateClient']),
		localUpdateClient() {
			const { id, ...rest } = this.fieldValues
			this.updateClient({ clientId: id, ...rest })
			this.$emit('updated')
		},
	},
}
</script>
