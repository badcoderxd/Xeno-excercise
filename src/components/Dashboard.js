import React from 'react';



function Dashboard() {
  return (
    <>
     <div className="dash-main">
      <div className="dash-holder">

       <div className="dash-left">

       <div className="dash-f">Dashboard</div>
       <div className="dash-s"><i class="fa fa-home" aria-hidden="true"></i> - dashboard -</div>
       <div className="dash-s">Navy aside</div>

       </div>
       <div className="dash-right">
           <div>Today Aug 20 <i class="fa fa-calendar" aria-hidden="true"></i></div>
       </div>
      </div>

     </div>
    </>
  );
}

export default Dashboard;
