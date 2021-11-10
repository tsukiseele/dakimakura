var RadarChart = {
	name: 'RadarChart',
	props: ['config', 'data'],
	template: `<canvas ref="chart" class="radar-chart"></canvas>`,
	data: () => ({
		chart: null,
	}),
	methods: {
		init() {
			this.config.data.datasets = this.data
			this.chart = new Chart(this.$refs.chart.getContext('2d'), this.config)
		},
	},
	mounted() {
		this.init()
	},
}
