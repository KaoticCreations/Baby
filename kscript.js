

/**---------------NAV open---------------- */


/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */

function openNav() {
    document.getElementById("mySidebar").style.width = "220px";
    document.getElementById("kmain").style.marginLeft = "220px";   
    document.getElementById("kHeadr").style.marginLeft = "250px";      

  // document.getElementById("openbtn").style.display = "none";
    
}

 //Set the width of the sidebar to 0 and the left margin of the page content to 0 

function closeNav() {
    document.getElementById("mySidebar").style.width = "0px";
    document.getElementById("kmain").style.marginLeft = "120px";
    document.getElementById("kHeadr").style.marginLeft = "150px";
    document.getElementById("kHeadr").style.transition= ".3";
    document.getElementById("kSidenav").style.marginLeft = "0px";
    
    
    
    document.getElementById("Sidebar").style.display = "none";
    document.getElementById("openbtn").style.display = "block";
   document.getElementById("menuClose").style.display = "block";   
    
}
