import React from 'react';
import '../App.css';
import AreaCharts from '../charts/AreaCharts';
import BarchartSmall from '../charts/barchartSmall';
import PieChart from '../charts/PieChart';


function firstBlock() {
  return (
    <>
      <div className="auther-sales">
       
       <div className="sales-holder">

       <div class="one">
       <div class="sales-holder-one">
        <p className="sec-one-h">Author Sales</p>
        <p>...</p>
     </div>
  
    <div class="sales-holder-two">
        <div className="bk-grd">64M</div>
        <div>
              <BarchartSmall/>
        </div>
    </div>
   </div>

   <div class="one">
       <div class="sales-holder-one">
        <p className="sec-one-h">Technologies</p>
        <p>...</p>
     </div>
  
    <div class="sales-holder-two">
        <div className="bk-grd">93M</div>
        <div>
              <PieChart/>
        </div>
    </div>
   </div>

   <div class="one">
       <div class="sales-holder-one">
        <p className="sec-one-h">Total Orders</p>
        <p>...</p>
     </div>
  
    <div class="sales-holder-two">
        <div className="bk-grd">17M</div>
        <div>
        <AreaCharts/>
        </div>
    </div>
   </div>

       </div>

      </div>
    </>
  );
}

export default firstBlock;