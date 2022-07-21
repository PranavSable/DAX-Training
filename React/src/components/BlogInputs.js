
import { useState, useEffect } from "react"
import axios from 'axios';

const baseURL = 'https://qghcujpqbvrdfszremfe.supabase.co/rest/v1/blogs?select=*'

const BlogInputs = () => {
    const [blogs, setBlogs] = useState(null)
    const [loading, setLoading] = useState(true)

    const[blogdata, setblogdata]= useState(
      {
        title:"",
        description:"",
        author:"",
        reading_time:""
      });

    const entry = (e) => {
      e.preventDefault()
      console.log('entry', blogdata)
      axios.post(baseURL, blogdata, {
        headers:{
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFnaGN1anBxYnZyZGZzenJlbWZlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTgxMjk3NzcsImV4cCI6MTk3MzcwNTc3N30.LvOp9lASnuJAAwvg2VxFmnrVXuqZOM0KVngw8EKHQcM',
          'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFnaGN1anBxYnZyZGZzenJlbWZlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTgxMjk3NzcsImV4cCI6MTk3MzcwNTc3N30.LvOp9lASnuJAAwvg2VxFmnrVXuqZOM0KVngw8EKHQcM'
        }
      }).then(response=>console.log(response))
    }
    let key, value;
    const handleInput=(event)=>
    {
      console.log(event)
      key=event.target.name;
      value = event.target.value;
      setblogdata({...blogdata,[key]:value})
    }

    
    return (<div>
        <form>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Blog Title</label>
    <input type="text" className="form-control" placeholder="Title" value={blogdata.title} name="title" id="title" onChange={handleInput}  aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text"></div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
    <input type="text" className="form-control" placeholder="Description" value={blogdata.description} name="description" id="description" onChange={handleInput} />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Author</label>
    <input type="text" className="form-control" placeholder="Author" value={blogdata.author} name="author" id="author" onChange={handleInput} />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Read Time</label>
    <input type="text" className="form-control" placeholder="Reading Time" value={blogdata.reading_time} name="reading_time" id="reading_time" onChange={handleInput} />
  </div>

  <button type="submit" className="btn btn-primary" onClick={entry}>Submit</button>
</form>
    </div>
    )
}

export default BlogInputs