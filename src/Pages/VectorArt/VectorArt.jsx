import React,{ useEffect } from 'react' 
import './VectorArt.scss'
const VectorArt = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='vector'>VectorArt</div>
  )
}

export default VectorArt