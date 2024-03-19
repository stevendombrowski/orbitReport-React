const Table = ({ sat }) => {
  return (
    <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Type of Satellite</th>
        <th>Launch Date</th>
        <th>Status</th>
      </tr>
     </thead>
     <tbody>
     {sat.map((current)=>{
        return(
          <tr>
            <td>{current.name}</td>
            <td>{current.type}</td>
            <td>{current.launchDate}</td>
            <td>{current.orbitType}</td>
          </tr>
        )
      })}
     </tbody>
   </table>
  );
};

export default Table;