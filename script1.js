let now = new Date(); //получаем текущую дату
let month = now.getMonth(); //получаем текущий месяц (начинается с 0)
let year = now.getFullYear(); //получаем текущий год
let day = now.getDate(); //получаем текущий день
let week = Math.ceil(day / 7); //получаем текущую неделю
let daysInMonth = new Date(year, month + 1, 0).getDate();  //получаем количество дней в текущем месяце

//заполняем заголовок таблицы названием текущего месяца и года
document.getElementById("month").innerHTML = (new Date(year, month)).toLocaleString('ru', {month: 'long', year: 'numeric'});

//находим первый день текущего месяца
let firstDay = new Date(year, month, 0).getDay();

let table = document.getElementById("calendar-body");

let tr = document.createElement("tr");
for (let i = 0; i < firstDay; i++) { //добавляем пустые ячейки в начало календаря
 let td = document.createElement("td");
 tr.appendChild(td);
}
table.appendChild(tr);

for (let i = 1; i <= daysInMonth; i++) { //добавляем ячейки для каждого дня текущего месяца
 if (tr.children.length === 7) { //если строка таблицы заполнена, то переходим на новую строку
  tr = document.createElement("tr");
  table.appendChild(tr);
 }
 let td = document.createElement("td");
 td.appendChild(document.createTextNode(i));
 if (i === day) { //выделяем день текущей даты
  td.classList.add("today");
 }
 tr.appendChild(td);
}

while (tr.children.length < 7) { //добавляем пустые ячейки в конец календаря
 let td = document.createElement("td");
 tr.appendChild(td);
}

//выводим номер текущей недели, месяца и года в отдельные ячейки таблицы
let td = document.createElement("td");
td.innerHTML = week;
table.rows[0].cells[day.getDay()].appendChild(td);

td = document.createElement("td");
td.innerHTML = (new Date(year, month)).toLocaleString('ru', {month: 'long'});
table.rows[0].cells[day.getDay()].appendChild(td);

td = document.createElement("td");
td.innerHTML = year;
table.rows[0].cells[day.getDay()].appendChild(td);