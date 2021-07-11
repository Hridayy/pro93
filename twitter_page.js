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

function getData() { 
  firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;

       console.log(firebase_message_id);
       console.log(message_data);
       names=message_data['user_name'];
       message=message_data['message'];
       like=message_data['like'];
       name_with_tag=names+"<img class='user_tick' src='tick.png'>";
       message_with_tag="<br>"+message+"<br>";
       like_button = "<button class='btn btn-warning' id=" + firebase_message_id + " value=" + like + " onclick='updateLike(this.id)'>";
               span_tag = "<span class='glyphicon glyphicon-thumbs-up'> Like: " + like + "</span></button><hr>";
       row=name_with_tag+message_with_tag+like_button+span_tag;
       document.getElementById("output").innerHTML+=row;
       
    } });  }); }

   
    

    getData();
    function updateLike(message_id){
    button_id=message_id;
    console.log("button_clicked")
    
    
    like=document.getElementById(button_id).value;
    console.log(like);
    update_like=Number(like)+1;
    console.log(update_like);
    firebase.database().ref(room_name).child(message_id).update({
    like:update_like
    
    })
    
    }
    function logout(){
          localStorage.removeItem("user_name");
          localStorage.removeItem("room_name");
          window.location="index.html";
           }