import { useState, useEffect } from "react"
import {NavLink} from 'react-router-dom'
import axios from 'axios';

const baseURL = 'https://qghcujpqbvrdfszremfe.supabase.co/rest/v1/blogs?select=*'

const Entries = () => {
    const [blogs, setBlogs] = useState(null)
    const [loading, setLoading] = useState(true)

    
    return (<div>
        <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Blog Title</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text"></div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Description</label>
    <input type="text" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Author</label>
    <input type="text" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Read Time</label>
    <input type="text" class="form-control" id="exampleInputPassword1"/>
  </div>

  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    </div>
    )
}

export default BlogInputs