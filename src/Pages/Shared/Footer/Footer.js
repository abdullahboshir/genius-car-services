import React from 'react';

const Footer = () => {
    const date = new Date().getFullYear()
    return (
        <footer className='text-center mt-5'>
            <p><small>Copyright &copy; {date}</small></p>
        </footer>
    );
};

export default Footer;