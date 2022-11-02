## Guitar Collection Tracker
<p>
    This app is designed to allow a user to keep track of their collection of guitars. It also serves as a wishlist for guitars the user may want to buy. By using the edit feature the user can actively toggle between owning a guitar and having it on their wishlist.
</p>

## Restful Routes

| # | Action | URL | HTTP Verb | JSX View Filename | Mongoose Method |
| ----------- | -------------| --------------| --------------| --------------| --------------|
| 1 | Index | /collections/ | GET | Index.jsx | Collection.find() |
| 2 | Show | /collections/:id | GET | Show.jsx | Collection.findById() |
| 3 | New | /collections/new | GET | New.jsx | none |
| 4 | Create | /collections/ | POST | none | Collection.create(req.body) |
| 5 | Edit | /collections/:id/edit | GET | Edit.jsx | Collection.findById() |
| 6 | Update | /collections/:id | PUT | none | Collection.findByIdAndUpdate() |
| 7 | Destroy | /collections/:id | DELETE | none | Collection.findByIdAndDelete() |

## Screenshots
<p>
    <img src='https://i.imgur.com/2Bk4QIz.png' />
    <img src='https://i.imgur.com/41VK4he.png' />
    <img src='https://i.imgur.com/MZcfyte.png' />
</p>

## Technologies Used
<p>
    JavaScript, HTML, CSS, Express, MongoDB, Node.js
</p>

## Getting Started
<a href='' target='_blank'>Deployed Project</a>
<br />
<p>
    The app is fairly simple. The big determining factor when adding a guitar to the collection is the boolean. The boolean will determine if the guitar goes to the collection or the wishlist.
</p>

## Next Steps
<p>
    <h3>Future Improvements</h3>
    <ul>
        <li>Price tracking across multiple sites</li>
        <li>Links to store pages for the guitar</li>
        <li>Login functionality</li>
    </ul>
</p>

## Resources
<ul>
    <li><a href='https://trello.com/b/yOopgo8N/project-2' target='_blank'>Trello</a></li>
    <li><a href='https://i.imgur.com/1txB2Xy.png' target='_blank'>ERD</a></li>
</ul>

## Wireframes
<img src='https://i.imgur.com/T7fWQ68.png' />
<img src='https://i.imgur.com/xMaSdGv.png' />