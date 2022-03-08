import React from 'react';
import Header from './Header';
import Deck from './components/Deck.js';
import Middle from './Middle'; 
/*import Timer from '.components/Timer.js';*/

import Footer from './Footer';



function App(){  
  return (
    <div>

      <Header />
      
     
      <Deck />

    
       <Middle />     
      <Footer />
        
    
    </div>
  );
}

export default App;
