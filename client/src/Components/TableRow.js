import React from "react";



function TableRow(props)
{

  
let id = props.id;
let statistics=props.parentProps.statistics;
let name = String(statistics[props.id].input);
name = name.substring(name.lastIndexOf("/")+1,name.length)


return(

    
    <tr>
      <th scope="row">{id+1}</th>
      <td>{name}</td>
      <td>{statistics[props.id].algorithm}</td>
      <td>{(statistics[props.id].size_in/1024).toFixed(1)+" kb"}</td>
      <td>{(statistics[props.id].size_output/1024).toFixed(1)+" kb"}</td>
      <td>{statistics[props.id].percent}</td>
    </tr>

   

)

}

export default TableRow;
