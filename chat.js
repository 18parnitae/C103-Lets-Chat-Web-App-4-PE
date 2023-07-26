// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
//ADD YOUR FIREBASE LINKS HERE

var firebaseConfig = 
{
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
document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    /*
    user_name = document.getElementById("user_name").value;
    */
    user_name = document.getElementById("user_name").value;
    /*
    localStorage.setItem("user_name", user_name);
    */
    localStorage.setItem("user_name", user_name);
    /*
    window.location = "chat_room.html";
    */
    window.location = "chat_room.html";
}



