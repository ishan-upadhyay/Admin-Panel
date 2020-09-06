var firebaseConfig = {
  apiKey: "AIzaSyASkpafFrFFN9NIiPXaLFKG9ewiW0nMjL0",
  authDomain: "kheloapp-1ff8b.firebaseapp.com",
  databaseURL: "https://kheloapp-1ff8b.firebaseio.com",
  projectId: "kheloapp-1ff8b",
  storageBucket: "kheloapp-1ff8b.appspot.com",
  messagingSenderId: "319330959236",
  appId: "1:319330959236:web:c9716a6cc021e36defa7d1",
  measurementId: "G-SPDC289KVG"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.auth.Auth.Persistence.LOCAL;

var postrootRef = firebase.database().ref().child("posts");

postrootRef.orderByChild("type").equalTo("post").on("child_added", childSnap => {

  var hostid = childSnap.child("hostId").val();
  var commentCount = childSnap.child("commentCount").val();
  var description = childSnap.child("description").val();
  var publishDate = childSnap.child("publishDate").val();
  var type= childSnap.child("type").val();
  
  $("#event_name").append("<span></span><div class='dropdown'><button style='float:right' class='btn  animated--fade-in' type='button' id='dropdownMenuButton ' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'><i class='fas fa-ellipsis-v'></i></button><div class='dropdown-menu' aria-labelledby='dropdownMenuButton'><a  id='edit-dd' styles='font-size:8px;' class='dropdown-item'  onclick=editposts('" + childSnap.key + "')><i class='fas fa-pen editdd'></i>Edit post</a><a id= 'del-dd'styles='font-size:8px;'class='dropdown-item' href='#' onclick=deleteposts('" + childSnap.key + "')><i class='fas fa-trash-alt deldd'></i>Delete post</a></div></div>");
  $("#event_name").append("<p> HOST ID: " + hostid + "</p>");
  $("#event_name").append("<p> PUBLISHED ON: " + publishDate + "</p>");
  $("#event_name").append("<p> TYPE: " + type + "</p>");
  $("#event_name").append("<p> DESCRIPTION:" + description + "</p><hr><hr>");
});

var eventrootRef = firebase.database().ref().child("posts");

eventrootRef.orderByChild("type").equalTo("event").on("child_added", childSnap => {



  var hostid = childSnap.child("hostId").val();
  var commentCount = childSnap.child("commentCount").val();
  var description = childSnap.child("description").val();
  var publishDate = childSnap.child("publishDate").val();
  var type= childSnap.child("type").val();
  
  
  $("#event_events_name").append("<span></span><div class='dropdown'><button style='float:right' class='btn  animated--fade-in' type='button' id='dropdownMenuButton ' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'><i class='fas fa-ellipsis-v'></i></button><div class='dropdown-menu' aria-labelledby='dropdownMenuButton'><a  id='edit-dd' styles='font-size:8px;' class='dropdown-item'  onclick=editposts('" + childSnap.key + "')><i class='fas fa-pen editdd'></i>Edit post</a><a id= 'del-dd'styles='font-size:8px;'class='dropdown-item' href='#' onclick=deleteposts('" + childSnap.key + "')><i class='fas fa-trash-alt deldd'></i>Delete post</a></div></div>");
  $("#event_events_name").append("<p> HOST ID: " + hostid + "</p>");
  $("#event_events_name").append("<p> PUBLISHED ON: " + publishDate + "</p>");
  $("#event_events_name").append("<p> TYPE: " + type + "</p>");
  $("#event_events_name").append("<p> DESCRIPTION:" + description + "</p><hr><hr>");
});


var quizrootRef = firebase.database().ref().child("posts");

quizrootRef.orderByChild("type").equalTo("quiz").on("child_added", childSnap => {



  var hostid = childSnap.child("hostId").val();
  var commentCount = childSnap.child("commentCount").val();
  var description = childSnap.child("description").val();
  var publishDate = childSnap.child("publishDate").val();
  var type= childSnap.child("type").val();
  
  $("#event_quiz_name").append("<span></span><div class='dropdown'><button style='float:right' class='btn  animated--fade-in' type='button' id='dropdownMenuButton ' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'><i class='fas fa-ellipsis-v'></i></button><div class='dropdown-menu' aria-labelledby='dropdownMenuButton'><a  id='edit-dd' styles='font-size:8px;' class='dropdown-item'  onclick=editposts('" + childSnap.key + "')><i class='fas fa-pen editdd'></i>Edit post</a><a id= 'del-dd'styles='font-size:8px;'class='dropdown-item' href='#' onclick=deleteposts('" + childSnap.key + "')><i class='fas fa-trash-alt deldd'></i>Delete post</a></div></div>");
  $("#event_quiz_name").append("<p> HOST ID: " + hostid + "</p>");
  $("#event_quiz_name").append("<p> PUBLISHED ON: " + publishDate + "</p>");
  $("#event_quiz_name").append("<p> TYPE: " + type + "</p>");
  $("#event_quiz_name").append("<p> DESCRIPTION:" + description + "</p><hr><hr>");
});


var articlerootRef = firebase.database().ref().child("posts");

articlerootRef.orderByChild("type").equalTo("article").on("child_added", childSnap => {



  var hostid = childSnap.child("hostId").val();
  var commentCount = childSnap.child("commentCount").val();
  var description = childSnap.child("description").val();
  var publishDate = childSnap.child("publishDate").val();
  var type= childSnap.child("type").val();
  
  $("#event_article_name").append("<span></span><div class='dropdown'><button style='float:right' class='btn  animated--fade-in' type='button' id='dropdownMenuButton ' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'><i class='fas fa-ellipsis-v'></i></button><div class='dropdown-menu' aria-labelledby='dropdownMenuButton'><a  id='edit-dd' styles='font-size:8px;' class='dropdown-item'  onclick=editposts('" + childSnap.key + "')><i class='fas fa-pen editdd'></i>Edit post</a><a id= 'del-dd'styles='font-size:8px;'class='dropdown-item' href='#' onclick=deleteposts('" + childSnap.key + "')><i class='fas fa-trash-alt deldd'></i>Delete post</a></div></div>");
  $("#event_article_name").append("<p> HOST ID: " + hostid + "</p>");
  $("#event_article_name").append("<p> PUBLISHED ON: " + publishDate + "</p>");
  $("#event_article_name").append("<p> TYPE: " + type + "</p>");
  $("#event_article_name").append("<p> DESCRIPTION:" + description + "</p><hr><hr>");
});


function editposts(key) {
  $('#tryModal').modal('show');
  $(window).on('shown.bs.modal', function() {
      $('#tryModal').modal('show');
      firebase.database().ref('posts/' + key).on('value', function(snapshot) {
          document.getElementById('exampleInputEmail1').value = snapshot.val().hostId;
          document.getElementById('pd').value = snapshot.val().publishDate;
          document.getElementById('desc').value = snapshot.val().description;
      })
  });
  $("#save-btn").click(function() {
      var hostid = document.getElementById('exampleInputEmail1').value;
      var publishdate = document.getElementById('pd').value;
      var description = document.getElementById('desc').value;

      firebase.database().ref('posts/' + key).update({
          hostId: hostid,
          publishDate: publishdate,
          description: description
      });
      window.alert("Your Changes have been done! \n Refresh the page to see the changes");
      window.location.reload();

  });


}



var rootuserRef = firebase.database().ref().child("users");

rootuserRef.on("child_added", childSnap => {


  var displayName = childSnap.child("displayName").val();
  var email = childSnap.child("email").val();
  var primarySport = childSnap.child("primarySport").val();
  var age = childSnap.child("age").val();

  $("#event_user_name").append("<span></span><button style='float:right' type='button' class='btn btn-warning'  onclick=Blockeduser('" + childSnap.key + "')>Block</button>");

  $("#event_user_name").append("<p> NAME:" + displayName + "</p>");
  $("#event_user_name").append("<p> EMAIL: " + email + "</p>");
  $("#event_user_name").append("<p> PRIMARY SPORT:" + primarySport + "</p>");
  $("#event_user_name").append("<p> AGE: " + age + "</p><hr><hr>");


});

function Blockeduser(key) {
  rootuserRef.once("value",childSnap=>{
    childSnap.forEach(function(snapshot){
      // console.log(snapshot.val());
      data={};
      if(snapshot.key == key){
       
        snapshot.forEach(function(child){
          data[child.key]=child.val();
        });
        firebase.database().ref('Blockedusers/').push(data);
      
      }
    })

  })
  var BlockRef = firebase.database().ref().child("users").child(key);
 
  return BlockRef.remove()
      .then(function() {
          window.alert("Blocked successfully\n Refresh The Page to see the changes");
          window.location.reload();
      })
      .catch(function() {
          console.log("error occured");
      });
}
function deleteposts(key) {


  var deleteRef = firebase.database().ref().child("posts").child(key);
  firebase.database().ref('posts/' + key).on('value', snapshot => {
    hostId = snapshot.val().hostId;
    publishDate = snapshot.val().publishDate;
    description = snapshot.val().description;
    
    data = { hostId, description, publishDate };
    firebase.database().ref('deletedPosts/').push(data);
  });

  return deleteRef.remove()
    .then(function () {
      window.alert("Deleted successfully\n Refresh The Page to see the changes");
    })
    .catch(function () {
      console.log("error occured");
    });

}
var rootblockRef = firebase.database().ref().child("Blockedusers");

function unblockeduser(key) {
   rootblockRef.once("value",childSnap=>{
    childSnap.forEach(function(snapshot){
      data={};
      if(snapshot.key == key){
       
        snapshot.forEach(function(child){
          data[child.key]=child.val();
        });
        firebase.database().ref('users/').push(data);
      }
    })

  })
  var userRef = firebase.database().ref().child("Blockedusers").child(key);
 
  return userRef.remove()
      .then(function() {
          window.alert("unlocked successfully\n Refresh The Page to see the changes");
          window.location.reload();
      })
      .catch(function() {
          console.log("error occured");
      });
 
}


var rootdeleted_postRef = firebase.database().ref().child("deletedPosts");

rootdeleted_postRef.on("child_added", childSnap => {

  var postid = childSnap.child("postId").val();
  var hostid = childSnap.child("hostId").val();
  var type = childSnap.child("type").val();
  var description = childSnap.child("description").val();
 var location = childSnap.child("location").val();

  $("#event_deleted_posts").append("<p> POST ID:" + postid + "</p>");
  $("#event_deleted_posts").append("<p> HOSTID: " + hostid + "</p>");
  $("#event_deleted_posts").append("<p> TYPE: " + type + "</p>");
  $("#event_deleted_posts").append("<p> DESCRIPTION:" + description + "</p>");
  $("#event_deleted_posts").append("<p> LOCATION:" + location + "</p><hr><hr>");
});


var rootBlocked_userRef = firebase.database().ref().child("Blockedusers");

rootBlocked_userRef.on("child_added", childSnap => {

  var displayName = childSnap.child("displayName").val();
  var email = childSnap.child("email").val();
  var primarySport = childSnap.child("primarySport").val();
  var age = childSnap.child("age").val();

  $("#event_Blocked_user").append("<span></span><button style='float:right' type='button' class='btn btn-warning'  onclick=unblockeduser('" + childSnap.key + "')>Unblock</button>");
  $("#event_Blocked_user").append("<p> NAME:" + displayName + "</p>");
  $("#event_Blocked_user").append("<p> EMAIL: " + email + "</p>");
  $("#event_Blocked_user").append("<p> AGE: " + age + "</p>");
  $("#event_Blocked_user").append("<p> PRIMARY SPORT:" + primarySport + "</p><hr><hr>");
});

var transactionRef = firebase.database().ref().child("transactions");
//transactionRef.orderByChild("pending").equalTo("true").on("child_added", snap =>{


transactionRef.orderByChild("pending").equalTo(true).on("child_added", childSnap => {

  var date = childSnap.child("date").val();
  var pending = childSnap.child("pending").val();
  var type = childSnap.child("type").val();
  var points = childSnap.child("points").val();
  
  $("#event_transaction").append("<p> DATE:" + date + "</p>");
  $("#event_transaction").append("<p> PENDING: " + pending + "</p>");
  $("#event_transaction").append("<p> POINTS: " + points + "</p>");
  $("#event_transaction").append("<p> TYPE:" + type + "</p><hr><hr>");


});

var questionsRef = firebase.database().ref().child("sports");
questionsRef .once('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      var childKey = childSnapshot.key;
      
      $("#sports_info").append("<a  style='text-decoration:none; font-size:20px; color:grey;'  href='questions.html'  >" + childKey + "</a><br>");
    
    });
  });


var questionsRef = firebase.database().ref().child("quizQuestions");
questionsRef.on("child_added", childSnap => {
var childKey = childSnap.key;


 $("#event_ques_name").append("<p style='font-size:15px; color:black'>" + childKey + "</p><br>");
  childSnap.forEach(function(snapshot){
      var id = snapshot.child("id").val();
      var question=snapshot.child("question").val();
      var correctOption=snapshot.child("correctOption").val();
      var ansRef=firebase.database().ref("quizQuestions/"+childKey+"/"+snapshot.key).child("answers");
      $("#event_ques_name").append("<p style='font-size:15px; color:grey'> Q " + question + "</p><br>");
      ansRef.on("child_added",snap=>{
        var skey=snap.key;
        var sval=snap.val();
       $("#event_ques_name").append("<span style='font-size:15px; color:grey'>" + skey + ") </span>");
         $("#event_ques_name").append("<span style='font-size:15px; color:grey'>  " + sval + "</span><br><br>");
      })
  $("#event_ques_name").append("<p style='font-size:15px; color:grey'>Correct Ans" + correctOption + "</p><br>");

  })
}

);
$("#btn-login").click(function() {
  var email = $("#exampleInputEmail").val();
  var password = $("#exampleInputPassword").val();

  if (email != "" && password != "") {
      var result = firebase.auth().signInWithEmailAndPassword(email, password);
      result.catch(function(error) {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorCode);
          console.log(errorMessage);
          window.alert("Message: " + errorMessage);
      });
  } else {
      window.alert("Please fill out all fields.");
  }
});
$("#btn-resetPassword").click(function() {
  var auth = firebase.auth();
  var email = $("#exampleInputEmail").val();
  if (email != "") {
      auth.sendPasswordResetEmail(email).then(function() {
          window.alert("If this Email is correct, an email has been sent sto you please check.");
      }).catch(function(error) {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorCode);
          console.log(errorMessage);
          window.alert("Message: " + errorMessage);

      });
  } else {
      window.alert("Please write your Email.");
  }
});
$("#btn-logout").click(function() {
  firebase.auth().signOut();
});
