
// let	table = document.createElement('table'),
// 	thead = document.createElement('thead'),
// 	tr = document.createElement('tr'),
// 	th1 = document.createElement('th'),
// 	th2 = document.createElement('th');

// th1.innerText = "number";
// th2.innerText = "Value";

// document.body.appendChild(table);
// table.appendChild(thead);
// thead.appendChild(tr);
// tr.appendChild(th1);
// tr.appendChild(th2);

// Array.prototype.render = function  render(){
// 	for(i=0; i<this.length; i++){
// 		let tr_in = document.createElement('tr'),
// 		    td_number = document.createElement('td'),
// 		    td_value = document.createElement('td');
		
// 		td_number.innerText = i;
// 		td_value.innerText = this[i];

// 		table.appendChild(tr_in);
// 		tr_in.appendChild(td_number);
// 		tr_in.appendChild(td_value);


// 	}
// };

// let pussy = ["Benya", "Kotleta", "Eva", "Lucifer"];
// pussy.render();

// console.dir(pussy);


// let data = {
// 	get model(){
// 		return  this.modelValue;
// 	},
// 	set model(value){
// 		if(this.modelValue){
// 			this.str = this.modelValue.split(value);
// 			this.modelValue = {symbol: value, count: this.str.length};
// 		} else{
// 			this.modelValue = value;
// 		}
// 	}
// }


// data.model = 'never sleep';

// console.log(data.model);

// data.model = ' ';

// console.log(data.str);
// console.dir(data);
// console.log(data.model);




// задание 3

// Создать сеттер `model` (не связывать с задачей №2),
//  который принимает объект и выполняет `update` всех 
//  существующих свойств в текущем объекте.

// `obj = {x:10, y: 20, p: 15};`

// `obj.model = { x: { value: 33, operation: '*' }, 
// 			   z: { value: 75, operation: '+' }, 
// 			   p: { value: 4, operation: '%' } }`

// `console.log(obj); -> {x:330, y: 20, z: 75, p: 3}`*/



let obj = {x:10,
 y: 20, 
 p: 15,
 set model(rap){
	for(key in rap){
		if(obj.hasOwnProperty(key)){
			obj[key] = eval(obj[key] + [rap[key].operation] + rap[key].value);
		} else{
			obj[key] = rap[key].value;
		}
	}
}
}

obj.model = { x: { value: 33, operation: '*' }, 
 			z: { value: 75, operation: '+' }, 
 			   p: { value: 4, operation: '%' } };

console.log(obj);
