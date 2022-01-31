 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyAMgPF76QGPT0FTt-Rj9HhphO2O8i0l8AA",
  authDomain: "avilandchat.firebaseapp.com",
  databaseURL: "https://avilandchat-default-rtdb.firebaseio.com",
  projectId: "avilandchat",
  storageBucket: "avilandchat.appspot.com",
  messagingSenderId: "521952781910",
  appId: "1:521952781910:web:f171170d7e43956cad3df7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
    
      user_name = localStorage.getItem("Username");
      pass = localStorage.getItem("Password");
    
    document.getElementById("User_name").innerHTML = "Welcome " + user_name + "!";
    
    function addRoom()
    {
      room_name = document.getElementById("room_name").value;
    
      firebase.database().ref(room_name).push({
        name:"Default message",
        message:"Welcome to the room",
        like:0,
       });
      console.log("Room Name - " + Room_name);
      row = "<div class='room_name' id="+Room_name+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
        localStorage.setItem("room_name", room_name);
        
        window.location = "kwitter_page.html";
    }
    function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
           Room_names = childKey;
           console.log("Room Name - " + Room_names);
          row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
          document.getElementById("output").innerHTML += row;
        });
      });
    
    }
    
    getData();
    
    function redirectToRoomName(name)
    {
      console.log(name);
      localStorage.setItem("room_name", name);
        window.location = "kwitter_page.html";
    }

    function logOut() {
      window.location = "index.html";
      localStorage.removeItem("room_name");
      localStorage.removeItem("Username");
    }
    
    function blog() {
      window.location = "kwitter_room.html"
    }  

    function home() {
      window.location = "home.html"
    }
    function henry() {
      window.location = "henry.html"
    }
    function lngs1() {
      window.location = "legoninja1.html"
    }
    function downloadb() {
      window.location = "download.html"
    }
    function lngs2() {
      window.location = "legoninja2.html"
    }
    function mc() {
      
    }
    function srv() {
      
    }
    function my() {
      
    }
