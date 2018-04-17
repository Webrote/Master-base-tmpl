document.addEventListener('DOMContentLoaded', function() {

	//  Проходим по всем блокам filter-abc__list
	// 	Проверяем на количество дочерних элементов. 
	// 	Если их больше чем maxFIlterElements, то собираем из этих эл-ов новую строку
	//  В которой лишние эл-ты оборачиваем в класс "filter-abc__grouped filter-abc__grouped_hidden"
	// 	Паралельно вычисляем высоту нового блока, и в конце вставляем ее в атр-ут style. Стилями скрываю этот блок.
	// 	На ссылки more вешаю обра-ик клика, который меняет класс у блока.

	var maxFIlterElements = 2;
	var filterLists = document.querySelectorAll('.filter-abc__list[data-letter]');

	Array.prototype.forEach.call(filterLists, function(filterList, index) {

		if ( filterList.querySelectorAll('.filter-abc__el').length > maxFIlterElements ) {

			var filterElements = filterList.querySelectorAll('.filter-abc__el');
			var newFilterElementsStr = "";
			var heightGroupedTotal = 0;

			for (var i = 0; i < filterElements.length; i++) {

				if (i == maxFIlterElements) {
					newFilterElementsStr += '<div class="filter-abc__grouped filter-abc__grouped_hidden">' + filterElements[i].outerHTML;
				} else {
					newFilterElementsStr += filterElements[i].outerHTML;
				}
				if (i >= maxFIlterElements) {
					heightGroupedTotal += filterElements[i].offsetHeight;
				}

			}

			newFilterElementsStr += '</div><a class="link  link_more" href=""><span>Еще</span></a>';

			// console.log(heightGroupedTotal);
			filterList.innerHTML = newFilterElementsStr;

			var filterBlockGrouped = filterList.querySelector('.filter-abc__grouped');
			var filterMoreLink = filterList.querySelector('.link_more');

			filterBlockGrouped.style.height = heightGroupedTotal + "px";


			filterMoreLink.addEventListener('click', function (event) {
				event.preventDefault();
				filterBlockGrouped.classList.toggle('filter-abc__grouped_hidden');
			})
		}
	});
});