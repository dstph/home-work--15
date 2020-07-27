// задание 1

// Добавить всем массивам геттер – render, 
// который будет выводить массив в документ,
// в виде таблицы (номер ячейки и значение ячейки).

let	table = document.createElement('table'),
	thead = document.createElement('thead'),
	tr = document.createElement('tr'),
	th1 = document.createElement('th'),
	th2 = document.createElement('th');

th1.innerText = "number";
th2.innerText = "Value";

document.body.appendChild(table);
table.appendChild(thead);
thead.appendChild(tr);
tr.appendChild(th1);
tr.appendChild(th2);

Array.prototype.render = function  render(){
	for(i=0; i<this.length; i++){
		let tr_in = document.createElement('tr'),
		    td_number = document.createElement('td'),
		    td_value = document.createElement('td');
		
		td_number.innerText = i;
		td_value.innerText = this[i];

		table.appendChild(tr_in);
		tr_in.appendChild(td_number);
		tr_in.appendChild(td_value);


	}
};

let pussy = ["Benya", "Kotleta", "Eva", "Lucifer"];
pussy.render();

console.dir(pussy);



/*задание 2

У объекта data создать свойство геттер `model` и 
сеттер `model`. Которое обрабатывает  данные после 
двух обращений.

При первом обращении сохраняется строка.
 Например: `data.model = 'Hello, how, are you?'`

При втором обращении к сеттеру происходит нарезание
 строки по переданному символу и сохранение результата
  в свойство str. Например: `data.model = ","`

`console.log(data.str) -> ['Hello', ' how', ' are you?']`

----------------------

Геттер `data.model` возвращает символы, 
которые были удалены (при втором вызове сеттера) 
и их количество в виде объекта.

`console.log(data.model); -> { symbol: ',', count: 2 }`

задание 3

Создать сеттер `model` (не связывать с задачей №2),
 который принимает объект и выполняет `update` всех 
 существующих свойств в текущем объекте.

`obj = {x:10, y: 20, p: 15};`

`obj.model = { x: { value: 33, operation: '*' }, 
			   z: { value: 75, operation: '+' }, 
			   p: { value: 4, operation: '%' } }`

`console.log(obj); -> {x:330, y: 20, z: 75, p: 3}`*/



