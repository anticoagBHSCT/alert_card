//pagination scripts
$(document).ready(function(){
  $('#second').hide();
});

$("#front_link").click(function(){
  $('#first').toggle();
  $('#second').hide();
});
$("#back_link").click(function(){
  $('#first').hide();
  $('#second').toggle();
});

//scripts for the front page
$("#photo_button").click(function() {
  var input = document.getElementById("file");
  var fReader = new FileReader();
  fReader.readAsDataURL(input.files[0]);
  fReader.onloadend = function(event) {
    var img = document.getElementById("photo");
    img.src = event.target.result;
  }
});
$("#photo_remove_button").click(function() {
  document.getElementById('photo').src = "";
});
$("#num").keyup(function() {
  JsBarcode("#barcode", document.getElementById('num').value, {
    height: 70
  });
});
$("#namei").keyup(function() {
  document.getElementById('name').innerHTML = document.getElementById('namei').value;
});

function formatDate(value) {
  return value.getDate() + " - " + value.getMonth() + 1 + " - " + value.getFullYear();
}
$("#dobi").keyup(function() {
  var d = new Date(document.getElementById('dobi').value);
  document.getElementById('dob').innerHTML = "DOB: " + formatDate(d);
});
$("#address1i").keyup(function() {
  document.getElementById('address1').innerHTML = document.getElementById('address1i').value;
});
$("#address2i").keyup(function() {
  document.getElementById('address2').innerHTML = document.getElementById('address2i').value;
});
$("#address3i").keyup(function() {
  document.getElementById('address3').innerHTML = document.getElementById('address3i').value;
});
$("#address4i").keyup(function() {
  document.getElementById('address4').innerHTML = document.getElementById('address4i').value;
});
$("#address5i").keyup(function() {
  document.getElementById('address5').innerHTML = document.getElementById('address5i').value;
});
$("#noki").keyup(function() {
  document.getElementById('nok').innerHTML = document.getElementById('noki').value;
});
$("#teli").keyup(function() {
  document.getElementById('tel').innerHTML = document.getElementById('teli').value;
});

$("#clear").click(function() {
  JsBarcode("#barcode", "0", {
    height: 70
  });
  document.getElementById('photo').src = "";
  document.getElementById('barcode').innerHTML = "";
  document.getElementById('dob').innerHTML = "";
  var x = document.getElementsByClassName("form-control");
  for (i = 0; i < x.length; i++) {
    x[i].value = "";
  }
  var y = document.getElementsByClassName("label");
  for (i = 0; i < y.length; i++) {
    y[i].innerHTML = "";
  }
});

//backscript
$("#drug").change(function() {
  document.getElementById('drugtext').innerHTML = document.getElementById('drug').value;
});
$("#condition1").change(function() {
  document.getElementById('condition1text').innerHTML = document.getElementById('condition1').value;
});
$("#condition2").change(function() {
  document.getElementById('condition2text').innerHTML = document.getElementById('condition2').value;
});
$("#range").change(function() {
  document.getElementById('rangetext').innerHTML = document.getElementById('range').value;
});
$("#startdate").keyup(function() {
  var d = new Date(document.getElementById('startdate').value);
  document.getElementById('starttext').innerHTML = formatDate(d);
});
$("#inputduration").change(function() {
  document.getElementById('durationtext').innerHTML = document.getElementById('inputduration').value;
});
