//components/Footer.jsx
import React from 'react'
import Badge from 'react-bootstrap/Badge';

const Footer = (props) => {

    const {nombreFooter, email}=props;

    return (
        <div className='p-2 text-center'>
                    <a href={email}><Badge bg="secondary">{nombreFooter}</Badge></a>
        </div>
    );
};

export default Footer;