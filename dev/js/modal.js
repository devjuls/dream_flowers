///modal window

$(document).ready(function() {

//открытие попапа с формой заказа букета
  (function(){

    $('.js-order-now').on('click', function(e){
      e.preventDefault();

      $('#overlay').fadeIn(300,
        function(){
          $('#modal-order')
            .show(100).animate({top: '190px'});
      });
    });

    $('.modal-order__close, #overlay').click(function(){
      $('#modal-order').animate({top: '20px'}).hide(100,
        function() {
          $('#overlay').fadeOut(200)});
    });

  }());


//открытие попапа с формой заказа индивидуального букета
  (function(){

    $('.js-order-individual').on('click', function(e){
      e.preventDefault();

      $('#overlay').fadeIn(300,
        function(){
          $('#modal-order_individual')
            .show(100).animate({top: '190px'});
      });
    });

    $('.modal-order__close, #overlay').click(function(){
      $('#modal-order_individual').animate({top: '20px'}).hide(100,
        function() {
          $('#overlay').fadeOut(200)});
    });

  }());


//открытие попапа с формой заказа услуги инкогнито
  (function(){

    $('.js-order-incognito').on('click', function(e){
      e.preventDefault();

      $('#overlay').fadeIn(300,
        function(){
          $('#modal-order_incognito')
            .show(100).animate({top: '190px'});
      });
    });

    $('.modal-order__close, #overlay').click(function(){
      $('#modal-order_incognito').animate({top: '20px'}).hide(100,
        function() {
          $('#overlay').fadeOut(200)});
    });

  }());


//открытие попапа с формой заказа звонка
  (function(){

    $('.js-order-call').on('click', function(e){
      e.preventDefault();

      $('#overlay').fadeIn(300,
        function(){
          $('#modal-order_call')
            .show(100).animate({top: '190px'});
      });
    });

    $('.modal-order__close, #overlay').click(function(){
      $('#modal-order_call').animate({top: '20px'}).hide(100,
        function() {
          $('#overlay').fadeOut(200)});
    });

  }());


//открытие попапа с букетом
  (function(){

    $('.bouquets__link').on('click', function(e){

      var src = $(this).find('.bouquets__img').attr('src');

      e.preventDefault();

      $('#modal-bouquet').find('.full-image').attr('src', src);

      $('#overlay').fadeIn(300,
        function(){
          $('#modal-bouquet')
            .show(100).animate({top: '50px'});
      });
    });

    $('.modal-order__close, #overlay').click(function(){
      $('#modal-bouquet').animate({top: '20px'}).hide(100,
        function() {
          $('#overlay').fadeOut(200)});
    });

  }());

});