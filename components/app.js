var App = {
	components: {
		RadarChart,
	},
	data: () => ({
		config: {
			type: 'radar',
			data: {
				labels: ['柔软度', '顺滑度', '亲肤度', '弹性', '耐久'],
				datasets: [],
			},
			options: {
				elements: {
					line: {
						borderWidth: 5,
						stepped: false,
						fill: true,
					},
					point: {
						pointBackgroundColor: 'white',
						pointRadius: 5,
						pointHitRadius: 5,
					},
				},
				scales: {
					r: {
						angleLines: {
							display: true,
						},
						suggestedMin: 30,
						suggestedMax: 100,
					},
				},
			},
		},
	}),
	computed: {
		fabricsData() {
			return [
				{
					origin: '🇯🇵',
					datasets: [
						{
							label: 'A&J Liketron',
							data: [100, 100, 100, 100, 50],
							backgroundColor: 'rgba(46, 169, 223, 0.12)',
							borderColor: 'rgba(46, 169, 223, .67)',
						},
					],
				},
				{
					origin: '🇯🇵',
					datasets: [
						{
							label: "Fules' Aqua（旧）",
							data: [95, 80, 80, 95, 80],
							backgroundColor: 'rgba(0, 127, 127, 0.12)',
							borderColor: 'rgba(0, 127, 127, .5)',
							hidden: true,
						},
						{
							label: "Fules' Aqua（新）",
							data: [95, 95, 95, 95, 80],
							backgroundColor: 'rgba(0, 127, 127, 0.12)',
							borderColor: 'rgba(0, 127, 127, .8)',
						},
					],
				},
				{
					origin: '🇯🇵',
					datasets: [
						{
							label: 'Sakuramochi',
							data: [80, 100, 95, 95, 100],
							backgroundColor: 'rgba(225, 107, 140, 0.12)',
							borderColor: 'rgba(225, 107, 140, .67)',
						},
					],
				},
				{
					origin: '🇯🇵',
					datasets: [
						{
							label: 'Hakuou（旧）',
							data: [50, 95, 65, 75, 100],
							backgroundColor: 'rgba(162, 54, 235, 0.12)',
							borderColor: 'rgba(162, 54, 235, .5)',
							hidden: true,
						},
						{
							label: 'Hakuou（新）',
							data: [60, 100, 80, 80, 100],
							backgroundColor: 'rgba(162, 54, 235, 0.12)',
							borderColor: 'rgba(162, 54, 235, .8)',
						},
					],
				},
				{
					origin: '🇯🇵',
					datasets: [
						{
							label: 'P80 2WR',
							data: [80, 65, 75, 80, 95],
							backgroundColor: 'rgba(150, 99, 46, 0.12)',
							borderColor: 'rgba(150, 99, 46, .67)',
						},
					],
				},

				{
					origin: '🇯🇵',
					datasets: [
						{
							label: 'MS 2way',
							data: [80, 95, 65, 80, 80],
							backgroundColor: 'rgba(91, 98, 46, 0.12)',
							borderColor: 'rgba(91, 98, 46, .67)',
						},
					],
				},
				{
					origin: '🇯🇵',
					datasets: [
						{
							label: 'Fuwa',
							data: [80, 80, 80, 95, 80],
							backgroundColor: 'rgba(89, 44, 99, 0.12)',
							borderColor: 'rgba(89, 44, 99, .67)',
						},
					],
				},
				{
					origin: '🇨🇳',
					datasets: [
						{
							label: 'Cuddly Octopus',
							data: [75, 95, 80, 80, 80],
							backgroundColor: 'rgba(43, 95, 117, 0.12)',
							borderColor: 'rgba(43, 95, 117, .67)',
						},
					],
				},

				{
					origin: '🇨🇳',
					datasets: [
						{
							label: 'Achobby',
							data: [95, 100, 100, 100, 75],
							backgroundColor: 'rgba(193, 50, 142, 0.12)',
							borderColor: 'rgba(193, 50, 142, .67)',
						},
					],
				},

				{
					origin: '🇨🇳',
					datasets: [
						{
							label: '绯火日东',
							data: [80, 75, 95, 95, 75],
							backgroundColor: 'rgba(142, 53, 74, 0.12)',
							borderColor: 'rgba(142, 53, 74, .67)',
						},
					],
				},

				{
					origin: '🇨🇳',
					datasets: [
						{
							label: '萌域自研',
							data: [85, 95, 85, 85, 50],
							backgroundColor: 'rgba(233, 205, 76, 0.12)',
							borderColor: 'rgba(233, 205, 76, .67)',
						},
					],
				},
				{
					origin: '🇨🇳',
					datasets: [
						{
							label: '萌域自研-极',
							data: [95, 100, 95, 80, 50],
							backgroundColor: 'rgba(87, 124, 138, 0.12)',
							borderColor: 'rgba(87, 124, 138, .67)',
						},
					],
				},

				{
					origin: '🇨🇳',
					datasets: [
						{
							label: '怀化II',
							data: [75, 80, 50, 75, 35],
							backgroundColor: 'rgba(199, 62, 58, 0.12)',
							borderColor: 'rgba(199, 62, 58, .67)',
						},
					],
				},
				{
					origin: '🇨🇳',
					datasets: [
						{
							label: '怀化III',
							data: [65, 75, 65, 35, 80],
							backgroundColor: 'rgba(38, 135, 133, 0.12)',
							borderColor: 'rgba(38, 135, 133, .67)',
						},
					],
				},
				{
					origin: '🇨🇳',
					datasets: [
						{
							label: 'LYC-Extra',
							data: [80, 80, 75, 80, 85],
							backgroundColor: 'rgba(233, 139, 42, 0.12)',
							borderColor: 'rgba(233, 139, 42, .67)',
						},
					],
				},
				{
					origin: '🇨🇳',
					datasets: [
						{
							label: '润雪',
							data: [95, 95, 95, 80, 65],
							backgroundColor: 'rgba(152, 109, 178, 0.12)',
							borderColor: 'rgba(152, 109, 178, .67)',
						},
					],
				},
				{
					origin: '🇨🇳',
					datasets: [
						{
							label: '萌柚超细（原）',
							data: [95, 95, 100, 80, 80],
							backgroundColor: 'rgba(112, 100, 154, 0.12)',
							borderColor: 'rgba(112, 100, 154, .5)',
							hidden: true,
						},
						{
							label: '萌柚超细（改）',
							data: [95, 100, 85, 80, 75],
							backgroundColor: 'rgba(112, 100, 154, 0.12)',
							borderColor: 'rgba(112, 100, 154, .8)',
						},
					],
				},
				{
					origin: '🇨🇳',
					datasets: [
						{
							label: '无锡（旧）',
							data: [80, 80, 80, 80, 80],
							backgroundColor: 'rgba(185, 136, 125, 0.12)',
							borderColor: 'rgba(185, 136, 125, .5)',
							hidden: true,
						},
						{
							label: '无锡（新）',
							data: [85, 85, 90, 80, 80],
							backgroundColor: 'rgba(185, 136, 125, 0.12)',
							borderColor: 'rgba(185, 136, 125, .8)',
						},
					],
				},
				{
					origin: '🇨🇳',
					datasets: [
						{
							label: '猫叔自研',
							data: [95, 100, 95, 80, 50],
							backgroundColor: 'rgba(203, 27, 69, 0.12)',
							borderColor: 'rgba(203, 27, 69, .67)',
						},
					],
				},
			]
		},
	},
	methods: {
		getConfig() {
			return JSON.parse(JSON.stringify(this.config))
		},
	},
}
