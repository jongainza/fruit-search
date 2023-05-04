const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');
const sugges = document.querySelector('.suggestions')

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

sugges.style.display = 'none';

function search(str) {
	let results = [];
	for (let i = 0 ; i < fruit.length ; i++){
		let fruta = fruit[i].toLowerCase();
		if (fruta.includes(str.toLowerCase())){
			results.push(fruta);
		}
	}
	console.log(results)
	return results;
}

function searchHandler(e) {
	let inputVal = e.target.value;
	let results  = search (inputVal);
	showSuggestions(results,inputVal);
}

function showSuggestions(results, inputVal) {
let item = ''
for (let i = 0 ; i < results.length ; i++){	
	item += `<li> ${results[i]} </li>`;
}
suggestions.innerHTML = item;



if (!results){
sugges.style.display = 'none';
} 
else {
sugges.style.display = 'block';
}
}

// im trying to hide the fruit list when we erese a letter that we already tiped in the search bar. ITS NOT WORKING!
if (input.value===""){
	sugges.style.display = 'none';
}


function useSuggestion(e) {
	if (e.target.tagName==='LI'){
		let suggestion = e.target.textContent;
		input.value = suggestion;
		sugges.style.display = 'none'

	}
	
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion)