/*                                                        React.Js Notes
One of the most important topics in React is state. State consists of any data your application needs to know about, that can change over time. 
You want your apps to respond to state changes and present an updated UI when necessary. React offers a nice solution for the state management
 of modern web applications.

You create state in a React component by declaring a state property on the component class in its constructor. 
This initializes the component with state when it is created. The state property must be set to a JavaScript object.
 * Declaring it looks like this: *
         this.state = {
         key : value
         };
 */

// Bind 'this' to a Class Method {this.handleClick.bind(this)}

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false
    };
    // Change code below this line
           this.toggleVisibility = this.toggleVisibility.bind(this);
    // Change code above this line
  }
  // Change code below this line

  toggleVisibility()
  {
    this.setState({
      visibility : !this.state.visibility
    })
  }
	
	// Another way to do this:
	toggleVisibility()
  {
    this.setState(state => ({
      visibility : !state.visibility
    }))
  }
  render() {
    if (this.state.visibility) {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
          <h1>Now you see me!</h1>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
        </div>
      );
    }
  }
}
// Counter Code Made In React:
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    // Change code below this line
this.increment = this.increment.bind(this);
this.decrement = this.decrement.bind(this);
this.reset = this.reset.bind(this);
    // Change code above this line
  }
  // Change code below this line
increment()
{
  this.setState(value => ({
    count : value.count+=1
  }))

}

decrement()
{
  this.setState(state => ({
    count: state.count-=1
  }))

}

reset()
{
  this.setState({
    count: 0
  })
}
  // Change code above this line
  render() {
    return (
      <div>
        <button className='inc' onClick={this.increment}>Increment!</button>
        <button className='dec' onClick={this.decrement}>Decrement!</button>
        <button className='reset' onClick={this.reset}>Reset</button>
        <h1>Current Count: {this.state.count}</h1>
      </div>
    );
  }
};

//   * Pass a Callback as Props *
class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      inputValue: event.target.value
    });
  }
  render() {
    return (
       <div>
        { /* Change code below this line */ }
        <GetInput input={this.state.inputValue} handleChange={this.handleChange} />
        <RenderInput input={this.state.inputValue} />

        { /* Change code above this line */ }
       </div>
    );
  }
};

class GetInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Get Input:</h3>
        <input
          value={this.props.input}
          onChange={this.props.handleChange}/>
      </div>
    );
  }
};

//   * props + Ternary Operation *
class Results extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <h1>
      {this.props.fiftyFifty ? "You Win!" : "You Lose!"}
      </h1>
    )
  };
};

class GameOfChance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      counter: this.state.counter + 1 // change code here
    });
  }
  render() {
    const expression = Math.random() >= 0.5 ? true : false
    return (
      <div>
        <button onClick={this.handleClick}>Play Again</button>
        { /* change code below this line */ }
        <Results fiftyFifty={expression} />
        { /* change code above this line */ }
        <p>{'Turn: ' + this.state.counter}</p>
      </div>
    );
  }
};


