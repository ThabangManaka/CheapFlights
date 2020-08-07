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
          </div>
    </div>
    </div>  
  </section>
  </body>
  </html>`;