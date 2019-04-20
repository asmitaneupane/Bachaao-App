function pushAlarm()
{
  var al=document.getElementById('alarmLabel');
var sound= document.getElementById('notify');

if(sound.paused)
  {
    sound.play();
    al.innerHTML="Stop";
  }
else{
    sound.pause();
    al.innerHTML="Alarm";
  }
}

function callPolice()
{
  location.href = ' tel: 100;'
  // alert("calling Police");

}

function eCall()
{
  location.href = 'sms: my name is ashmi and i am in problem';

    // alert("Call");

}

function helpMe()
{
  pushAlarm();
  callPolice();
  eCall();
}
function addNumber()
{

  var form = new FormData(document.getElementById("addNumberForm"));
  var myname=$("#myname").innerHTML;
  var mynumber=$("#mynumber").innerHTML;

  // var list=[];
  // localStorage.setItem(myname,mynumber);
  // console.log(localStorage.getItem(myname));
  // alert("done");
}

function getNumbers()
{
  var list=localStorage.getItem("enumbers");
}