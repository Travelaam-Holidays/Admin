// Initialize Firebase
var config = {
    apiKey: "AIzaSyDvyWV1vGkgiSbH7HxqWtnjAQlKHwXeE2A",
    authDomain: "travelaam-73c45.firebaseapp.com",
    databaseURL: "https://travelaam-73c45.firebaseio.com",
    projectId: "travelaam-73c45",
    storageBucket: "travelaam-73c45.appspot.com",
    messagingSenderId: "538951225876"
  };
  firebase.initializeApp(config);



document.getElementById('blog').addEventListener('submit', submitblog);

function submitblog(e){
    e.preventDefault();

    //get values
    var bid= getinputval('bid');
    var bname= getinputval('bname');
    var bdes= getinputval('bdes');
    var bdate= getinputval('bdate');
    
    writeUserData(bid, bname, bdes, bdate);

    document.getElementById("blog").reset();
}

function writeUserData(bid, bname, bdes, bdate) {
    firebase.database().ref('Blog/id/' + bid).set({
        Blog_Name: bname,
        description: bdes,
        date: bdate
    });
  }

//funtion to get values 

function getinputval(id){
    return document.getElementById(id).value;
}