document.addEventListener('DOMContentLoaded', function(){

	function $$(selector, context) {
		context = context || document;
		var elements = context.querySelectorAll(selector);
		return Array.prototype.slice.call(elements);
	}

	var togglers = $$('.toggler');

	for (var i = 0; i < togglers.length; i++) {
		var toggler = togglers[i];
		toggler.addEventListener('click', showTogglerTarget);
		
		function showTogglerTarget(event) {
			event.preventDefault();
			var _this = this;
			var targetId = this.getAttribute('data-target-id');
			var targetClassToggle = this.getAttribute('data-target-class-toggle');
			// Если в эелементе есть атрибут "data-text" то при клике 
			// будем менять местами с текстом ссылки
			var targetText = this.getAttribute('data-text');

			if (targetId && targetClassToggle) {
				this.classList.toggle('toggler_close');
				document.getElementById(targetId).classList.toggle(targetClassToggle);
				if (targetText) {
					var oldText = this.children[0].innerHTML;
					
					setTimeout(function(){
						_this.children[0].innerHTML = targetText;
						_this.setAttribute('data-text', oldText);
					},200);
					
				}
			}
		}
	}

});