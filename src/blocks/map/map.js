document.addEventListener('DOMContentLoaded', function(){

	var maps = document.querySelectorAll('.map');

	if (maps.length === 0)
		return;

	$.when(
		$.getScript('//api-maps.yandex.ru/2.1/?lang=ru_RU')
	)
	.then(
		function () {
			for (var key = 0, len = maps.length; key < len; key++) {
				init.call( maps[key] );
			}

			function init() {
				var id = this.id,
					data = JSON && JSON.parse( document.getElementById(id).getAttribute('data') ),
					myMap,
					myPlacemark;

				// Удалим атрибут
				document.getElementById(id).removeAttribute('data');

				ymaps.ready(function () {
					ymaps.geocode(data.address).then(function (res) {
						var geoPoint = res.geoObjects.get(0).geometry.getCoordinates();

						myMap = new ymaps.Map(id, {
							center: geoPoint,
							zoom: 16,
							behaviors: ['drag'],
							controls: ['smallMapDefaultSet'],
						});

						myPlacemark = new ymaps.Placemark(geoPoint, { 
							hintContent: data.name,
							balloonContentBody: data.address,
						}, {
							// если нужна своя метка, то расскоментируйте строки ниже
							iconLayout: 'default#image',
							iconImageHref: 'images/marker.png',
							iconImageSize: [41, 60],
							iconImageOffset: [-20, -60], 
						});
						myMap.geoObjects.add(myPlacemark);
					});
				})
			}
		}
	)

});