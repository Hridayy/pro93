
var firebaseConfig = {
    apiKey: "AIzaSyDIGugLwMGtp-WQd1Eval6vLIVGUkqxZPA",
    authDomain: "kwitter-4dd9e.firebaseapp.com",
    databaseURL: "https://kwitter-4dd9e-default-rtdb.firebaseio.com",
    projectId: "kwitter-4dd9e",
    storageBucket: "kwitter-4dd9e.appspot.com",
    messagingSenderId: "915651673656",
    appId: "1:915651673656:web:c947e4d2826743f75af0cd"
  };
  firebase.initializeApp(firebaseConfig);
  
  function addUser() 
  {
  
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update
        (
            {
            purpose: "adding user",
            reason: "new user"
            }
        );
 

user_name=document.getElementById("user_name").value;
if(user_name !="")
{
localStorage.setItem("user_name",user_name);
window.location="twitter_room.html";
}
else{
    window.alert("please enter a username")
}
}