$(function(){
  /*ハンバーガーメニュー処理*/
  function toggleNav() {
  var body = document.body;
  var hamburger = document.getElementById('nav_btn');
  var blackBg = document.getElementById('nav_bg');
  hamburger.addEventListener('click', function() {
    body.classList.toggle('nav_open'); //メニュークリックでnav-openというクラスがbodyに付与
  });
  blackBg.addEventListener('click', function() {
    body.classList.remove('nav_open'); //もう一度クリックで解除
  });
 }
 toggleNav();

 /*ヘッダーメニューのスクロール箇所*/
 $('.scroll_btn').click(function(){
   var id = $(this).attr('href');
   var position = $(id).offset().top;
  $('html, body').animate({'scrollTop': position }, 500);
});

/*アコーディオンがクリックされた時*/
$('.faqarea').click(function(){
  /*.faqareaの子要素の.answerを検索する*/
  var $answer = $(this).find('.answer');
  /*子要素.answerがクラスopenを持っている場合は削除した後、クラスを削除して+に戻す*/
  if($answer.hasClass('open')){
    $answer.removeClass('open');
    $answer.slideUp();
    $(this).find('span').text('+');
  }
  /*子要素.answerがクラスopenを持っていない場合は追加*/
  else {
    $answer.addClass('open');
    $answer.slideDown();
    $(this).find('span').text('-');
  }
});

});

