module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'pri-red': 'hsl(0, 100%, 74%)',
				'pri-green': 'hsl(154, 59%, 51%)',
				'accent-blue': 'hsl(248, 32%, 49%)',
				'nue-darkblue': 'hsl(249, 10%, 26%)',
				'nue-grayishblue': 'hsl(246, 25%, 77%)'
			},
			fontFamily: {
				Poppins: ['"Poppins"', 'sans-serif']
			}
		}
	},
	plugins: []
};
