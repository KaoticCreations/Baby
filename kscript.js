

/**---------------NAV open---------------- */


/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */

function openNav() {
  document.getElementById("mySidebar").style.width = "70%"; 
  document.getElementById("menuClose").style.marginLeft ="0%"; 
  document.getElementById("menuClose").style.display = "block";
  
  document.getElementById("mySidebar").style.height = "auto";
  document.getElementById("openbtn").style.display = "none";

  document.getElementById("homeTop").style.marginright = "0px";

  
       
  
}

 //Set the width of the sidebar to 0 and the left margin of the page content to 0 

function closeNav() {
    document.getElementById("mySidebar").style.width = "0px"; 
    document.getElementById("menuClose").style.marginLeft ="-10%"; 
    //document.getElementById("menuClose").style.display = "none";  
    document.getElementById("openbtn").style.display = "block";
    document.getElementById("kTainr").style.marginLeft = "0px";   

}
