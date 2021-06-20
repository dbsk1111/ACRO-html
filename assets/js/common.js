$(function(){
  // 모든 메뉴 노출
  $('.all_menu_button').click(function(){
    $('body').addClass('on')
    $('.all_menu').addClass('on')
  })
  $('.close_button, .all_menu a, .logo').click(function(){
    if( !$('.search_black').hasClass('on') ){
      $('body').removeClass('on')
    }
    $('.all_menu').removeClass('on')
    $('.search_button').removeClass('on');
    $('.search_black').removeClass('on');
    $('header').removeClass('on');
    $('body').removeClass('on');
  })

  // 스크롤에 따른 탑 버튼 노출
  $(window).scroll(function(){
    if ( $(window).scrollTop() != 0 ){
      $('.top_button').addClass('on');
    }else{
      $('.top_button').removeClass('on');
    }
  })
  // 탑 버튼 클릭 시 최상단으로
  $('.top_button').click(function(){
    $(window).scrollTop(0)
  })

  // 검색창 노출
  $('.search_button, .search_black').click(function(){
    $('.search_button').toggleClass('on');
    $('.search_black').toggleClass('on');
    $('header').toggleClass('on');
    $('body').toggleClass('on');
  })
});
