$('document').ready(function () {
    var trigger = $('#hamburger'),
        isClosed = false;

    trigger.click(function () {
      burgerTime();
    });

    function burgerTime() {
      if (isClosed == false) {
        trigger.removeClass('is-closed');
        trigger.addClass('is-open');
        isClosed = true;
      } else {
       trigger.removeClass('is-open');
        trigger.addClass('is-closed');
        isClosed = false;
      }
    }
  });