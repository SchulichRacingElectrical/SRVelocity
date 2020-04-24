//FOR JAMES:

import React from 'react';

export default class VirtualDash extends React.Component {
    constructor(props) {
        super(props);
    }

    render = () => {
        return (
            <div id ='dashboard'>
                <p style={{textAlign: 'center', marginTop: '100px', fontSize: '20px'}}>
                    Digital Twin Dasboard
                </p>
                <p style={{textAlign: 'center', marginTop: '100px', fontSize: '20px'}}>
                    In Progress
                </p>
                <p style={{textAlign: 'center', marginTop: '100px', fontSize: '20px', margin: '40px'}}>
                    This dashboard will include a 3D model of the vehicle planted on a geospatial environment that is representative of the track. 
                    This model can be driven (for fun) and also be updated by real-time data. Maybe in the future we could put some lidar on the 
                    vehicle to track cones and what not!
                </p>
            </div>
        )
    }
}