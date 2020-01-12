import React from 'react';
import '../../styling/customDash.css';

export default class CustomDataDash extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataTitles: [
                { title: 'RPM', units: 'RPM' },
                { title: 'Air To Fuel', units: '' },
                { title: 'Manifold Air Pressure', units: 'kPa' },
                { title: 'Throttle Position', units: '%' },
                { title: 'Engine Temperature', units: '˚C' },
                { title: 'Oil Temperature', units: '˚C' },
                { title: 'Fuel Temperature', units: '˚C' },
                { title: 'Intake Air Temperature', units: '˚C' },
                { title: 'Oil Pressure', units: 'kPa' },
                { title: 'Barometer', units: 'kPa' },
                { title: 'Injector Pulse Width', units: 'seconds' },
                { title: 'Suspension', units: 'mm' },
                { title: 'Acceleration', units: 'g' },
                { title: 'Roll', units: '˚' },
                { title: 'Pitch', units: '˚' },
                { title: 'Yaw', units: '˚' },
                { title: 'Speed', units: 'km/h' },
                { title: 'Distance', units: 'km' },
                { title: 'Track Map', units: '' }]
        }
    }
}