// Initialize [COPY THE SNIPPET PROJECT OVERVIEW SETTINGS -> GENERAL -. FIREBASE SDK SNIPPET]
var config = {
    apiKey: " ",
    authDomain: " ",
    databaseURL: " ",
    projectId: " ",
    storageBucket: " ",
    messagingSenderId: " ",
    appId: " ",
    measurementId: " "
  };
  firebase.initializeApp(config);
  

  //Reference for form collection
  let formMessage = firebase.database().ref('register');
  
  //listen for submit event
  document
    .getElementById('registrationForm')
    .addEventListener('submit', formSubmit);
  
  //Submit form
  function formSubmit(e) {
    e.preventDefault();
    // Get Values from the DOM
    let firstname = document.querySelector('#firstname').value;
    let lastname = document.querySelector('#lastname').value;
    let grade = document.querySelector('#grade').value;
    let gender = document.querySelector('#gender').value;
    
    //send message values
    sendMessage(firstname,lastname,grade,gender);
  
    //Show Alert Message
    document.querySelector('.alert').style.display = 'block';
  
    //Hide Alert Message After Seven Seconds
    setTimeout(function() {
      document.querySelector('.alert').style.display = 'none';
    }, 7000);
  
    //Form Reset After Submission
    document.getElementById('registrationForm').reset();
  }
  
  //Send Message to Firebase
  
  function sendMessage(firstname,lastname,grade,gender) {
    let newFormMessage = formMessage.push();
    newFormMessage.set({
      firstname: firstname,
      lastname:lastname,
      grade:grade,
      gender: gender
      
    });}