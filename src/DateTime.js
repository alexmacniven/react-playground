import React from 'react'

const Message = (props) => <p>The current date/time is: {props.date}</p>

class DateTime extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <p>
          This example demonstrates passing properties to stateless functional
          components.
        </p>
        <p>
          <a href="https://github.com/alexmacniven/react-playground/blob/master/src/DateTime.js" target="_blank">View DateTime.js on Github</a>
        </p>
        <Message date={Date()} />
        <hr />
      </div>
    )
  }
}

export default DateTime