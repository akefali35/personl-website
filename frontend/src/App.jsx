import React from 'react'
import FloatingLines from './FloatingLines'
import porfilelmg from './public/IMG_3131.JPG'
import { FaGithub, FaLinkedin, FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa';
const App = () => {
  return (
    <div className='w-full h-screen relative bg-black flex justify-center items-center'>
<div style={{ width: '100%', height: '700px', position: 'relative' }}>
  <FloatingLines 
    enabledWaves={["top","middle","bottom"]}
    // Array - specify line count per wave; Number - same count for all waves
    lineCount={5}
    // Array - specify line distance per wave; Number - same distance for all waves
    lineDistance={5}
    bendRadius={5}
    bendStrength={-0.5}
    interactive={true}
    parallax={true}
  />
</div>
    <div className='absolute flex flex-col justify-center items-center gap-4'>
  <div className="container">
      <h1 className="text-4xl font-bold name" style={{color:'#38bdf8'}}>akef ali</h1>
 <img 
  src={porfilelmg} 
  alt="Profile" 
  className="profile-image"
/>

  <h1 className="text-xl font-bold text-gray-200 ">
    Computer Science Student | Backend Developer
  </h1>

 <a className="box" href="https://github.com/akefali35" target="_blank" rel="noreferrer">
    <FaGithub style={{color : '#ffffff'}} /> GitHub
  </a>
  <a className="box" href="https://www.linkedin.com/in/akef-ali-70449a378?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank" rel="noreferrer">
    <FaLinkedin style={{color : '#0077b5'}} /> LinkedIn
  </a>

  <a className="box" href="https://wa.me/970566824050">
    <FaWhatsapp style={{color : '#25D366'}} /> WhatsApp
  </a>

  <a className="box" href="https://www.instagram.com/akefalii?igsh=MTlvcmR0Zjc2bXF0OQ%3D%3D&utm_source=qr" target="_blank" rel="noreferrer">
    <FaInstagram style={{color : '#E4405F'}} /> Instagram
  </a>

  <a className="box" href="https://www.tiktok.com/@akef_ali?_r=1&_t=ZS-94b8cb194kv" target="_blank" rel="noreferrer">
    <FaTiktok style={{color : '#ffffff'}} /> TikTok
  </a>
</div>
    </div>
    </div>
  )
}


export default App
//Component inspired by Kevin Levron:
//https://x.com/soju22/status/1858925191671271801
  


