// import React, { Component } from 'react'
// import axios from 'axios'

// export default class App extends Component {

//   constructor(){
//     super()

//     this.state = {posts : []}
//   }

//   async getposts(){
//     try {
//       const response = await axios.get('https://jsonplaceholder.typicode.com/comments?post')
        
//       this.setState({posts: response.data})
//     } catch (error) {
//       console.log(error);
//     }
//     }

//     componentDidMount(){
//       this.getposts()
//     }

//   render() {
//     return (
//       <div>
//         {this.state.posts.map((post) => {
//             return(
//               <div>
//               <h1>{post.name}</h1>
//               <p>{post.body}</p>
//             </div>
//             )
//           }
//         )}
//       </div>
//     )
//   }
// }

import React, { useEffect,useState } from 'react'
import axios from 'axios'

export default function App() {

  const [posts,setPosts] = useState([])

  const getPosts = async () => {
    try {
      const  response = await axios.get(
        'https://jsonplaceholder.typicode.com/comments?post'
        )
      setPosts (response.data)
      
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=> {
    getPosts()
  }, [])

  return (
    <div>
      {posts.map((post) => {
          return(
            <div>
            <h1>{post.name}</h1>
            <p>{post.body}</p>
          </div>
          )
        }
      )}
    </div>
  )
}



