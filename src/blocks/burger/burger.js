document.addEventListener('DOMContentLoaded', function(){

  function $$(selector, context) {
    context = context || document;
    var elements = context.querySelectorAll(selector);
    return Array.prototype.slice.call(elements);
  }

  var burgers = $$('.burger');

  for (var i = 0; i < burgers.length; i++) {
    var burger = burgers[i];
    burger.addEventListener('click', showBurgerTarget);

    function showBurgerTarget() {
      this.classList.toggle('burger_active');
      
      var textElement = this.querySelector('.burger__text');
      var temp_text = textElement.textContent;
      textElement.innerHTML = this.dataset.text;
      this.dataset.text = temp_text;


      // var temp_text= this.dataset.text;
      var targetId = this.getAttribute('data-target-id');
      var targetClassToggle = this.getAttribute('data-target-class-toggle');
      if (targetId && targetClassToggle) {
        // this.classList.toggle('burger_close');
        document.getElementById(targetId).classList.toggle(targetClassToggle);
      }
    }
  }

});
