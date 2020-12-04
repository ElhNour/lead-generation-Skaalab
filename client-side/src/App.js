import React from 'react';
import NavForm from './containers/NavForm';


const App = ({

  children
}) => {

  return (
    <div>
      <NavForm></NavForm>
      <p>    </p>
      {children}
    </div>
  );
}


export default App;