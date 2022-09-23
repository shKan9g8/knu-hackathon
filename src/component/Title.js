
import React from 'react';
import database from '../db/data.json';
function Title({test}){
  console.log(test);
  console.log(typeof test);
  if (test == '1')
  {
    return (<div>
      {database.hospitals[0].name}
    </div>);
  }
  else if (test == '2')
  {
    return (<div>
      {database.hospitals[1].name}
    </div>);
  }
  else if (test == '3')
  {
    return (<div>
      {database.hospitals[2].name}
    </div>);
  }
  else if (test == '4')
  {
    return (<div>
      {database.hospitals[3].name}
    </div>);
  }
  else if (test == '5')
  {
    return (<div>
      {database.hospitals[4].name}
    </div>);
  }
  else if (test == '6')
  {
    return (<div>
      {database.hospitals[5].name}
    </div>);
  }
  else if (test == '7')
  {
    return (<div>
      {database.hospitals[6].name}
    </div>);
  }
  else if (test == '8')
  {
    return (<div>
      {database.hospitals[7].name}
    </div>);
  }
  else if (test == '9')
  {
    return (<div>
      {database.hospitals[8].name}
    </div>);
  }
  else if (test == '10')
  {
    return (<div>
      {database.hospitals[9].name}
    </div>);
  }
  else if (test == '11')
  {
    return (<div>
      {database.hospitals[10].name}
    </div>);
  }
  else if (test == '12')
  {
    return (<div>
      {database.hospitals[11].name}
    </div>);
  }
  else if (test == '13')
  {
    return (<div>
      {database.hospitals[12].name}
    </div>);
  }
  else if (test == '14')
  {
    return (<div>
      {database.hospitals[13].name}
    </div>);
  }
  else if (test == '15')
  {
    return (<div>
      {database.hospitals[14].name}
    </div>);
  }
};

export default Title;
