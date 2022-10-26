const React = require('react')
const Default = require('../Layouts/Default')

class Index extends React.Component {
  render () {
    const {collections} = this.props
    const wishList = collections.filter(collection => collection.guitarOwned === false)
    const collectionList = collections.filter(collection => collection.guitarOwned === true)
    return (
      <Default>
        <table>
          {
            collections.map(collection => {
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
            collections.map(collection => {
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
