/**** Slide-in-out in navbar ****/
$('.slide-in').click(function(){
    $('.left').hide(300);  
    $('.right').css({width:'100%'});
    $('.slide-out').show(300);
    $(this).hide(300);
});
$('.slide-out').click(function(){
  $('.left').show(300); 
  $('.right').css({width:'85%'});  
  $(this).hide(300)
  $('.slide-in').show(300);
});



  $('.slide-in').click(function(){
    if($(window).width() <= 576) {
      $('.left').hide(300);
      $('.right').show(300);
      $('.right').css({width:'100%'});
      $('.slide-out').show(300);
      $(this).hide(300);
    }
  });


  $('.slide-out').click(function(){
    if($(window).width() <= 579) {
      $('.left').show(300); 
      $('.left').css({width:'90%'});  
      $('.right').fadeOut(300);
      $(this).hide(300)
      $('.slide-in').show(300);
    }
  });


$('.about-btn').click(function(){
	$('.Register').hide(350);
  $('.overview-section2').hide(350);
  $('.overview-section').show(350);
	$(this).addClass("profile-nav__active");
	$('.register-btn').removeClass("profile-nav__active");
  $('.instructor-btn').removeClass("profile-nav__active");
});
$('.register-btn').click(function(){
  $('.overview-section2').hide(350);
  $('.overview-section ').hide(350);
	$('.Register').show(350);
	$(this).addClass("profile-nav__active");
	$('.about-btn').removeClass("profile-nav__active");
  $('.instructor-btn').removeClass("profile-nav__active");
});
$('.instructor-btn').click(function(){
	$('.overview-section').hide(350);
  $('.Register').hide(350);
  $('.overview-section2').show(350);
	$(this).addClass("profile-nav__active");
	$('.about-btn').removeClass("profile-nav__active");
  $('.register-btn').removeClass("profile-nav__active");
});


function rightSide() {
  if($(window).width() <= 992) {
    $('.left-chat').hide(300);
    $('.right-chat').show(300);
    $('.right-chat').removeClass('chat-sizes');
    $('.right-chat').addClass('w-97');

} else {
    $('.left-chat').show(300);
    $('.right-chat').show(300);
    $('.right-chat').addClass('chat-sizes');
    $('.right-chat').removeClass('w-97');
  }
}
$('.back-btn').click(function(){
  $('.left-chat').show(300);
  $('.right-chat').hide(300);
})


/******** For DropDown Menu  ******/

$('.dropdown').click(function(){
  $('.dropdown-menu').toggle(300);

})

$('.dropdown2').click(function(){
  $('.dropdown-menu2').toggle(300);

})

/*********** Question For Upload Source Code Or Not  *********/
$('.upload').click(function(){
  $('.for-upload').fadeIn(300);
})

$('.not-upload').click(function(){
  $('.for-upload').fadeOut(300);
})



/***********   Check Box  **********/
$('#youtube').click(function(){
  $('#youtube-inp').fadeIn(300);
  $('#vedio-inp').fadeOut(300);
  $('#choose-btn-pc').fadeOut(300);
  $('#pic-btn').fadeOut(300);
  $('#ved-btn').fadeIn(300);
})


$('#ph').click(function(){
  $('#youtube-inp').fadeOut(300);
  $('#vedio-inp').fadeOut(300);
  $('#choose-btn-pc').fadeIn(300);
  $('#pic-btn').fadeOut(300);
  $('#ved-btn').fadeOut(300);
})



$('#ved').click(function(){
  $('#vedio-inp').fadeIn(300);
  $('#youtube-inp').fadeOut(300);
  $('#choose-btn-pc').fadeOut(300);
  $('#pic-btn').fadeIn(300);
  $('#ved-btn').fadeOut(300);

})

function success() {
    const Toast = Swal.mixin({
        toast: false,
        position: 'center',
        showConfirmButton: false,
        timer: 3500
      })
      Toast.fire({
        type: 'success',
        title: 'Edit Done Succefully'
      })
}

function accept() {
  const Toast = Swal.mixin({
      toast: false,
      position: 'center',
      showConfirmButton: false,
      timer: 3500
    })
    
    Toast.fire({
      type: 'success',
      title: 'Request Accepted successfully'
    })
}
function Canceled() {
  const Toast = Swal.mixin({
      toast: false,
      position: 'center',
      showConfirmButton: false,
      timer: 3500
    })
    
    Toast.fire({
      type: 'success',
      title: 'Request Refused successfully'
    })
}
function complain() {
  const Toast = Swal.mixin({
      toast: false,
      position: 'center',
      showConfirmButton: false,
      timer: 3500
    })
    
    Toast.fire({
      type: 'success',
      title: 'Compain Sent successfully'
    })
}

function success2() {
    const Toast = Swal.mixin({
        toast: false,
        position: 'center',
        showConfirmButton: false,
        timer: 5500
      })
      
      Toast.fire({
        type: 'success',
        title: '4SOFT has received your request successfully and we will answer soon'
      })
}

function success3() {
  const Toast = Swal.mixin({
      toast: false,
      position: 'center',
      showConfirmButton: false,
      timer: 3000
    })
    
    Toast.fire({
      type: 'success',
      title: 'Updated successfully'
    })
}




$(window).on("scroll",function(){
    if($(window).scrollTop()>=300)
    {
        $('#goUPButton').slideDown(700);
    }
    else
    {
        $('#goUPButton').slideUp(700); 
    }
}) ;
function goUP(){
    window.scrollTo(0,0); 
};
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();
      // Store hash
      var hash = this.hash;
      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1200, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});


var real = document.getElementById('real-life');
var btn  = document.getElementById('choose-btn-pc');
var customTxt  = document.getElementById('customTxt');
var srcBtn = document.getElementById('src-btn');
var fileBtn = document.getElementById('file-btn');
var customTxt2 = document.getElementById('customTxt2');


btn.addEventListener("click",function() {
  real.click();
});
real.addEventListener("change",function() {
  if(real.value) {
    customTxt.innerHTML = real.value;
  } else {
    customTxt.innerHTML = "No File Chosen yet !";
  }
});

srcBtn.addEventListener("click",function() {
  fileBtn.click();
});
fileBtn.addEventListener("change",function() {
  if(fileBtn.value) {
    customTxt2.innerHTML = fileBtn.value;
  } else {
    customTxt2.innerHTML = "No File Chosen yet !";
  }
})





