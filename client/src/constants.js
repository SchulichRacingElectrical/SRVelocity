const constGraphTitles =  [
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
    { title: 'Distance', units: 'm' },
    { title: 'Track Map', units: '' }]

const constDataTitles = 
    {rpm: ['RPM'],
    atf: ['Air To Fuel'],
    map: ['Manifold Air Pressure', '(kPa)'],
    tp: ['Throttle Position', '(%)'],
    engineTemp: ['Engine Temperature','(˚C)'],
    oilTemp: ['Oil Temperature','(˚C)' ],
    fuelTemp: ['Fuel Temperature', '(˚C)'],
    iat: ['Intake Air Temperature', '(˚C)'],
    oilPres: ['Oil Pressure', '(kPa)'],
    baro: ['Barometer', '(kPa)'],
    ipw: ['Injector Pulse Width', '(s)'],
    voltage: ['Battery Voltage', '(V)'],
    fl: ['Suspension','(mm)', [2]],
    fr: ['Suspension','(mm)',[3]],
    rl: ['Suspension','(mm)',[0]],
    rr: ['Suspension','(mm)',[1]],
    x: ['Acceleration', '(g)', [0]],
    y: ['Acceleration','(g)',[1]],
    z: ['Acceleration','(g)',[2]],
    roll: ['Roll', '(˚)'],
    pitch: ['Pitch', '(˚)'],
    yaw: ['Yaw', '(˚)'],
    speed: ['Speed', '(km/h)'],
    distance: ['Distance', '(km)']}

export {constGraphTitles, constDataTitles}


