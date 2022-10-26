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
          {
            wishList.map(collection => {
              const { image, model, _id, color, price, bodyShape, guitarOwned } = collection
              return(
                <tr key={collection._id}>
                  <td>
                    <a href={`/collections/${collection._id}`}>{model}</a>
                    <br />
                    {color}
                    <br />
                    <form method="POST" action={`/collections/${collection._id}?_method=DELETE`}>
                      <input type="submit" value="Delete this Guitar" />
                    </form>
                  </td>
                  <td>
                    <img src={image} />
                  </td>
                </tr>
              )
            })
          }
        </table>

        <table>
          {
            collectionList.map(collection => {
              const { image, model, _id, color, price, bodyShape, guitarOwned } = collection
              return(
                <tr key={collection._id}>
                  <td>
                    <a href={`/collections/${collection._id}`}>{model}</a>
                    <br />
                    {color}
                    <br />
                    <form method="POST" action={`/collections/${collection._id}?_method=DELETE`}>
                      <input type="submit" value="Delete this Guitar" />
                    </form>
                  </td>
                  <td>
                    <img src={image} />
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
