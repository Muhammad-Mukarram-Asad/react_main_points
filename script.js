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
