 //ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
  apiKey: "AIzaSyAV4OFxReNDd5taJQAak-T4RkzuESgbTTQ",
  authDomain: "kwitter-b2c90.firebaseapp.com",
  databaseURL: "https://kwitter-b2c90-default-rtdb.firebaseio.com/",
  projectId: "kwitter-b2c90",
  storageBucket: "kwitter-b2c90.appspot.com",
  messagingSenderId: "112699484984",
  appId: "1:112699484984:web:df7e84290803804f99efcd",
  measurementId: "G-6P7TNW0YRD"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "welcome" + user_name + "!";

function addRoom() 
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
        purpose:"adding room"
  });
  localStorage.setItem("room_name", room_name);
  window.location = "chat_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;
  //Start code
  console.console.log("Room Name - " + Room_names);
  row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
  document.getElementById("output").innerHTML += row;
  //End code
  });});}
getData();
function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "chat_page.html";
}
function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "index.html";
}