/**---------------NAV open---------------- */


/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */

function openNav() {
  document.getElementById("mySidebar").style.width = "350px"; 
  document.getElementById("openbtn").style.display = "none";

  document.getElementById("kmainSono").style.marginLeft = "340px";      
  document.getElementById("kContainrPhotoSht").style.marginLeft = "50px";      
  
}

 //Set the width of the sidebar to 0 and the left margin of the page content to 0 

function closeNav() {
    document.getElementById("mySidebar").style.width = "0px";   
    document.getElementById("openbtn").style.display = "block";
    document.getElementById("kmainSono").style.marginLeft = "0px";
    document.getElementById("kHeadr").style.marginLeft = "0px";
    document.getElementById("kHeadr").style.transition= ".3";
    document.getElementById("kSidenav").style.marginLeft = "0px";
 
}
