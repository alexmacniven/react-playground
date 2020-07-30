import React from 'react';

function DogNames() {
  return (
    <div>
      <h3>Dogs</h3>
      <ul>
        <li>Boxer</li>
        <li>Rex</li>
        <li>Rover</li>
      </ul>
    </div>
  );
};

function Dogs(){
  return (
    <div>
      <DogNames />
    </div>
  );
};

function CatNames() {
  return (
    <div>
      <h3>Cats</h3>
      <ul>
        <li>Teddy</li>
        <li>Tilly</li>
        <li>Monty</li>
      </ul>
    </div>  
  );
};

function Cats() {
  return (
    <div>
      <CatNames />
    </div>
  );
};

class PetsList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <p>
          The example below demonstrates how components can be nested within 
          one another.
        </p>
        <p>
          <a href="https://github.com/alexmacniven/react-playground/blob/master/src/PetsList.js" target="_blank">View PetsList.js on Github</a>
        </p>
        <h2>Pet List</h2>
        <Dogs />
        <Cats />
      </div>
    );
  }
};

export default PetsList;