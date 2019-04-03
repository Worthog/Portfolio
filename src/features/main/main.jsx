import React from 'react';
import './main_fallback.css';
import './main.css';
import Footer from '../home/Footer' ;

// -----   Lets change this to use CCSGrid  ----------------


const main = ({history}) => {
  return (
    
<div className='wrapper'>  

    <div className='item mainhero'>                    

      
    </div>


  <div className='mainsubtitle'>
  The Main Header  - the sub header...      
  </div>

  <div className="item mainpagetext1">
        <p>
            Reiki is an ancient Japanese healing technique that promotes
            stress reduction and relaxation.
            The name ‘Reiki’ is a Japanese word derived from: &nbsp; 
            Rei – Universal,   &nbsp;
            Ki – Life Force Energy &nbsp;
            While Reiki is spiritual in nature, it is not a religion.
            </p>
            <p>
            Everything in the universe is energy, that's all there is, and that energy vibrates at
            different frequencies.   Reiki is based on the belief that an unseen “life force energy” flows through us.
            A Reiki Practitioner is able to guide healing energy through the hands to where it is needed.             
            </p>                       
            <p>
            Reiki is a gentle, powerful, healing energy available to everyone.
            Anyone can learn to channel Reiki and use it for yourself, and others.
          </p>             
          <p >
            Reiki works holistically by balancing body, mind and spirit.
            It is a complementary therapy and works in harmony with all other forms of healing            
         </p>        
      </div>   
 
  {/* <div className='mainaside' >          
          <blockquote>“Everything in life is vibration.” - Albert Einstein </blockquote>
          <blockquote>“If you want to find the secrets of the universe, think in terms of energy, frequency, and vibration.” - Nikola Tesla </blockquote>
      </div> */}
  <Footer/> 
</div>

  );
};

export default main;
