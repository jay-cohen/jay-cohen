jQuery(document).ready(function ($) {
    
  var count = 1;  
	var slideCount = $('.slider ul li').length;
	var slideWidth = $('.slider ul li').width();
	var slideHeight = $('.slider ul li').height();
	var sliderUlWidth = slideCount * slideWidth;
	
	$('.slider').css({ width: slideWidth, height: slideHeight });
	$('.slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
  $('.slider ul li:last-child').prependTo('.slider ul');
  $('.total').html('/'+slideCount);

    function moveLeft() {
        $('.slider ul').animate({
            left: + slideWidth
        }, 500, function () {
            $('.slider ul li:last-child').prependTo('.slider ul');
            $('.slider ul').css('left', '');
        });
    };

    function moveRight() {
        $('.slider ul').animate({
            left: - slideWidth
        }, 500, function () {
            $('.slider ul li:first-child').appendTo('.slider ul');
            $('.slider ul').css('left', '');
        });
    };

    $('.prev').click(function () {
        moveLeft();
        count--;
        if (count == 0) {
            count = slideCount
        }
        $('.btns .left-btn').css('opacity', '1');
        $('.counter').html(count);
        return false;
    });

    $('.next').click(function () {
        moveRight();
        count++;
        if (count >= slideCount+1) {
            count = 1
            $('.btns .left-btn').css('opacity', '0.3');
        } else {
            $('.btns .left-btn').css('opacity', '1');
        }
        $('.counter').html(count);
        return false;
    });

    // Nav
    $('.nav-btn').click(function () {
        $('.main-nav ul').toggle();
    })    

});    

 // Contact form

window.addEventListener("DOMContentLoaded", function() {

    // get the form elements defined in your form HTML above
    
    var form   = document.getElementById("contact-form");
    var button = document.getElementById("submit-btn");
    var status = document.getElementById("submit-status");

    // Success and Error functions for after the form is submitted
    
    function success() {
      form.reset();
      button.style = "display: none ";
      status.innerHTML = "Project received. Thanks!";
    }

    function error() {
      status.innerHTML = "Oops! There was a problem.";
    }

    // handle the form submission event

    if(form) {
      form.addEventListener("submit", function(ev) {
        ev.preventDefault();
        var data = new FormData(form);
        ajax(form.method, form.action, data, success, error);
      });
    }
  
  // helper function for sending an AJAX request

  function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function() {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        success(xhr.response, xhr.responseType);
      } else {
        error(xhr.status, xhr.response, xhr.responseType);
      }
    };
    xhr.send(data);
  }

});