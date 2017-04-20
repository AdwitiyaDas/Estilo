// JavaScript Document



$(document).ready(function() {
// Validating Form Fields.....
$("#submit1").click(function(e) {
var email = $("#email").val();
var name = $("#name").val();
var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
if (email === '' || name === '') {
alert("Please fill all fields...!!!!!!");
e.preventDefault();
} else if (!(email).match(emailReg)) {
alert("Invalid Email...!!!!!!");
e.preventDefault();
} else {
alert("You have been successfully logged in.....");
document.location.href='main.html';
}
});
});


$(document).ready(function() {
$(function() {
$("#dialog1").dialog({
autoOpen: false
});
$("#button2").on("click", function() {
$("#dialog1").dialog("open");
});
});
// Validating Form Fields.....
$("#submit").click(function(e) {
var email = $("#email").val();
var name = $("#name").val();
var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
if (email === '' || name === '') {
alert("Please fill all fields...!!!!!!");
e.preventDefault();
} else if (!(email).match(emailReg)) {
alert("Invalid Email...!!!!!!");
e.preventDefault();
} else {
alert("Redirecting......");
}
});
});


$(document).ready(function() {
$(function() {
$("#mymodal").dialog({
autoOpen: false
});
$("#button").on("click", function() {
$("#mymodal").dialog("open");
});
});
// Validating Form Fields.....
$("#submit").click(function(e) {
var email = $("#email").val();
var name = $("#name").val();
var phone = $("#contact").val();
var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
var Regex = /[0-9 -()+]+$/;
if (email === '' || name === '' || phone === '') {
alert("Please fill all fields...!!!!!!");
e.preventDefault();
} else if (!(email).match(emailReg)) {
alert("Invalid Email...!!!!!!");
e.preventDefault();
} else if (!(phone).match((Regex).val)) {
alert("Invalid Contact Number...!!!!!!");
e.preventDefault();
} else {
alert("Redirecting......")
document.location.href='main.html';
}
});
});