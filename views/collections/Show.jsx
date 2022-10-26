const React = require('react')
const Default = require('../Layouts/Default')

class Show extends React.Component {
  render () {
    const { image, model, _id, color, price, bodyShape, guitarOwned } = this.props.collection
    return (
      <Default title={`${model} View Page`} collection={this.props.collection}>
        <img src={image} />
        <br />
        <ul>
          <li> Model: {model}</li>
          <li> Price: {price}</li>
          <li> Color: {color}</li>
          <li> Body Shape: {bodyShape}</li>
        </ul>
        <br />
        <p>{guitarOwned? 'This guitar is in your collection' : 'This guitar is currently on your wishlist'}</p>
      </Default>
    )
  }
}

module.exports = Show
