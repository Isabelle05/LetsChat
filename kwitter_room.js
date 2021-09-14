
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBRzmoqZre7pQj8f11yL8sVCpGLRQ55hVY",
      authDomain: "kwitter-d95bb.firebaseapp.com",
      databaseURL: "https://kwitter-d95bb-default-rtdb.firebaseio.com",
      projectId: "kwitter-d95bb",
      storageBucket: "kwitter-d95bb.appspot.com",
      messagingSenderId: "679783323288",
      appId: "1:679783323288:web:eb1fdd579298df5b53a2ed"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    function addUser()
    {
          user_name = document.getElementById("user_name").value;
          firebase.database().ref("/").child(user_name).update({
                purpose : "adding user"
          })
    }

    user_name = localStorage.getItem("user_name");
     document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

     function addRoom()
     {
           room_name = document.getElementById("room_name").value;

           firebase.database().ref("/").child(room_name).update({
                 purpose : "adding room name"
           });

           localStorage.setItem("room_name", room_name );

           window. location = "kwitter_page.html" 
     }

     function getData() 
     {
 firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key;
       Room_names = childKey;
      console.log("Room Name -" + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      }); }); } getData();


      function redirectToRoomName(name)
      {
            console.log(name);
            localStorage.setItem("room_name", name);
            window.location = "kwitter_page.html";
      }

      function logout() {
            localStorage.removeItem("user_name");
            localStorage.removeItem("room_name");
            window.location = "index.html";
      }
    