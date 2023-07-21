import React from 'react';
import twitter from '../Images/twitter.png'
import linkedin from '../Images/linkedin.png'
import instagram from '../Images/instagram.png'

// social link must be change project by project
const SocialLink = () => {
    return (
        <>
        <a href="#" target="_blank"><img src={linkedin} className='social' /></a>
        <a href="#" target="_blank"><img src={twitter} className='social'  /></a>
        <a href="#" target="_blank"><img src={instagram} className='social'/></a>
        </>
    );
};

export default SocialLink;