import * as $ from 'jquery'

$('.form-check-input').on('click', function (e) {
  e.preventDefault();
  $(this).toggleClass('checked-form-input');
})

$('.placeholder-symbol').on('click', function (e) {
  e.preventDefault();
  $(this).toggleClass('focus-symbol');
})





