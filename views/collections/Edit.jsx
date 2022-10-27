const React = require('react')
const Default = require('../Layouts/Default')

class Edit extends React.Component {
  render () {
    const { image, model, _id, color, price, bodyShape, guitarOwned } = this.props.collection
    return (
      <Default title={`Edit ${model}`} collection={this.props.collection}>
        <div id="name-form">
        Image: 
        <br />
        Model: 
        <br />
        Price: 
        <br />
        Color: 
        <br />
        Body Shape: 
        <br />
        Acquired: 
        </div>

        <div id="entry-form">
        <form method='POST' action={`/collections/${_id}?_method=PUT`}>
          <input class='entry' name='image' defaultValue={image}></input>
          <br />
          <input class='entry' name='model' defaultValue={model}></input>
          <br />
          <input class='entry' name='price' defaultValue={price}></input>
          <br />
          <input class='entry' name='color' defaultValue={color}></input>
          <br />
          <input class='entry' name='bodyShape' defaultValue={bodyShape}></input>
          <br />
          <input type='checkbox' name='guitarOwned' defaultChecked={guitarOwned}></input>
          <br />
          <input type='submit' value='Update Guitar' />
        </form>
        </div>

      </Default>
    )
  }
}

module.exports = Edit
