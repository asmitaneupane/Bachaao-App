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
  location.href = ' tel:100;'
  // alert("calling Police");

}

function eCall()
{
  location.href = 'sms: my name is ashmi and i am in problem';
    // alert("Call");

}

function sendSMS(number,message){
    console.log("number=" + number + ", message= " + message);

    //CONFIGURATION
    var options = {
        replaceLineBreaks: false, // true to replace \n by a new line, false by default
        android: {
            intent: ''  // send SMS with the native android SMS messaging
            //intent: '' // send SMS without opening any other app
        }
    };

    var success = function () { alert('Message sent successfully'); };
    var error = function (e) { alert('Message Failed:' + e); };
    sms.send(number, message, options, success, error);
}


function helpMe()
{
  pushAlarm();
  callPolice();
  eCall();
  eSMS();
}

function eSMS(){
  getLocation();
  current_location = localStorage.getItem("location");
  message = "Help me ! My location is : "+current_location;
  number = "9811126761";
  sendSMS(number,message);
}


function getLocation() {
  var x = document.getElementById("mylocation");
  if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function (position) {
      var latitude = position.coords.latitude;
      var longitude = position.coords.longitude;
      localStorage.location = longitude+","+latitude;
      x.innerHTML= longitude+","+latitude;
    });
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}



