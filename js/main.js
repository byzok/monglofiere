
//функю открітия меню
function nav_toggle(){

$(".nav-menu").slideToggle();

}


$(document).ready(function(){


//  открывание и закрывание меню
if($(".sandwitch:visible").length>0){
  $(".nav-menu").removeClass("visible-md").removeClass("visible-lg").hide();
  }
$("a.sandwitch").on("click",nav_toggle);

//активация слайдера





        $('.owl-my').owlCarousel({
        items:3,
        loop:true,
        center:true,
        margin:10,
        nav:true,
        autoplayHoverPause:true,
        navText:["<img src='http://placehold.it/20x20'>","<img src='http://placehold.it/20x20'>"],
        responsive:{
          0:{items:1,nav:true},
          992:{items:3,nav:true}
        }
        });


        $('.owl-reviews').owlCarousel({
          
        items:2,
        loop:true,
        center:true,
        margin:100,
        nav:true,
        autoplayHoverPause:true,
        navText:["<img src='http://placehold.it/20x20'>","<img src='http://placehold.it/20x20'>"],
        responsive:{
          0:{items:1,nav:true},
          992:{items:2,nav:true}
        }
        });


//попытки подключения счетчика

//$.countdown.setDefaults({description: 'Until liftoff'});
//$("#defaultCountdown").countdown({since: new Date(2014, 12-1, 25)});

// TABS
 $('#wrapper span').click(function() {
    if ($(this).attr('class') != $('#wrapper').attr('class') ) {
      $('#wrapper').attr('class',$(this).attr('class'));
    }
    $('#wrapper span').click( function() {
      $(this).addClass('active').siblings().removeClass('active');
    });
  });
//$(".collapse").collapse()
});
