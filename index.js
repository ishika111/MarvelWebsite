/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;

//you learn this conbtent through the JS tutorials in Year 8
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) { //if you scroll down
    document.getElementById("navbar").style.top = "0"; //top element in Navbar style set to 0
    //potentially add some opacity or some cool style here. 
  } else {
    document.getElementById("navbar").style.top = "-150px"; //top element in Navbar style set to invisible
  }
  prevScrollpos = currentScrollPos;
}


