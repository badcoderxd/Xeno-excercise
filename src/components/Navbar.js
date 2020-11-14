import React from 'react';

function Navbar() {
  return (
    <>
     <div className="navbar-holder">
            <div className="navbar-left">
                <div className="tfx"><span className="view-btn">Progress</span></div>
                <div className="tfx">Report</div>
                <div className="tfx">Apps</div>
            </div>
            <div className="navbar-right">
                <div className="tfx"><i class="fa fa-search" aria-hidden="true"></i></div>
                <div className="tfx"><i class="fa fa-bell" aria-hidden="true"></i></div>
                <div className="tfx"><i class="fa fa-cog" aria-hidden="true"></i></div>
                <div className="tfx"><i class="fa fa-flag" aria-hidden="true"></i></div>
                <div className="tfx"><i class="fa fa-user-circle" aria-hidden="true"></i> Hi,User</div>
            </div>
        </div>
    </>
  );
}

export default Navbar;



