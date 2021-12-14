import { useEffect, useState } from "react"

// Side effects

// Events : Add / Remove event listener
// Observer pattern : Subcribe / unsubcribe
// Closure
// Timers : setInterval, setTimeout, clearInterval, clearTimeout
// useState
// Mounted / unmounted
// ===
// Call API

/**
 * 1. Update DOM
 *  - F8 blog title
 * 2. Call API
 * 3. Listen DOM events
 *  - Scroll
 *  - Resize
 * 4. Cleanup
 *  - Remove listener / Unsubcribe
 *  - Clear timer
 */
// 1. useEffect(callback)
// - Gọi callback mỗi khi component re-render
// 2. useEffect(callback, [])
// - Chỉ gọi callback 1 lần sau khi component mounted
// 3. useEffect(callback, [deps])

// -----------
// 1. Callback luôn luôn được gọi sau khi component mounted

function Content() {
    const [title, setTitle] = useState('');
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
      document.title=title;
      // fetch
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(posts=>{
          setPosts(posts)
      })
    },[])


    return (
        <div>
            <input 
            value={title}
            onChange={e=>setTitle(e.target.value)}
            />
            <ul>
                {posts.map(post=>(
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
            
        </div>
    )
}

export default Content