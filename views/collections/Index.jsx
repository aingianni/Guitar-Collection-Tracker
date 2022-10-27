const React = require('react')
const Default = require('../Layouts/Default')

class Index extends React.Component {
  render () {
    const {collections} = this.props
    const wishList = collections.filter(object => !object.guitarOwned)
    const collectionList = collections.filter(object => object.guitarOwned)
    return (
      <Default>
        <table>
        <th><h1>Collection</h1></th>
          {
            collectionList.map(collection => {
              const { image, model, _id, color, price, bodyShape, guitarOwned } = collection
              return(
                <tr key={collection._id}>
                  <td>
                    <img src={image} />
                  </td>
                  <td>
                    <h3><a href={`/collections/${collection._id}`}>{model}</a></h3>
                    <br />
                    {color}
                  </td>
                  <td>
                    Price: ${ price }
                  </td>
                  <td>
                    <form method="POST" action={`/collections/${collection._id}?_method=DELETE`}>
                      <input type="submit" value="Delete this Guitar" />
                    </form>
                  </td>
                </tr>
              )
            })
          }
        </table>

        <table>
        <th><h1>Wishlist</h1></th>
          {
            wishList.map(collection => {
              const { image, model, _id, color, price, bodyShape, guitarOwned } = collection
              return(
                <tr key={collection._id}>
                  <td>
                    <img src={image} />
                  </td>
                  <td>
                    <h3><a href={`/collections/${collection._id}`}>{model}</a></h3>
                    <br />
                    {color}
                  </td>
                  <td>
                    Price: ${ price }
                  </td>
                  <td>
                    <form method="POST" action={`/collections/${collection._id}?_method=DELETE`}>
                      <input type="submit" value="Delete this Guitar" />
                    </form>
                  </td>
                </tr>
              )
            })
          }
        </table>
      </Default>
    )
  }
}

module.exports = Index
