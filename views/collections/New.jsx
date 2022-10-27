const React = require('react')
const Default = require('../Layouts/Default')

class New extends React.Component {
  render () {
    return (
      <Default title="Add Guitar">
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
          <form method='POST' action='/collections'>
          <input class='entry' name='image' placeholder='Image Link for Guitar'></input>
          <br />
          <input class='entry' name='model' placeholder='Model of the Guitar'></input>
          <br />     
          <input class='entry' name='price' placeholder='Price of the Guitar'></input>
          <br />    
          <input class='entry' name='color' placeholder='Color of the Guitar'></input>
          <br />   
          <input class='entry' name='bodyShape' placeholder='Body Shape of the Guitar'></input>
          <br />  
          <input type='checkbox' name='guitarOwned'></input>
          <br />
          <input type='submit' value='Submit Guitar' />
          </form>
        </div>
      </Default>
    )
  }
}

module.exports = New
