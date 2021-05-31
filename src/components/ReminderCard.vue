<template>
	<div class="bg-white p-4 rounded shadow-lg mb-2">
		<h3 class="font-bold text-2xl" :style="{color: color}">{{ name }}</h3>
		<p>{{ dayjs(datetime).format('YYYY-MM-DD') }}</p>
		<p>{{ description }}</p>
	</div>
</template>

<script>
import dayjs from 'dayjs';
export default {
	props: {
		name: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		datetime: {
			type: Date,
			required: true,
		},
		color: {
      type: String,
      required: false,
		}
	},
	data(){
        return {
            dayjs: dayjs,
        }
    },
	mounted() {
	},
	methods: {
	}
}
</script>

<style scoped>
</style>
