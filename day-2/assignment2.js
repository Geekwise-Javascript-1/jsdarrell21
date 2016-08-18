var userResp = prompt('What do you want to do?');
console.log ( userResp );

if (userResp == null || userResp == ''){
  alert('Please enter an answer');
} else {
  alert('Thank you for answering');
}
