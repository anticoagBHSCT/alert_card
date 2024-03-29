//pagination scripts
$(document).ready(function(){
  $('#second').hide();
  $('#doacdrug').hide();
  $('#doaccondition1').hide();
  $('#doaccondition2').hide();
});
$("#front_link").click(function(){
  $('#first').toggle();
  $('#second').hide();
});

$("#back_link").click(function(){
  $('#first').hide();
  $('#second').toggle();
});

var random_image = function() 
{
  var x = Math.round(Math.random());
  if(x==1){
    var img = document.getElementById("photo");
    img.src = "male.jpg"
  } else {
    var img = document.getElementById("photo");
    img.src = "female.jpg"
  }
};

$('#copy').click(function(){
html2canvas(document.querySelector("#front")).then(canvas => {
  canvas.toBlob(blob => navigator.clipboard.write([new ClipboardItem({'image/png': blob})]))
});
});

$('#copy_back').click(function(){
  html2canvas(document.querySelector("#back")).then(canvas => {
    canvas.toBlob(blob => navigator.clipboard.write([new ClipboardItem({'image/png': blob})]))
  });
  });
  
$('#pdf').click(function(){
 $('#first').show();
 $('#second').hide();
    var doc = new jsPDF();
    doc.setProperties({
      title: 'Digital Anticoagulant Alert Card',
      subject: 'Please contact AntiCoagClinic@belfasttrust.hscni.net for queries concerning this document',
      author: 'Anticoagulant Service, Belfast Health and Social Care Trust',
      keywords: 'alert, anticoagulant, card, safety, warfarin',
      creator: 'Brian Proctor'
    }); 
    doc.setDrawColor(0, 0, 255);
    doc.setTextColor(0);
    doc.setFontSize(12);
    doc.rect(2, 2, 206, 290);
    doc.link(105, 195, 95, 30, {url: 'https://anticoagbhsct.github.io/alert_card/warfarin_info_book.pdf'});
    doc.link(95, 230, 50, 35, {url: 'tel:00442896152221'});
    doc.link(145, 230, 50, 40, {url: 'mailto:AntiCoagClinic@belfasttrust.hscni.net'});
    doc.text("Digital Anticoagulant Alert Card", 5, 275); 
    doc.text("The Anticoagulant Service can be contacted on", 5, 285);
    doc.setTextColor(0, 0, 255); 
    doc.textWithLink('(00)+442896152221', 95, 285, {url: 'tel:00442896152221'});
    doc.setTextColor(0);
    doc.text("or email the service using this email address", 5, 290); 
    doc.setTextColor(0, 0, 255);
    doc.textWithLink('AntiCoagClinic@belfasttrust.hscni.net', 95, 290, {url: 'mailto:AntiCoagClinic@belfasttrust.hscni.net'});
    var logo = new Image();
    logo.src = 'BHSCT_Logo.png';
    doc.addImage(logo, 'png', 168, 278);
    
   html2canvas(document.querySelector("#front")).then(canvas => {
    doc.addImage(canvas, "PNG", 5, 10, 201, 126, "front");  
    });
  $('#first').hide();
  $('#second').show();
  html2canvas(document.querySelector("#back")).then(canvas => {
    doc.addImage(canvas, "PNG", 5, 145, 201, 126, "back");  
    doc.save("Digital Alert Card.pdf");
  });
$('#first').show();
$('#second').hide();
});
  
//scripts for doac to vka
var clear =function(){
document.getElementById('rangetext').innerText="";
document.getElementById('durationtext').innerText="";
document.getElementById('condition1text').innerText="";
document.getElementById('condition2text').innerText="";
};

$('#doac').click(function(){
document.getElementById('front').style.backgroundImage = "url(doac_front.png)";
document.getElementById('back').style.backgroundImage = "url(doac_back.png)";
document.getElementById('drugtext').innerText = "";
document.getElementById('starttext').style.marginTop="280px";
$('#condition1').hide();
$('#condition2').hide();
$('#doaccondition1').show();
$('#doaccondition2').show();
$('#range').hide();
$('#vkadrug').hide();
$('#doacdrug').show();
clear();
 });

 $('#vka').click(function(){
  document.getElementById('front').style.backgroundImage = "url(war_front.png)";
  document.getElementById('back').style.backgroundImage = "url(war_back.png)";
  document.getElementById('drugtext').innerText = "WARFARIN";
  document.getElementById('starttext').style.marginTop="335px";
  $('#doaccondition1').hide();
  $('#doaccondition2').hide();
  $('#condition1').show();
  $('#condition2').show();
  $('#range').show();
  $('#doacdrug').hide();
  $('#vkadrug').show();
  clear();
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
random_image();
});
$("#num").keyup(function() {
  JsBarcode("#barcode", document.getElementById('num').value, {
    height: 100, width: 4.5, fontOptions: "bold", fontSize: 35, textMargin: -7, margin: 0, textAlign: "right"
  });
var svg = $("#barcode")[0];
var xml = new XMLSerializer().serializeToString(svg);
var base64 = 'data:image/svg+xml;base64,' + btoa(xml);
var img = $("#image")[0];
img.src = base64;
});


$("#namei").keyup(function() {
  document.getElementById('name').innerHTML = document.getElementById('namei').value;
});

$("#dobi").keyup(function() {
    document.getElementById('dob').innerHTML = "DOB: "+document.getElementById('dobi').value;
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
  random_image();
  document.getElementById('barcode').innerHTML = "";
  document.getElementById('image').src = "";
  document.getElementById('dob').innerHTML = "";
  document.getElementById('rangetext').innerText="";
  document.getElementById('starttext').innerText="";
  document.getElementById('durationtext').innerText="";
  document.getElementById('condition1text').innerText="";
  document.getElementById('condition2text').innerText="";
  x = document.getElementsByTagName('input');
  for (i=0;i <x.length; i++){
    x[i].value="";
  }
  var y = document.getElementsByClassName("label");
  for (i = 0; i < y.length; i++) {
    y[i].innerHTML = "";
  }
});

//backscript
$("#vkadrug").change(function() {
  document.getElementById('drugtext').innerHTML = document.getElementById('vkadrug').value;
});
$("#doacdrug").change(function() {
  document.getElementById('drugtext').innerHTML = document.getElementById('doacdrug').value;
});
$("#condition1").change(function() {
  document.getElementById('condition1text').innerHTML = document.getElementById('condition1').value;
});
$("#condition2").change(function() {
  document.getElementById('condition2text').innerHTML = document.getElementById('condition2').value;
});
$("#doaccondition1").change(function() {
  document.getElementById('condition1text').innerHTML = document.getElementById('doaccondition1').value;
});
$("#doaccondition2").change(function() {
  document.getElementById('condition2text').innerHTML = document.getElementById('doaccondition2').value;
});

$("#range").change(function() {
  document.getElementById('rangetext').innerHTML = document.getElementById('range').value;
});
$("#startdate").change(function() {
  // var d = new Date(document.getElementById('startdate').value);
  // document.getElementById('starttext').innerHTML = formatDate(d);
  document.getElementById('starttext').innerHTML = document.getElementById('startdate').value;
});
$("#inputduration").change(function() {
  document.getElementById('durationtext').innerHTML = document.getElementById('inputduration').value;
});
