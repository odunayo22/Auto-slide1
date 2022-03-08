import React, { Component, Fragment, forwardRef } from 'react';
import { FaArrowCircleRight, FaArrowCircleLeft } from 'react-icons/fa'; 

import Card from './Card.js';



class Deck extends Component{
constructor(props) {
  super(props)

  this.state = {
     cards: [
        

         <Card image = 'img/image1.jpg' id="one" key ="one" />,
         <Card image = '/img/image2.jpg' id="two" key ="two" />,
         <Card image = '/img/image3.jpg' id="three" key ="three" />,
         
     ]
  }
}

componentDidMount(){
    this.number_of_cards_by_index = this.images.children.length - 1;
    this.middle_card_by_index = Math.floor(this.number_of_cards_by_index / 2);

    /****Responsive Code */
    let img_width_as_percentage = 50;
    //img_width_as_percentage = window.innerWidth < 768 ? 100 : img_width_as_percentage;
     


    this.new_width =
    /Android|webOS|iphone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? (img_width_as_percentage / 100) * window.screen.width:
    (img_width_as_percentage / 100) * window.innerWidth;

    this.view_port.style.width =`{this.new_width}px`;
    
    this.order_cards();

    window.addEventListener('resize', () => {
       let img_width_as_percentage = 50;  
        // img_width_as_percentage = window.innerWidth < 768 ? 100 :  img_width_as_percentage;;

    this.new_width =
    /Android|webOS|iphone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? (img_width_as_percentage / 100) * window.screen.width:
    (img_width_as_percentage / 100) * window.innerWidth;

    this.view_port.style.width =`${this.new_width}px`;    

    this.order_cards();

    })
}
/**
 * 
 */
/*** */
/**** */

order_cards = () => {
    const card_width = parseFloat(getComputedStyle(this.images.children[0]).width);
    let counter_for_right = 1,
        counter_for_left = this.middle_card_by_index;

        for (let i = 0; i < this.images.children.length; i++){
            this.images.children[i].style.transitionDuration = '0.0s';

            if (i < this.middle_card_by_index){
                this.images.children[i].style.left = `-${(counter_for_left * this.new_width) - (this.new_width / 2)}px`;
                counter_for_left--;
            } else if(i > this.middle_card_by_index){
                this.images.children[i].style.left = `${(counter_for_right * this.new_width) + (this.new_width / 2)}px`;
                counter_for_right++;
            }else{
                this.images.children[i].style.left = `${this.new_width / 2}px`;
                
            }
        }
        
}



render(){
    return(
        <Fragment>
            <div>
            <div ref={ref_id => this.nav_button_container = ref_id} className="nav_button_container">
            <FaArrowCircleLeft href={href_id => this.button_prev = href_id}   className='left-arrow'  />
             <FaArrowCircleRight className='right-arrow'  />
            </div>
            < div ref={ref_id => this.view_port = ref_id} className= "view_port" >
                <div ref={ref_id => this.images = ref_id} className="images_container">
                    {this.state.cards}
                </div>
            </div>
            
                </div>
                
        </Fragment>
        
    );
}
}




export default Deck;