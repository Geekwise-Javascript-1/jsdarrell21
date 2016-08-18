// Day 4 Lesson

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

function getUsername(){
  var user = prompt('What is your username?');
  craftMsg(user);
}

function craftMsg(uN){
  var msg = 'Welcome ';
  msg += formatUsername(uN);
  msg += ' to my site';
  alertUser(msg);
}

function formatUsername(uC){
  return uC.charAt(0).toUpperCase() + uC.substr(1, uC.length).toLowerCase();
}

function alertUser(mA){
  alert(mA);
}



getUsername();
