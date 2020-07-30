import React from 'react';

function DogNames() {
  return (
    <div>
      <h2>Dogs</h2>
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
      <h2>Cats</h2>
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
        <h1>Our Pets</h1>
        <Dogs />
        <Cats />
      </div>
    );
  }
};

export default PetsList;