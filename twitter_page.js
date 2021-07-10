//YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyDIGugLwMGtp-WQd1Eval6vLIVGUkqxZPA",
    authDomain: "kwitter-4dd9e.firebaseapp.com",
    databaseURL: "https://kwitter-4dd9e-default-rtdb.firebaseio.com",
    projectId: "kwitter-4dd9e",
    storageBucket: "kwitter-4dd9e.appspot.com",
    messagingSenderId: "915651673656",
    appId: "1:915651673656:web:c947e4d2826743f75af0cd"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");
function send(){
msg=document.getElementById("msg").value;
firebase.database().ref(room_name).push({
user_name: user_name,
message:msg,
like:0
});
document.getElementById("msg").value=" "
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;

    } });  }); }

