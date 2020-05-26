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


function success() {
    const Toast = Swal.mixin({
        toast: false,
        position: 'center',
        showConfirmButton: false,
        timer: 3500
      })
      Toast.fire({
        type: 'success',
        title: 'Request Send successfully'
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
        timer: 3500
      })
      
      Toast.fire({
        type: 'success',
        title: 'Message Send successfully We will answer soon'
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




