const React = require('react')
const Default = require('../Layouts/Default')

class New extends React.Component {
  render () {
    return (
      <Default title="Add Guitar to Collection">
        <form method='POST' action='/collections'>
          Image: <input name='image' placeholder='Image Link for Guitar'></input>
          <br />
          Model: <input name='model' placeholder='Model of the Guitar'></input>
          <br />
          Price: <input name='price' placeholder='Price of the Guitar'></input>
          <br />
          Color: <input name='color' placeholder='Color of the Guitar'></input>
          <br />
          Body Shape: <input name='bodyShape' placeholder='Body Shape of the Guitar'></input>
          <br />
          Acquired: <input type='checkbox' name='guitarOwned'></input>
          <br />
          <input type='submit' value='Submit Guitar' />
        </form>
      </Default>
    )
  }
}

module.exports = New
