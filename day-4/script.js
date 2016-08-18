// Day 4 Lesson

// Example 1
/*
function hello(){
  var msg = 'hello';
  world(msg);
}

function world(message){
  alert(message + ' world');
}

hello();
*/

// Example 2
function getUsername(){
  var user = prompt('What is your username?');
  user = checkUsername(user);
}

function craftMsg(uN){
  var msg = 'Welcome ';
  msg += formatUsername(uN);
  msg += ' to my site';
  alertUser(msg);
}

function formatUsername(uF){
  return uF.charAt(0).toUpperCase() + uF.substr(1, uF.length).toLowerCase();
}

function alertUser(mA){
  alert(mA);
}

getUsername();

// Example 3
function checkUsername(user){
  var preparsed = user;
  user = parseInt(user);

  // console.log(user);
  // console.log(preparsed);


  if( !isNaN(user) || preparsed === null || preparsed === '' ){
    alert('That is not a proper username');
    return;
  }
  preparsed = preparsed.trim();
  if(preparsed === ''){
    alert('That is not a proper username');
    return;
  }
  craftMsg(preparsed);
}

// checkUsername();
