// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		document.getElementById("myBtn").style.display = "block";
	} else {
		document.getElementById("myBtn").style.display = "none";
	}
}

$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}

//loader
$(document).ready(function() {
	
	setTimeout(function(){
		$('body').addClass('loaded');
		$('h1').css('color','#222222');
	}, 3000);
	
})

//intersectionObserver

 let visiblity = 'invisible';
    let statusText = 'No box';
    // Create new IntersectionObserver
    const io = new IntersectionObserver(entries => {
      
      // Available data when an intersection happens
      console.log(entries);
      // Element enters the viewport
      if(entries[0].intersectionRatio !== 0) {
        visiblity = 'visible';
        statusText = entries[0].target.textContent;
      // Element leaves the viewport 
      } else {
        visiblity = 'invisible';
        statusText = '';
      }
      updateStatus(visiblity, statusText);
    });
    
    // Elements to be observed
    const box1 = document.querySelector('.box1');
    const box2 = document.querySelector('.box2');
    const box3 = document.querySelector('.box3');
    const box4 = document.querySelector('.box4');
    const box5 = document.querySelector('.box5');
    const box6 = document.querySelector('.box6');
    
    // Start observing .box
    io.observe(box1);
    io.observe(box2);
    io.observe(box3);
     io.observe(box4);
    io.observe(box5);
    io.observe(box6);
    // Just necessary for displaying the current status
    function updateStatus(visiblity, statusText) {
      console.log(visiblity);
      const status = document.querySelector('.status');
    //  console.log(statusText);
    //  status.textContent = statusText;
    //  status.className = 'status status--' + visiblity;
    }
