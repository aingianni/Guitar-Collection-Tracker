const React = require('react')
const Default = require('../Layouts/Default')

class Show extends React.Component {
  render () {
    const { image, model, _id, color, price, bodyShape, guitarOwned, comments } = this.props.collection
    return (
      <Default title={`${model}`} collection={this.props.collection}>
        <img src={image} />
        <div id='spacer' />
        <div id='show-content'>
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
          <h4>Notes</h4>
          {
          comments.length
            ? comments.map((comment) => {
              return (
                <div key={comment._id}>
                  <p>Title: {comment.commentName}</p>
                  <p>Note: {comment.commentBody}</p>
                </div>
              )
            })
            : ''
        }
          <h4>Leave a Note</h4>
          <form method='POST' action={`/collections/${_id}/comments?_method=PUT`}>
            <input type='text' name='commentName' placeholder='Title of Note'/>
            <br />
            <input type='text' name='commentBody' placeholder='Content of Note'/>
            <br />
            <input type='submit' value='submit' />
          </form>
        </div>
      </Default>
    )
  }
}

module.exports = Show
