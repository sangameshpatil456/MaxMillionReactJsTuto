import React, { Component } from 'react';
// import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person.js'


// ************************Class Based approch to implement react states*****************/
class App extends Component {
  state = {
    persons: [
      { name: 'Min', age: 26 },
      { name: 'avg', age: 27 },
      { name: 'Max', age: 28 }
    ],
    otherState: 'Some other states'
  }

  //Passing method reference between component
  // We can use bind and arrow function to pass parameter to any method
  // using arrow functon to bind the data is ineficiant so use bind function
  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 26 },
        { name: 'avg', age: 27 },
        { name: 'Max', age: 28 }
      ]
    })
  }

  changeNameHandler = (event) => {
    this.setState({
      persons: [
        { name: 'min', age: 26 },
        { name: event.target.value, age: 27 },
        { name: 'Max', age: 28 }
      ]
    })
  }

  render() {
    // In Line Styng
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'

    };
    return (
      <div className="App">
        <h1>Hi! I am React Application</h1>
        <p>This is really working</p>
        <button
          style={style}
          onClick={this.switchNameHandler.bind(this, 'MIN CHANGED')}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age} />

        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'min')}
          changed={this.changeNameHandler}>Click Parent Line
        </Person>

        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age} />

        <Person
          name="Chandu"
          age="28"
          click={() => this.switchNameHandler('Sangamesh')} />
      </div>
    );
    // return React.createElement('div',{className:"App"},React.createElement('h1', {} ,'Hi! I am React Application',
    // React.createElement('p',{},'This is really working' )));
  }
}

//**************************************Function based approch of react states using react hooks*********************************************************/

// Node Version 16.8 we can use state in function using react hook which imports {useState}
// Functions does not have render() method
// const App = (props) => {

//   //useState Returns as array with exactly two elements
//   // 1st Element will be always our current state which is useState
//   // 2nd Element return updated state
//   const [personsState, setPersonsState] = useState({
//     persons: [
//       { name: 'Sangamesh', age: 29 },
//       { name: 'Chandrankat', age: 28 }
//     ],
//     otherState:'Some other state'
//   })

//   console.log(personsState);

//   const switchNameHandler = () => {
//     setPersonsState({
//       persons: [
//         { name: 'Sangamesh Patil', age: 28 },
//         { name: 'Chandrankat', age: 28 }
//       ],
//       //if we dont add 'otherState' in 2nd element then it wont available in personState element
//       //coz second element replaces the first element
//       otherState: personsState.otherState
//     });
//   };

//   return (
//     <div className="App">
//       <h1>Hi! I am React Application</h1>
//       <p>This is really working</p>
//       <button onClick={switchNameHandler}>Switch Name</button>
//       <Person
//         name={personsState.persons[0].name} age={personsState.persons[0].age}>
//       </Person>
//       <Person
//         name="Chandu" age="28">I am Front end Developer
//         </Person>
//     </div>
//   );
//   // return React.createElement('div',{className:"App"},React.createElement('h1', {} ,'Hi! I am React Application',
//   // React.createElement('p',{},'This is really working' )));
// }

export default App;
