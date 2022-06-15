import React from 'react';
import "./service.css";
import { useNavigate } from "react-router-dom";

const Service = ({service}) => {
    const {id, name, img, description, price} = service;
  
    const navigate = useNavigate();

    const handleNavigateToServiceDetail = id => {
        navigate(`/service/${id}`);
    }

    return (
        <div className='service'>
            <img src={img} alt="" />
            <h2> {name}</h2>
            <p>Price: {price}</p>
            <p><small>{description}</small></p>
            <button onClick={() => handleNavigateToServiceDetail(id)} className='btn btn-primary'>Book: {name}</button>
        </div>
    );
};

export default Service;