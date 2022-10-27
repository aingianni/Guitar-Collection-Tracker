const React = require('react')

class Default extends React.Component {
  render () {
    const { collection, title } = this.props
    return (
      <html>
        <head>
          <link rel='stylesheet' href='/css/app.css' />
          <title>{title}</title>
        </head>
        <body>
          <nav>
            <a href='/collections'>Collections Home</a>
            <a href='/collections/new'>Add Guitar</a>
            {collection ? <a href={`/collections/${collection._id}/edit`}>Edit</a> : ''}
          </nav>

          <h1>{title}</h1>

          <div id="main">
            {this.props.children}
          </div>
        </body>
      </html>
    )
  }
}

module.exports = Default
