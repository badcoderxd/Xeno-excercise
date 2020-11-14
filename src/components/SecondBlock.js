import React from 'react';
import '../App.css';
import BarchartSmall from '../charts/barchartSmall';
import PieChart from '../charts/PieChart';


function SecondBlock() {
  return (
    <>
      <div className="auther-sales">
       
       <div className="sales-holder">

       <div class="one">
       <div class="sales-holder-one">
        <p className="sec-one-h">ANNOUNCEMENT</p>
        <p>...</p>
     </div>
     <p className="sec-b-ht">Incredebly positive response</p>
     <p className="sec-b-para">We worked on Chartify as a side-project (remotely between Dublin and Berlin) 
     </p>
    <div class="sales-holder-two">
        <div className="cmt">17 NOV,2020</div>
        <div>
              <p className="view-btn">VIEW</p>
        </div>
    </div>
   </div>

   <div class="one">
       <div class="sales-holder-one">
        <p className="sec-one-h">PROJECTS</p>
        <p>...</p>
     </div>
     <p className="sec-b-ht">First MileStone Achievement</p>
     <p className="sec-b-para">We worked on Chartify as a side-project (remotely between Dublin and Berlin) 
     </p>
    <div class="sales-holder-two">
        <div className="sec-b-para">progress</div>
        <div>
        <p className="f-per">50%</p>
        </div>
    </div>
    <div id="progressbar">
  <div></div>
</div>
   </div>

   <div class="one">
       <div class="sales-holder-one">
        <p className="sec-one-h">TODAY'S SHEDULE</p>
        <p>...</p>
     </div>
     <p className="sec-b-ht">UI/UX Design Updates</p>
     <p className="sec-b-para-bl">11:15AM - 12:30PM
     </p>
    <div class="sales-holder-two">
        <div className="sec-b-para">Manhatten-Newyork</div>
        <div>
        <p className="view-btn">VIEW MAP</p>
        </div>
    </div>
   </div>

       </div>

      </div>
    </>
  );
}

export default SecondBlock;