
var ele=document.getElementsByClassName("grid-items");
var coursename = document.getElementsByClassName("course-name");
var coursedescription = document.getElementsByClassName("course-description");
var tgriditems = document.getElementsByClassName("t-grid-items");
var review = document.querySelectorAll(".t-grid-items p");
var contactus = document.getElementById("Contact-us");

document.getElementById("mode").addEventListener("click", function(){
    if(document.body.style.backgroundColor=='white')
    {
      document.body.style.backgroundColor='rgb(17,24,39)';
      document.body.style.color='#9333EA';
      //contactus.style.backgroundColor='rgb(17,24,39)';
      for(var i=0 ; i<ele.length ; i++){
        ele[i].style.backgroundColor = 'rgb(30,41,59)';
        ele[i].style.boxShadow  = '0 0 0 0';
        coursename[i].style.color = 'white';
        coursedescription[i].style.color = '#9CA3AF';
        tgriditems[i].style.backgroundColor = '#374151';
        tgriditems[i].style.boxShadow  = '0 0 0 0';
        review[i].style.color = '#D1D5DB';
      }

    }
    else
    {
      document.body.style.backgroundColor='white';
      document.body.style.color='black'
      for(var i=0 ; i<ele.length ; i++){
        ele[i].style.backgroundColor = '#FDF4F5';
        ele[i].style.boxShadow  = '20px 20px 60px #888888';
        coursename[i].style.color = 'black';
        coursedescription[i].style.color = 'black';
        tgriditems[i].style.backgroundColor= '#FDF4F5';
        review[i].style.color = 'black';
        //tgriditems[i].style.boxShadow = '15px 15px 40px #888888';
      }
    }
}); 

document.getElementById("mode").addEventListener("mouseover", function(){
  if(document.body.style.color=='black')
  {
    document.getElementById("pop-up").innerHTML = "switch to dark mode";
  }
  else
  {
    document.getElementById("pop-up").innerHTML = "switch to light mode";
  }
}); 