import React from 'react';
import './index.css';
const Footer=()=>{
    const year=new Date().getFullYear()
    return(
        <>
        <footer>
            <p>Copyright © {year} <a href='http://newswebsite.unaux.com/news-site/'>Created By Salman Khan</a></p>
            {/* <p>Created By Salman Khan</p> */}
        </footer>
        </>

    );
}
export default Footer;