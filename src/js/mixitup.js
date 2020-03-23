$(document).ready(function () {

  if ($(".products-hot").length) {
    var mixer = mixitup(".products-hot", {
      pagination: {
        limit: 9 // impose a limit of 8 targets per page
      },
      "animation": {
        "duration": 607,
        "nudge": false,
        "reverseOut": false,
        "effects": "fade rotateY(94deg) stagger(30ms)"
      }
    });
  }
 

});