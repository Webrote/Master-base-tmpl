document.addEventListener('DOMContentLoaded', function(){

  // function $$(selector, context) {
  //   context = context || document;
  //   var elements = context.querySelectorAll(selector);
  //   return Array.prototype.slice.call(elements);
  // }

  var mobilMenuClose = document.querySelector('.mobile-menu__close');
  mobilMenuClose.addEventListener('click', mobilMenuCloset);

  function mobilMenuCloset() {
    var targetId = this.getAttribute('data-target-id');
    var targetClassRemove = this.getAttribute('data-target-class-remove');

    document.getElementById(targetId).classList.remove(targetClassRemove);
  }

  // for (var i = 0; i < burgers.length; i++) {
  //   var burger = burgers[i];
  //   burger.addEventListener('click', showBurgerTarget);
  //   function showBurgerTarget() {
  //     var targetId = this.getAttribute('data-target-id');
  //     var targetClassToggle = this.getAttribute('data-target-class-toggle');
  //     if (targetId && targetClassToggle) {
  //       this.classList.toggle('burger_close');
  //       document.getElementById(targetId).classList.toggle(targetClassToggle);
  //     }
  //   }
  // }

});
