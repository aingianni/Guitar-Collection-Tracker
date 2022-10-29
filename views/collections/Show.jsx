const React = require('react')
const Default = require('../Layouts/Default')

class Show extends React.Component {
  render () {
    const { image, model, _id, color, price, bodyShape, guitarOwned, comments } = this.props.collection
    return (
      <Default title={`${model}`} collection={this.props.collection}>
        <img src={image} />
        <div id='spacer' />
        <div>
          <ul>
            <li> Model: {model}</li>
            <li> Price: {price}</li>
            <li> Color: {color}</li>
            <li> Body Shape: {bodyShape}</li>
            <li>{guitarOwned ? 'This guitar is in your collection' : 'This guitar is currently on your wishlist'}</li>
            <li>
              <form method='POST' action={`/collections/${_id}?_method=DELETE`}>
                <input type='submit' value='Delete this Guitar' />
              </form>
            </li>
          </ul>

          {
          comments.length
            ? comments.map((comment) => {
              return (
                <div key={comment._id}>
                  <p>Name: {comment.commentName}</p>
                  <p>Note: {comment.commentBody}</p>
                </div>
              )
            })
            : ''
        }

          <form method='POST' action={`/collections/${_id}/comments?_method=PUT`}>
            <input type='text' name='commentName' />
            <br />
            <input type='text' name='commentBody' />
            <br />
            <input type='submit' value='submit' />
          </form>
        </div>
      </Default>
    )
  }
}

module.exports = Show
