const React = require('react')
const Def = require('../default')

function show (data) {
  let comments = ( 
    <h3 className="inactive">
      No comments yet!
    </h3>
  )
  let rating = (
    <h3 className="inactive">
      Not yet rated
    </h3>
  )
  if (data.place.comments.length) {
    let sumRatings = data.place.comments.reduce((tot,c) => {
      return tot + c.stars
    },0)
    let averageRating = Math.round(sumRatings / data.place.comments.length)
    let stars = ''
    for (let i = 0; i < averageRating; i++) {
      stars += '⭐'
    }
    rating = (
      <h3>
        {stars} stars
      </h3>
    )
    comments = data.place.comments.map(c => {
      return (
        <div className="border">
          <h2 className="rant"> {c.rant ? 'Rant! ' : 'Rave!'} </h2>
          <h4>{c.content}</h4>
          <h3>
            <strong>- {c.author}</strong>
          </h3>
          <h4>Rating: {c.stars}</h4>
        </div>
      )
    })
  }
    return (
        <Def>
          <main>
            <div className="row"/>
            <div className="col-sm-6"/>
            <img src={data.place.pic} alt={data.place.name} />
            <h3>
              Located in {data.place.city}, {data.place.state}
            </h3>
            <h1>Show Page</h1>
            <h2>Rating</h2>
            <p>{rating}</p>
            <div className="col-sm-6"/>
            <h2>Description</h2>
            <p>In Progress</p>
            <h3>
              {data.place.showEstablished() }
            </h3>
            <h4>
              Serving {data.place.cuisines}
            </h4>
            <div>
                <h2>Comments</h2>
                {comments}
            </div>
            <a href={`/places/${data.id}/edit`} className="btn btn-warning"> 
                Edit
            </a>  
            <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
            <button type="submit" className="btn btn-danger">
            Delete
            </button>
            </form>
            <form method="POST" action={`/places/${data.id}/comment`}>
              <div className="form-group">
                <label htmlFor="author">Author</label>
                <input className="form-control" id="author" name="author" required/>
              </div>
              <div className="form-group">
                <label htmlFor="content">Content</label>
                <textarea className="form-group" id="content" name="content" rows="4" cols="5"/>
              </div>
              <div className="form-group">
                <label htmlFor="stars">Star Rating</label>
                <input className="form-control" id="stars" name="stars" type="number" step=".5"/>
              </div>
              <div className="form-group">
                <label htmlFor="rant">Rant</label>
                <input className="form-control" id="rant" name="rant" type="checkbox"/>
              </div>
              <button type="submit" className="btn btn-danger">
                Submit
              </button>
            </form>
          </main>
        </Def>
    )
}

module.exports = show