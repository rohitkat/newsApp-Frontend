import React,{FC} from "react";
import { Link } from 'react-router'
import {NewsType} from '../types/newsType'


const NewsCard: React.FC<NewsType> = ({
  designType = 'updown',
  backgroundColor = '#ffffff',
  color = '#000000',
  textOnTop = false,
  edges = 'rounded',
  fontStyle = 'normal'
})=> {
  
  return (
    <div className="col p-2" style={designType === 'fullLength' ? {height:'100%'} : {}}>
      <div className="card" style={{
                                    ...(designType === 'fullLength' ? {height:'93%'} : {}),
                                    ...({backgroundColor : backgroundColor})
      }} >
        <img src={process.env.PUBLIC_URL + '/images/news-sports.webp'} className="card-img-top" alt="..." />
        <div className={textOnTop ?"card-img-overlay":"card-body"} style={{
                              ...(fontStyle === 'largeHighlight' ? { fontSize: '25px', color:'white' } : {}),
                              ...(textOnTop ? { marginTop: '40%' } : {})
        }} >
          <strong className="primary"><Link to='/'>Sports</Link></strong>
          <p className="card-text" style={textOnTop?{color:'#edf0f3'}:{}}>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    </div>
  );
}

export default NewsCard;
