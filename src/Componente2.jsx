import React from 'react';
function Limachi(props)
{
  return(
    <div className="caja1" >
      <div className="texto" >
      <h1>Lista: {props.nom} </h1>
      <p> Origen: {props.org}</p>
      <p></p>
      </div>

    </div>
  );
}

export default Limachi;