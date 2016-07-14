var nav = $('#script')
  offset = nav.offset();

$(window).scroll(function(){
  if($window).scrolltop() > offset.top){
    nav.sddclass('fixed');
  }else{
    nav.removeclass('fixed');
  }
});
