// Import stylesheets
import './myBooking.css';
import 'bootstrap';
import ('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css');

import ('https://fonts.googleapis.com/css2?family=Roboto&display=swap');


// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = ` <!-- Home -->
<html>

<body>

  <section>
    <div id="home-cover">
      <div id="home-content-box">
        <div id="home-content-box-inner"  class="text-center">
             <div id="home-heading">
              <h3>Fly with us at<br> cheap price</h3>
            </div>
         <div id="home-btn">
              <a class="btn btn-lg btn-general btn-white" href="#work" role="button">
             View our Work</a>
            </div>

      <div class="box-form text-center">
            <form>
  <div class="form-row align-items-center">
    <div class="col-auto">
      <label class="sr-only" for="inlineFormInput">Name</label>
      <input type="text" class="form-control mb-2" id="inlineFormInput" placeholder="From:">
    </div>

     <div class="col-auto">
      <label class="sr-only" for="inlineFormInput">Name</label>
      <input type="text" class="form-control mb-2" id="inlineFormInput" placeholder="To:">
    </div>
    <div class="dropdown show">
  <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
   Economy
  </a>

  <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <a class="dropdown-item" href="#">Premium Economy</a>
    <a class="dropdown-item" href="#">Business</a>
    <a class="dropdown-item" href="#">First</a>
     <a class="dropdown-item" href="#">Multiple</a>
  </div>
</div>
    <div class="col-auto">
      <button type="submit" class="btn btn-primary mb-2">Search</button>
    </div>
  </div>
</form>
        </div>
          </div>
    </div>
    </div>  
  </section>

  <section id ="work">
  <div class="content-box text-center">
   <div class="content-title">
   <h3>Top destinations</h3>
   <h4>Find the best price on flights to our most popular destinations from airports across South Africa.</h4>
  </div>
  
   </div>

<div class="row">
  <div class="col-6 col-md-4">
  <div class="img-wrapper">
   <img src="https://cdn.filestackcontent.com/vtrIjdQ9R6exbmk2SaTq" class="img-responsive" alt="team-member" width="350" height="150">
  </div>
     <div class="destination text-center" >
       <h2>Cape Town <span>Flight from<br>R1 749<h2>
     </div>
  </div>
  <div class="col-6 col-md-4"><div class="img-wrapper">
    <img src="https://www.seabourn.com/content/dam/sbn/inventory-assets/ports/DUR/Durban-South-Africa.jpg.image.750.563.low.jpg" class="img-responsive" alt="team-member" width="350" height="150">
  </div> 

</div>
  <div class="col-6 col-md-4">
  <div class="img-wrapper">
    <img src="https://media.gettyimages.com/photos/london-big-ben-and-traffic-on-westminster-bridge-picture-id174726708?s=612x612" class="img-responsive" alt="team-member" width="350" height="150">
    
  </div>
</div>
  </section>
  </body>
  </html>`;