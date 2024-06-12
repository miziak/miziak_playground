// W jakiej kolejności zostaną wyświetlone console.log'i?
// Zadanie rozwiąż na sucho bez opdalania go.
const https = require('https')

setImmediate(()=> console.log('Pumba')) // Macro task 1

console.log(() => console.log('Timon')) // 1. console.log
	
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

}).then((result) => console.log(result)) // Micro task 1

console.log('Bunga') // 2. console.log

new Promise((resolve) => setTimeout(() => resolve('Sarabi'), 0)).then((resolve) => console.log(resolve)) // Micro task 2 w którym znajduje się Macro task setTimeout

console.log('Kiara') // 3. console.log

new Promise((resolve) => resolve('Kovu'))
	.then((result) => console.log(result)) // Micro task 3

console.log('Zira') // 4. console.log

//Kolejność wyświetlania 
// 1. console.log(() => console.log('Timon')) 	linijka 7
// 2. console.log('Bunga') 						linijka 25
// 3. console.log('Kiara') 						linijka 29
// 4. console.log('Zira') 						linijka 34
// Następnie wykonane zostaną Micro taski --------------------
// Wykonanie Micro taska z 						linijki 9
// 5. console.log('Simba')
// 6. console.log('Rafiki')
// 7. console.log('Mufasa')
// 8. console.log('Nala')
// Wykonanie Micro taska z 						linijki 31
// 9. console.log('Kovu')
// Wykonanie Micro taska z 						linijki 27
// 10. console.log('Sarabi')
// Wykonanie Macro taska z 						linijki 5
// 11. console.log('Pumba')
