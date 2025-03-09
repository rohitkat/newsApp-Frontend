import React from 'react'
import NewsCard from './NewsCard.tsx'

function NewsBanner() {
  return (
    <div className="row bg-primary bg-gradient">
    <div className="col-8">
      <strong style={{color:'white', fontSize:'25px'}}>in Focus.</strong>
      <NewsCard textOnTop={true} fontStyle='largeHighlight' />
    </div>
    <div className="col-4">
    <strong style={{color:'white', fontSize:'25px'}}>beyond news.</strong>
      <NewsCard  backgroundColor='yellow' designType='fullLength' />
    </div>
    <div className="col-12">
    <div className="row row-cols-md-3 row-cols-sm-1 g-4 mx-3">
    <NewsCard />
    <NewsCard />
    <NewsCard />
    
  </div>
    </div>
  </div>
  )
}

export default NewsBanner