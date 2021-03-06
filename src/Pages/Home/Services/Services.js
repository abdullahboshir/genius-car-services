import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import "./services.css"


const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("services.json")
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    return (
        <div id='services' className='mt-5 container' >
            <h1 className='services-title'> Our Services</h1>
            <div className='services-container'>
                {services.map(service => <Service
                    key={service.id}
                    service={service}
                />)}
            </div>
        </div>
    );
};

export default Services;