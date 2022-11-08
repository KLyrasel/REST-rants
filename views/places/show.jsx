const React = require('react')
const Def = require('../default')

function show () {
    return (
        <Def>
          <main>
            <h1>Show Page</h1>
            <h2>Rating</h2>
            <p>Not Rated</p>
            <h2>Description</h2>
            <p>In Progres</p>
            <div>
                <h2>Comments</h2>
                <p>No comments yet!</p>
            </div>
        
          </main>
        </Def>
    )
}

module.exports = show