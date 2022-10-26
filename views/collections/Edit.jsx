const React = require('react')
const Default = require('../Layouts/Default')

class Edit extends React.Component {
  render () {
    const { image, model, _id, color, price, bodyShape, guitarOwned } = this.props.collection
    return (
      <Default title={`${model} Edit Page`} collection={this.props.collection}>
        <form method='POST' action={`/collections/${_id}?_method=PUT`}>
          Image: <input name='image' defaultValue={image}></input>
          <br />
          Model: <input name='model' defaultValue={model}></input>
          <br />
          Price: <input name='price' defaultValue={price}></input>
          <br />
          Color: <input name='color' defaultValue={color}></input>
          <br />
          Body Shape: <input name='bodyShape' defaultValue={bodyShape}></input>
          <br />
          Acquired: <input type='checkbox' name='guitarOwned' defaultChecked={guitarOwned}></input>
          <br />
          <input type='submit' value='Update Guitar' />
        </form>
      </Default>
    )
  }
}

module.exports = Edit
