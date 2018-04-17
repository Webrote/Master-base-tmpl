document.addEventListener('DOMContentLoaded', function () {
	
	var numbers = document.querySelectorAll('.number');

	Array.prototype.forEach.call( numbers, function (number) {
		
		var input = number.querySelector( 'input[type=text]' ),
			minus = number.querySelector( '.number__minus' ),
			plus = number.querySelector( '.number__plus' );


		minus.addEventListener('click', function () {
			var count = parseInt(input.getAttribute('value')) - 1;
			count = count < 1 ? 1 : count;
			input.setAttribute('value', count);
			input.value = String(count);
		});

		plus.addEventListener('click', function () {
			var count = parseInt(input.getAttribute('value')) + 1;
			input.setAttribute('value', count);
			input.value = String(count);
		});

		input.addEventListener('input', function () {
			this.setAttribute('value', this.value);
		})
	})
});