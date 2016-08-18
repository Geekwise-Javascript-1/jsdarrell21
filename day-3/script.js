/*String Object
var str = '     Jake     D';
var newStr = str.trim();
console.log(newStr);
*/

/* Math Object
var randNum = Math.floor( Math.random() * 10 ) + 1;
console.log(randNum);
*/

/* Date Object
var locale = 'en-us'
var toDay = new Date;
console.log(toDay);
console.log(toDay.toLocaleString(locale, {month:"long"})+' '+toDay.getDate()+', '+toDay.getFullYear());
*/

var firstName = prompt('What is your first name?');
var lastName = prompt('What is your last name?');
var birthDate = prompt('Whats is your birthday?');
var userColor = prompt('Choose a color');

var locale = "en-us";

function setBirthday(first, last, bday, color){
  var bdayArr = bday.split(' ');
  return (first + ' ' + last + '. Date of Birth: ' + bdayArr[0] + ' ' + bdayArr[1] +', ' + bdayArr[2] + '. Your color is ' + color + '.');
}

alert(setBirthday(firstName, lastName, birthDate, userColor));
