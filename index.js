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

  <header>
<nav class="navbar flight-top-nav navbar-fixed-top navbar-expand-lg navbar-dark bg-dark">
   <div class="nav-header">


  <a class="navbar-brand" href="#">FLY CHEAP</a>
   </div>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Flights<span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Hotels</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Login</a>
      </li>
   
    </ul>
  </div>
</nav>
 </header>

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
   <img src="https://cdn.filestackcontent.com/vtrIjdQ9R6exbmk2SaTq" class="img-responsive" alt="team-member" width="370" height="150">
  </div>
     <div class="destination text-center" >
       <h2>Cape Town <span>Flight from<br>R1 749<h2>
     </div>
  </div>
  <div class="col-6 col-md-4"><div class="img-wrapper">
    <img src="https://www.seabourn.com/content/dam/sbn/inventory-assets/ports/DUR/Durban-South-Africa.jpg.image.750.563.low.jpg" class="img-responsive" alt="team-member" width="370" height="150">
  </div> 
  <div class="destination text-center" >
       <h2>Durban <span>Flight from<br>R1 001<h2>
     </div>
</div>
  <div class="col-6 col-md-4">
  <div class="img-wrapper">
    <img src="https://media.gettyimages.com/photos/london-big-ben-and-traffic-on-westminster-bridge-picture-id174726708?s=612x612" class="img-responsive" alt="team-member" width="370" height="150">
    
  </div>
    <div class="destination text-center" >
       <h2>London <span>Flight from<br>R9 258<h2>
     </div>
</div>
  </section>

  <section id="popular">
     <div class="popular_destination">
                          <div class="unHeaderGrid text-center">
                          <h3 class="col-header">
        
                              Popular Destinations
                              </h3>
                              <span class="col-subheader">Search for the cheapest flights to any airport anywhere in the world and we'll help you find the best deals available.</span>
                          </div>

                     <div class="dynamic-links">
                        <div class="container">
                            <div class="row" >
                        <div class="col-md-3">
                                 <div class="popularMapRoutes">
                              <ul class="popular-list">
                        <li class="col-link">
                        <a href="https://www.cheapflights.co.za/flights-to-Amsterdam/" data-href="">
                        <span class="image "></span>
                        <span class="linkText">Amsterdam</span>
                        </a>
                        </li>
                        <li class="col-link">
                        <a href="https://www.cheapflights.co.za/flights-to-Bali/" data-href="">
                        <span class="image "></span>
                        <span class="linkText">Bali</span>
                        </a>
                        </li>
                        <li class="col-link">
                        <a href="https://www.cheapflights.co.za/flights-to-Bangkok/" data-href="">
                        <span class="image "></span>
                        <span class="linkText">Bangkok</span>
                        </a>
                        </li>
                        <li class="col-link">
                        <a href="https://www.cheapflights.co.za/flights-to-Bloemfontein/" data-href="">
                        <span class="image "></span>
                        <span class="linkText">Bloemfontein</span>
                        </a>
                        </li>
                        <li class="col-link">
                        <a href="https://www.cheapflights.co.za/flights-to-Cape-Town/" data-href="">
                        <span class="image "></span>
                        <span class="linkText">Cape Town</span>
                        </a>
                        </li>
                        <li class="col-link">
                        <a href="https://www.cheapflights.co.za/flights-to-Dubai/" data-href="">
                        <span class="image "></span>
                        <span class="linkText">Dubai</span>
                        </a>
                        </li>
                        <li class="col-link">
                        <a href="https://www.cheapflights.co.za/flights-to-Dublin/" data-href="">
                        <span class="image "></span>
                        <span class="linkText">Dublin</span>
                        </a>
                        </li>
                        <li class="col-link">
                        <a href="https://www.cheapflights.co.za/flights-to-Durban/" data-href="">
                        <span class="image "></span>
                        <span class="linkText">Durban</span>
                        </a>
                        </li>
                    </ul>
                </div>
            </div>
                             
                     <div class="col-md-3">
                      <ul class="popular-list">
                        
                            <li class="col-link">
                            <a href="https://www.cheapflights.co.za/flights-to-East-London/" data-href="">
                            <span class="image "></span>
                            <span class="linkText">East London</span>
                            </a>
                            </li>
                            <li class="col-link">
                            <a href="https://www.cheapflights.co.za/flights-to-George/" data-href="">
                            <span class="image "></span>
                            <span class="linkText">George</span>
                            </a>
                            </li>
                            <li class="col-link">
                            <a href="https://www.cheapflights.co.za/flights-to-Harare/" data-href="">
                            <span class="image "></span>
                            <span class="linkText">Harare</span>
                            </a>
                            </li>
                            <li class="col-link">
                            <a href="https://www.cheapflights.co.za/flights-to-Hong-Kong/" data-href="">
                            <span class="image "></span>
                            <span class="linkText">Hong Kong</span>
                            </a>
                            </li>
                            <li class="col-link">
                            <a href="https://www.cheapflights.co.za/flights-to-Johannesburg/" data-href="">
                            <span class="image "></span>
                            <span class="linkText">Johannesburg</span>
                            </a>
                            </li>
                            <li class="col-link">
                            <a href="https://www.cheapflights.co.za/flights-to-Kimberley/" data-href="">
                            <span class="image "></span>
                            <span class="linkText">Kimberley</span>
                            </a>
                            </li>
                            <li class="col-link">
                            <a href="https://www.cheapflights.co.za/flights-to-London/" data-href="">
                            <span class="image "></span>
                            <span class="linkText">London</span>
                            </a>
                            </li>
                            <li class="col-link">
                            <a href="https://www.cheapflights.co.za/flights-to-Madagascar/" data-href="">
                            <span class="image "></span>
                            <span class="linkText">Madagascar</span>
                            </a>
                            </li>

                      </ul>
                     </div>
                         <div class="col-md-3">
                             <ul class="popular-list">
                             <li class="col-link">
                                <a href="https://www.cheapflights.co.za/flights-to-Margate/" data-href="">
                                <span class="image "></span>
                                <span class="linkText">Margate</span>
                                </a>
                                </li>
                                <li class="col-link">
                                <a href="https://www.cheapflights.co.za/flights-to-Mauritius/" data-href="">
                                <span class="image "></span>
                                <span class="linkText">Mauritius</span>
                                </a>
                                </li>
                                <li class="col-link">
                                <a href="https://www.cheapflights.co.za/flights-to-Umtata/" data-href="">
                                <span class="image "></span>
                                <span class="linkText">Mthatha</span>
                                </a>
                                </li>
                                <li class="col-link">
                                <a href="https://www.cheapflights.co.za/flights-to-Nelspruit/" data-href="">
                                <span class="image "></span>
                                <span class="linkText">Nelspruit</span>
                                </a>
                                </li>
                                <li class="col-link">
                                <a href="https://www.cheapflights.co.za/flights-to-New-York/" data-href="">
                                <span class="image "></span>
                                <span class="linkText">New York</span>
                                </a>
                                </li>
                                <li class="col-link">
                                <a href="https://www.cheapflights.co.za/flights-to-Paris/" data-href="">
                                <span class="image "></span>
                                <span class="linkText">Paris</span>
                                </a>
                                </li>
                                <li class="col-link">
                                <a href="https://www.cheapflights.co.za/flights-to-Phuket/" data-href="">
                                <span class="image "></span>
                                <span class="linkText">Phuket</span>
                                </a>
                                </li>
                                <li class="col-link">
                                <a href="https://www.cheapflights.co.za/flights-to-Pietermaritzburg/" data-href="">
                                <span class="image "></span>
                                <span class="linkText">Pietermaritzburg</span>
                                </a>
                                </li>
                     
                                
                                    </ul>
                                </div>
                                <div class="col-md-3">
                                    <ul class="popular-list">
                                                 <li class="col-link">
                                <a href="https://www.cheapflights.co.za/flights-to-Plettenberg-Bay/" data-href="">
                                <span class="image "></span>
                                <span class="linkText">Plettenberg Bay</span>
                                </a>
                                </li>
                                <li class="col-link">
                                <a href="https://www.cheapflights.co.za/flights-to-Port-Elizabeth/" data-href="">
                                <span class="image "></span>
                                <span class="linkText">Port Elizabeth</span>
                                </a>
                                </li>
                                <li class="col-link">
                                <a href="https://www.cheapflights.co.za/flights-to-Richards-Bay/" data-href="">
                                <span class="image "></span>
                                <span class="linkText">Richards Bay</span>
                                </a>
                                </li>
                                <li class="col-link">
                                <a href="https://www.cheapflights.co.za/flights-to-Seychelles/" data-href="">
                                <span class="image "></span>
                                <span class="linkText">Seychelles</span>
                                </a>
                                </li>
                                <li class="col-link">
                                <a href="https://www.cheapflights.co.za/flights-to-Swaziland/" data-href="">
                                <span class="image "></span>
                                <span class="linkText">Swaziland</span>
                                </a>
                                </li>
                                <li class="col-link">
                                <a href="https://www.cheapflights.co.za/flights-to-Upington/" data-href="">
                                <span class="image "></span>
                                <span class="linkText">Upington</span>
                                </a>
                                </li>
                                <li class="col-link">
                                <a href="https://www.cheapflights.co.za/flights-to-Windhoek/" data-href="">
                                <span class="image "></span>
                                <span class="linkText">Windhoek</span>
                                </a>
                                </li>
                                <li class="col-link">
                                <a href="https://www.cheapflights.co.za/flights-to-Zanzibar/" data-href="">
                                <span class="image "></span>
                                <span class="linkText">Zanzibar</span>
                                </a>
                                </li>
                                    
                                    </ul>
                                </div>
                                 
                            </div> 
                            </div>
                          </div>
                      
              </div>
  </section>

  <section id="about">
     <div class="about">
         <div class="about-content text-center">
                          <h3 class="col-title ">About Cheap-flights</h3>
                          <span class="col-subheading">Search and compare cheap flights from 1000s of airlines, travel agents and travel sites.</span>
                          </div>
                   <div class="container about-me">
                            <div class="row">
                             <div class="col-md-4">
                            <div class="col-item who">
<div class="content-heading">
<h3 class="subtitle">Who are we?</h3>
</div>
<div class="text"><p>Cheapflights.co.za is your go-to site for flight bookings from South Africa.</p>
<p>We’re a team of passionate, savvy travellers on a mission to make it easy for you to find the cheapest domestic and international flights.</p>
<p>As one of the world’s largest flight comparison websites, Cheapflights is the starting point for your travel planning.</p></div>
</div>
                            </div> 
                                 <div class="col-md-4">
                            <div class="col-item how">
<div class="content-heading">
<h3 class="subtitle">How do we do it?</h3>
</div>
<div class="text"><p>Our innovative flight search, curated deals and inspirational content make it simple to find cheap flights from South Africa to anywhere.</p>
<p>We partner with hundreds of airlines and travel providers – all over South Africa and the world - to bring you the cheapest flights and personalised travel options.</p>
<p>We then link you directly to the airlines or travel agents to book your flights and open up new travel possibilities to see the world on a budget.</p></div>
</div>
                            </div>
                           <div class="col-md-4">
                           <div class="col-item why">
<div class="content-heading">
<h3 class="subtitle">Why come to us?</h3>
</div>
<div class="text"><p>Millions of travellers rely on us for trusted advice and the best selection of cheap flights and travel deals. Our service is completely free - we will not charge you a rand.</p>
<p>We have been serving up useful tips, destination information and travel inspiration since 1996.</p>
<p>We know South Africa, we know the world. We combine experience with local knowledge and our global network of partners to create amazing travel moments that matter.</p></div>
</div> 
                            </div>
                            </div>
                           </div>
     </div>
  <section>

  <footer class="my-footer">
             <div class="col  text-center">
<a href="/privacy" target="_self" data-test-footer-privacy-link="">Privacy</a>
<a href="/terms-of-use" target="_self" data-test-footer-terms-and-conditions-link="">Terms &amp; Conditions</a>
<span class="terms">©2020 Cheapflights</span>
</div>
   </footer>

  </body>
  </html>`;