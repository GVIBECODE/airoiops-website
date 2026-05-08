// AIROIOPS v8. Single concern: toggle the heard_from "Other" text input.
(function () {
  'use strict';

  function syncOther() {
    var checked = document.querySelector('input[name="heard_from"]:checked');
    var value = checked ? checked.value : null;
    var wrap = document.querySelector('.other-wrap');
    var input = document.getElementById('heard_other');
    if (!wrap || !input) return;
    var isOther = value === 'Other';
    wrap.classList.toggle('show', isOther);
    input.required = isOther;
    if (!isOther) input.value = '';
  }

  function init() {
    var radios = document.querySelectorAll('input[name="heard_from"]');
    for (var i = 0; i < radios.length; i++) {
      radios[i].addEventListener('change', syncOther);
    }
    syncOther();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
