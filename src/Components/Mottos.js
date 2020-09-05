import React, { Component } from 'react';

class Mottos extends Component {
  render() {

    if(this.props.data){
      var mottos = this.props.data.mottos.map(function(mottos){
        return  <li key={mottos.user}>
            <blockquote>
               <p>{mottos.text}</p>
               <cite>{mottos.user}</cite>
            </blockquote>
         </li>
      })
    }

    return (
      <section id="mottos">
      <div className="text-container">
         <div className="row">

            <div className="two columns header-col">
               <h1><span>Client Mottos</span></h1>
            </div>

            <div className="ten columns flex-container">
                  <ul className="slides">
                      {mottos}
                  </ul>
               </div>
            </div>
         </div>
   </section>
    );
  }
}

export default Mottos;
