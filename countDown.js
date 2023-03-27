let countTime=setInterval(function(){
    let enddate=new Date("December 30, 2023 12:00:00").getTime();
    var now=new Date().getTime();
    var real=enddate-now;
    
    
    var days=Math.floor(real/(1000*60*60*24));
    var hours=Math.floor((real%(1000*60*60*24))/(1000*60*60));
    var minutes=Math.floor((real%(1000*60*60))/(1000*60));
    var seconds=Math.floor((real%(1000*60))/(1000)); 
    
    days=days<10? "0"+days:days;
    hours=hours<10? "0"+hours:hours;
    minutes=minutes<10? "0"+minutes:minutes;
    seconds=seconds<10? "0"+seconds:seconds;

    document.getElementById("days").innerHTML=days;
    document.getElementById("hours").innerHTML=hours;
    document.getElementById("minutes").innerHTML=minutes;
    document.getElementById("seconds").innerHTML=seconds;
  },1000)
  
