var myImage = document.querySelector('img');

myImage.onclick = function() {
  var mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/wow.png') {
    myImage.setAttribute ('src','images/wow2.png');
  }else{
    myImage.setAttribute ('src','images/wow.png');
  }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'MishaPagan is Cool,' + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
}else{
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'MishaPagan is Cool,' + storedName;
}
myButton.onclick = function() {
  setUserName();
}
