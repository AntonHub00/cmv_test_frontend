<template>
	<div>
		<div v-if="accounts.length">
			<b-card v-for="account in accounts" :key="account.id">
				<b-row class="mb-2">
					<b-col sm="3" class="text-sm-right"><b>Id de cuenta:</b></b-col>
					<b-col>{{ account.id }}</b-col>
				</b-row>

				<b-row class="mb-2">
					<b-col sm="3" class="text-sm-right"><b>Tipo de cuenta:</b></b-col>
					<b-col>{{ account.name }}</b-col>
				</b-row>

				<b-row class="mb-2">
					<b-col sm="3" class="text-sm-right"><b>Saldo actual:</b></b-col>
					<b-col>{{ account.current_balance }}</b-col>
				</b-row>

				<b-row class="mb-2">
					<b-col sm="3" class="text-sm-right"
						><b>Fecha de contratación:</b></b-col
					>
					<b-col>{{ account.created_at }}</b-col>
				</b-row>

				<b-row class="mb-2">
					<b-col sm="3" class="text-sm-right"
						><b>Fecha de último movimiento:</b></b-col
					>
					<b-col>{{ account.last_transaction }}</b-col>
				</b-row>
			</b-card>
		</div>

		<div v-else>No tiene cuentas disponibles</div>
	</div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
	name: 'AccountInfoCard',
	props: {
		clientId: {
			type: Number,
			default: null,
		},
	},
	data() {
		return {
			accounts: [],
		}
	},
	async created() {
		this.accounts = await this.fetchClientsAccounts(this.clientId)

		this.accounts = this.accounts.map((account) => {
			const { created_at, last_transaction, current_balance, ...rest } = account

			const formattedCreatedAt = new Date(created_at).toLocaleDateString(
				'es-MX'
			)

			const formattedLastTransaction = new Date(
				last_transaction
			).toLocaleDateString('es-MX')

			const formattedCurrentBalance = `$${current_balance}`

			return {
				...rest,
				created_at: formattedCreatedAt,
				last_transaction: formattedLastTransaction,
				current_balance: formattedCurrentBalance,
			}
		})
	},
	methods: {
		...mapActions('api', ['fetchClientsAccounts']),
	},
}
</script>
