// $(function () {
//     $(document).scroll(function () {
//         // var $navp = $("#fixed-nav-product");
//         var $nav = $("#fixed-nav");
//         var $address = $("#menu-container");

//         $nav.toggleClass("scrolled", $(this).scrollTop() > 200);
//         // $navp.toggleClass("scrolled", $(this).scrollTop() > $navp.height());


//     });
// });

// Product menu Transition
var btnForMenu = document.querySelector(".btn-target");
var Menu = document.querySelector(".menu-collapse");
var listGroup = document.querySelector('.ttt')

btnForMenu.addEventListener("click", function() {
    listGroup.classList.toggle("menu-collapse");
})
