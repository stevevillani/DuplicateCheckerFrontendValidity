import React from 'react'

class List extends React.Component {

    render() {
        return (<div>
            <div className='header'> {this.props.name} ({this.props.data.length})</div>
            {/* Displays list of data if exists, else displayes upload text */}
            {this.props.data.length ? (
              <ul>
                {this.props.data.map((item, index) => (
                  <li key={index}> {item.first}, {item.last}, {item.company}, {item.email}, {item.address1}, {item.address2}, {item.zip}, {item.city}, {item.stateLong}, {item.state}, {item.phone}</li>
                ))}
              </ul>
            ) : (
              <p> Please upload a file to check for duplicates...</p>
            )}
  
        </div>)
    }
}

export default List