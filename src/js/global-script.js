// Если на проекте jQuery
// $( document ).ready(function() {
//   // code
// });

// Изоляция без jQuery
// (function(){
//   // code
// }());

// На проекте нет jQuery, но хочется $( document ).ready...
// function ready(fn) {
//   if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
//     fn();
//   } else {
//     document.addEventListener('DOMContentLoaded', fn);
//   }
// }
//
// ready(function(){
//   // code
// });

// Оборачиваем таблицы, которые находятся в пользовательском контенте
(function ($) {
	var tables = document.querySelectorAll('.content table');
	if (tables.length) {
		console.log('all of '+ tables.length + ' the tables wrapped within the content');
	}

	Array.prototype.forEach.call(tables, function (table) {
		
		var wrap = document.createElement('div');
		wrap.classList.add('table');

		wrap.innerHTML = table.outerHTML;
		table.parentNode.replaceChild(wrap,table);

	});

	// var numbers = document.querySelectorAll('.number');
	// console.log(numbers);

	// Array.prototype.forEach.call(numbers, function (number) {
		
	// 	var input = number.querySelector('input');

	// 	input.addEventListener('input', function () {
	// 		console.log('Input change. Input.value = ', input.value);
	// 	})

	// });

	// $('.number input').on('change', function () {
	// 	console.log('$ Input change. Input.value = ', $(this).val());
	// })
	
}(jQuery));