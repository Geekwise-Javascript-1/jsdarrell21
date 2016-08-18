var name = prompt('Name:');
name = capitalize(name);

function capitalize(n){
  return n.charAt(0).toUpperCase() + n.substr(1, n.length);
}

console.log(name);
