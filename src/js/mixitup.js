$(document).ready(function () {

  if ($(".products-hot").length) {
    var mixer = mixitup(".products-hot", {
      pagination: {
        limit: 15 // impose a limit of 8 targets per page
      },
      "animation": {
        "duration": 607,
        "nudge": false,
        "reverseOut": false,
        "effects": "fade rotateY(94deg) stagger(30ms)"
      }
    });
  }


  var selectFilter = document.querySelector('.select-filter');
  var selectSort = document.querySelector('.select-sort');


  selectFilter.addEventListener('change', function () {
    var selector = selectFilter.value;

    mixer.filter(selector);
  });

  selectSort.addEventListener('change', function () {
    var order = selectSort.value;

    mixer.sort(order);
  });

});