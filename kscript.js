

/**---------------NAV open---------------- */


/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */

function openNav() {
  document.getElementById("mySidebar").style.width = "280px"; 
  document.getElementById("menuClose").style.marginLeft ="280px"; 
  document.getElementById("menuClose").style.display = "block";
  document.getElementById("menuClose").style.transition="0.5s";
  document.getElementById("mySidebar").style.height = "auto";
  document.getElementById("openbtn").style.display = "none";

  document.getElementById("kmain").style.marginLeft = "0px";      
       
  
}

 //Set the width of the sidebar to 0 and the left margin of the page content to 0 

function closeNav() {
    document.getElementById("mySidebar").style.width = "0px"; 
    document.getElementById("menuClose").style.marginLeft ="0%"; 
  document.getElementById("menuClose").style.display = "none";  
    document.getElementById("openbtn").style.display = "block";


    
    document.getElementById("kmainSono").style.marginLeft = "0px";
    document.getElementById("kHeadr").style.marginLeft = "0px";
    document.getElementById("kHeadr").style.transition= ".3";
    document.getElementById("kSidenav").style.marginLeft = "0px";
 
}
