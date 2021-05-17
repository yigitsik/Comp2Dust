import React from "react";



function TableRow(props)
{

console.log(props)

let id = props.id+1;
let statistics=props.parentProps.statistics;

return(

    
    <tr>
      <th scope="row">{id}</th>
      <td>{props.parentProps.imageArray.inputArray[props.id]}</td>
      <td>{statistics[props.id].algorithm}</td>
      <td>{statistics[props.id].size_in}</td>
      <td>{statistics[props.id].size_output}</td>
      <td>{statistics[props.id].percent}</td>
    </tr>

   

)

}

export default TableRow;
