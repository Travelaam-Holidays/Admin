// Initialize Firebase
var config = {
  apiKey: "AIzaSyCY8e6udkfIXF0BMhrzrSXuQjPP2ROfkfE",
  authDomain: "travelaam-69b31.firebaseapp.com",
  databaseURL: "https://travelaam-69b31.firebaseio.com",
  projectId: "travelaam-69b31",
  storageBucket: "travelaam-69b31.appspot.com",
  messagingSenderId: "723089584950"
};
  firebase.initializeApp(config);



document.getElementById('international').addEventListener('submit', submitint);

function submitint(e){
    e.preventDefault();

    //get values
    var iid= getinputval('intid');
    var iname= getinputval('intname');
    var iimg= getinputval('intimg');
    var iprice= getinputval('intprice');
    var ioffer= getinputval('intoffer');
    var idays= getinputval('intdays');
    var inights= getinputval('intnight');
    var iflight= getinputval('intflight');
    var itrain= getinputval('inttrain');
    var icar= getinputval('intcar');
    var ibre= getinputval('intbre');
    var il= getinputval('intl');
    var ibru= getinputval('intbru');
    var is= getinputval('ints');
    var id= getinputval('intd');
    var ihd= getinputval('inthoteld');
    var istar= getinputval('inthstar');
    var idetails= getinputval('intdetails');

    writeUserData(iid, iname, iimg, iprice, ioffer, idays, inights, iflight, itrain, icar, ibre, il, ibru, is, id, ihd, istar, idetails);

    document.getElementById("international").reset();
}

function writeUserData(iid, iname, iimg, iprice, ioffer, idays, inights, iflight, itrain, icar, ibre, il, ibru, is, id, ihd, istar, idetails) {
    firebase.database().ref('international/id/' + iid).push({
        Package_Name: iname,
        image: iimg,
        price: iprice,
        offer: ioffer,
        days: idays,
        nights: inights,
        Package_details: idetails,
        transport:{flight: iflight, train: itrain, car: icar},
        meal_plan:{breakfast: ibre, lunch: il, brunch: ibru, supper: is, dinner: id},
        hotel: {star: istar, hdetail: ihd}
    });
  }

//funtion to get values 

function getinputval(id){
    return document.getElementById(id).value;
}

//check box selection
function checkbox(id){
    display(value='yes');
}

//upload file
function upload(){
    var file= event.target.files[0];
    var filename= file.name;
    var storageref=firebase.storage().ref('international/'+ filename);
    var uploadTask= storageref.put(file);


    // Register three observers:
// 1. 'state_changed' observer, called any time the state changes
// 2. Error observer, called on failure
// 3. Completion observer, called on successful completion
uploadTask.on('state_changed', function progress(snapshot){
    // Observe state change events such as progress, pause, and resume
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    switch (snapshot.state) {
      case firebase.storage.TaskState.PAUSED: // or 'paused'
        console.log('Upload is paused');
        break;
      case firebase.storage.TaskState.RUNNING: // or 'running'
        console.log('Upload is running');
        break;
    }
  }, function err(error) {
    // Handle unsuccessful uploads
  }, function complete() {
    // Handle successful uploads on complete
    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
    var downloadURL = uploadTask.snapshot.downloadURL;
    return downloadURL;
  });
}