// W jakiej kolejności zostaną wyświetlone console.log'i?
// Zadanie rozwiąż na sucho bez opdalania go.
const https = require('https')

setImmediate(()=> console.log('Pumba'))

console.log(() => console.log('Timon'))
	
new Promise((resolve) => {
	console.log('Simba')
	https.get('https://facebook.com', (response) => {
		console.log('Rafiki')
		response.on('data', () => {})
		response.on('end', () => {
			const king = 'Mufasa'
			console.log(king)
			resolve(king)
		})
	})

	console.log('Nala')

}).then((result) => console.log(result))

console.log('Bunga')

new Promise((resolve) => setTimeout(() => resolve('Sarabi'), 0)).then((resolve) => console.log(resolve))

console.log('Kiara')

new Promise((resolve) => resolve('Kovu'))
	.then((result) => console.log(result))

console.log('Zira')
