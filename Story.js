import React from 'react';
function Story(props) {
    return (
        <div style={{"padding":"10px"}}>
          <img style={{"borderTopLeftRadius": '50% 50%', "borderTopRightRadius": '50% 50%',"borderBottomRightRadius": '50% 50%', "borderBottomLeftRadius": '50% 50%', "height": '100px', "width": '100px', "border": '3px solid rgb(236, 82, 108)'}} className="circular--square" src="/girl.jpg" />
  
          <h3 style={{"fontFamily": '"Lucida Sans", "Lucida Sans Regular", "Lucida Grande", "Lucida Sans Unicode", Geneva, Verdana, sans-serif', "fontSize": 'medium',"marginTop" : '10px', "alignItems": 'center', "marginLeft": '30px', "color": 'rgb(166, 163, 163)', "fontWeight": 200}}>
            {props.name}
          </h3>
        </div>
    );
  }
  
  export default Story;
  
