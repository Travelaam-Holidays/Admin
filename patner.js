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



document.getElementById('patner').addEventListener('submit', submitpat);

function submitpat(e){
    e.preventDefault();

    //get values
    var company_name= getinputval('company_name');
    var owner_name= getinputval('owner_name');
    var contact= getinputval('contact');
    var email= getinputval('email');
    var address= getinputval('address');
    var city= getinputval('city');
    var area= getinputval('area');
    
    writeUserData(company_name, owner_name, contact, email, address, city, area);

    document.getElementById("patner").reset();
}

function writeUserData(company_name, owner_name, contact, email, address, city, area) {
    firebase.database().ref('patner/' + company_name).set({
        Owner_name: owner_name,
        Contact: contact,
        email: email,
        address: address,
        city: city,
        area: area
    });
  }

//funtion to get values 

function getinputval(id){
    return document.getElementById(id).value;
}