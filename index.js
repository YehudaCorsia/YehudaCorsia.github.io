<!DOCTYPE html>
<html>
<title>W3.CSS Template</title>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<body>

<!-- Navbar (sit on top) -->
<div class="w3-top">
  <div class="w3-bar w3-white w3-wide w3-padding w3-card">
    <a href="#home" class="w3-bar-item w3-button"><b>Sinun</b> 4 u</a>
    <!-- Float links to the right. Hide them on small screens -->
    <div class="w3-right w3-hide-small">
      <a href="#projects" class="w3-bar-item w3-button">Projects</a>
      <a href="#about" class="w3-bar-item w3-button">About</a>
      <a href="#contact" class="w3-bar-item w3-button">Contact</a>
    </div>
  </div>
</div>

<!-- Header -->
<header class="w3-display-container w3-content w3-wide" style="max-width:1500px;" id="home">
  
  <div class="w3-display-middle w3-margin-top w3-center">
    <h1 class="w3-xxlarge w3-text-white"><span class="w3-padding w3-black w3-opacity-min"><b>Sinun</b></span> <span class="w3-hide-small w3-text-light-grey">4 u</span></h1>
  </div>
</header>
<style>

    .img_cover{
        background: url('./1.jpg') no-repeat center center fixed; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
    background-size: cover; 
    height:300px;
    max-height: 300px;
    background-position: bottom;
    }
    #img1
    {
      max-width: 100%;
      max-height: 100%;
      
    }
</style> 
<img src="./1.jpg" id="img1"/>
<!--  <div style="width:100%;" class="img_cover"></div>

Page content -->
<div class="w3-content w3-padding" style="max-width:1564px">



 

  <!-- Contact Section -->
  <div class="w3-container w3-padding-32" id="contact">
    <h3 class="w3-border-bottom w3-border-light-grey w3-padding-16">Filter your content</h3>
    <p>Enter the URL to check</p>
    <div style="margin: 0 auto; text-align: center">
      <input class="w3-input w3-border" type="text" placeholder="paste url" required name="Name" id="inpt">
      <!-- <input class="w3-input w3-section w3-border" type="text" placeholder="Email" required name="Email">
      <input class="w3-input w3-section w3-border" type="text" placeholder="Subject" required name="Subject">
      <input class="w3-input w3-section w3-border" type="text" placeholder="Comment" required name="Comment"> -->
      <button class="w3-button w3-black w3-section" type="button" id="sbmt_btn">
        <i class="fa fa-paper-plane"></i> CHECK URL
      </button>
    </div>
  </div>
  
<!-- End page content -->
</div>

<!-- Google Map -->
<!-- <div id="googleMap" class="w3-grayscale" style="width:100%;height:450px;"></div> -->

<!-- Footer -->
<footer class="w3-center w3-black w3-padding-16" style="position: absolute; bottom: 0; width: 100%;">
  <p>Powered by <a href="" title="W3.CSS" target="_blank" class="w3-hover-text-green">Hackathon winners</a></p>
</footer>


<script src="https://code.jquery.com/jquery-3.3.1.js"></script>
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@7.26.11/dist/sweetalert2.all.min.js"></script>
<script>

$("#sbmt_btn").on('click',function(){
    var a = $("#inpt").val();
    var b = 'https://openwhisk.eu-gb.bluemix.net/api/v1/web/Yehudacorsia%40gmail.com_dev/default/RSZ.json?url=' + a;
  
  
var d;

    $.ajax({
    type: "GET",
    dataType: "json",
    url: b,
    complete: function(data) {
        //console.log();
        var c = $.parseJSON(data.responseText);
        d = c.website_is_ok;
        if (d == true)
{
    swal({
  title: 'Approved',
  text: 'This site is safe. You are now being transferred',
  type: 'success',
  confirmButtonText: 'OK'
}).then((result) => {
 window.location = a;
})
}
else if (d == false)
{
    swal({
  title: 'Disapproved',
  text: 'Stay away from this site',
  type: 'error',
  confirmButtonText: 'OK'
})
}
    }
});



});

</script>
</body>
</html>
