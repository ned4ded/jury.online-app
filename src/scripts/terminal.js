(() => {
  const $dashboard = $('#display');
  const $lining = $('#menu-lining');

  const $toggler = $('#menu-toggler');
  const targets = $toggler.data('target').map(t => document.getElementById(t)).filter(n => n);

  const toggle = (t) => {
    if($(t).hasClass('active')) {
      $(t).removeClass('active');
    } else {
      $(t).addClass('active');
    }
    return;
  }

  $toggler.click(function() {
    targets.forEach(t => {
      toggle(t);
    });

    return;
  });

  $lining.click(function() {
    targets.forEach(t => {
      toggle(t);
    });

    return;
  });

})();
