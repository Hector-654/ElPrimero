//https://www.eclipse.org/paho/clients/js/

function LED1_On() {
	//alert("led on");
	console.log("led on");
	//document.getElementById("sensor").innerHTML="led on";
	message =new Paho.MQTT.Message("LED1_ALTO");
	message.destinationName = "654hector1@gmail.com/kop";
	client.send(message);
  
}
function LED1_Off(){	
	//alert("led off");
	console.log("led off");
	//document.getElementById("sensor").innerHTML="led off";
	message =new Paho.MQTT.Message("LED1_bajo");
	message.destinationName = "654hector1@gmail.com/kop";
	client.send(message);
}
function SUMA(){
	var cd1 = parseFloat(document.getElementById('cd1').value);
	var cd2 = parseFloat(document.getElementById('cd2').value);
	var suma = cd1 + cd2;
	console.log("la suma es:...."+suma);
	document.getElementById('asw').value= suma;
	//alert('la suma es :' +suma);
		
	message =new Paho.MQTT.Message(""+suma);
	message.destinationName = "654hector1@gmail.com/kop";
	client.send(message)
		
	

}
function RESTA(){
	var cd1 = parseFloat(document.getElementById('cd1').value);
	var cd2 = parseFloat(document.getElementById('cd2').value);
	var resta = cd1 - cd2;
	console.log("la resta es:...."+resta);
	document.getElementById('asw').value= resta;
	//alert('la suma es :' +suma);v
		
	message =new Paho.MQTT.Message(""+resta);
	message.destinationName = "654hector1@gmail.com/kop";
	client.send(message)
		
	

}





// Create a client instance
  //client = new Paho.MQTT.Client("postman.cloudmqtt.com", 14970);
  
  client = new Paho.MQTT.Client("maqiatto.com", 8883, "web_" + parseInt(Math.random() * 100, 10));

  // set callback handlers
  client.onConnectionLost = onConnectionLost;
  client.onMessageArrived = onMessageArrived;
  var options = {
   useSSL: false,
    userName: "lfrenteriax@hotmail.com",
    password: "lfrenteriax",
    onSuccess:onConnect,
    onFailure:doFail
  }

  // connect the client
  client.connect(options);
   
  // called when the client connects
  function onConnect() {
    // Once a connection has been made, make a subscription and send a message.
    console.log("Conectado...");
	
    client.subscribe("lfrenteriax@hotmail.com/test");
    message = new Paho.MQTT.Message("hola desde la web");
    message.destinationName = "lfrenteriax@hotmail.com/test1";
    client.send(message);
	
  }

  function doFail(e){
    console.log(e);
	
  }

  // called when the client loses its connection
  function onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
      console.log("onConnectionLost:"+responseObject.errorMessage);
    }
  }

  // called when a message arrives
  function onMessageArrived(message) {
    console.log("onMessageArrived:"+message.payloadString);
  }
  
