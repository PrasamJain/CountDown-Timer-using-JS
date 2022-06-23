// we make CountDown timer in JS using interval operations.
//take the time from user in the formate Hr : min : sec.

var hr = window.prompt("Enter the hours : ");  
var min = window.prompt("Enter the min : ");    
var sec = window.prompt("Enter the sec : "); 

if(min == null){
    min = 0;
  }
if(hr==null){
  hr = 0;
}
if(sec==null){
   sec = 0;
   }

function countdown()
{
  if(min==0 && hr==0&& sec==0)
  {
    console.log("Times Up !!")
    clearInterval(id);
  }
  else
  {
    console.log(hr+" : "+min+" : "+sec);
    sec--;
    if(sec == -1)
     {
       sec = 59;
       min--;
       if(min == -1)
       {
         min = 59;
         hr--;
         if(hr == -1)
           {
              console.log("Times Up!!")
             clearInterval(id);      // stop the timer after time was over
           }
       }
     }
  }
  
}

var id = setInterval(countdown , 1000);  //set time interval 
