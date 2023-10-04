import React from 'react'
import './WebsiteCard.css'
function WebsiteCard({name, img}) {
  return (
    <div className='website-card shadow rounded-4'>
        <div><img className='logo-img rounded-5' src={img} alt="" /></div>
        <div className="d-flex justify-content-center mb-2 fs-5">{name}</div>
    </div>
  )
}

export default WebsiteCard