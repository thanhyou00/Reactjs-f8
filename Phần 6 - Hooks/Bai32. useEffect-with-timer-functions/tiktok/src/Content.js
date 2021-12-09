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
// - Callback sẽ được gọi lại mỗi khi deps thay đổi
// -----------
// 1. Callback luôn luôn được gọi sau khi component mounted
// 2. Cleanup fuction luôn được gọi trước khi component unmouted

const tabs = ['posts', 'comments', 'albums']

function Content() {
    const [title, setTitle] = useState('');
    const [posts, setPosts] = useState([]);
    const [type, setType] = useState('posts');
    const [showGoToTop, setShowGoToTop] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(()=>{
      //document.title=title;
      // fetch
      fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then(res => res.json())
      .then(posts=>{
          setPosts(posts)
      }) 
    
    },[type])

    const handleScroll = () =>{
        setShowGoToTop(window.scrollY>=200);
    }
    useEffect(()=>{
        window.addEventListener('scroll',handleScroll);

        // Cleanup function
        return ()=>{
            window.removeEventListener('scroll',handleScroll);
        }
    },[]) 

    const handleResize = () =>{
        setWidth(window.innerWidth)
    }
    useEffect(()=>{
        window.addEventListener('resize',handleResize)
    })

    return (
        
        <div>
            <div><h1>{width}</h1></div>
            {tabs.map(tab=>(
                <button 
                key={tab}
                style={type === tab ? {
                    color: '#fff',
                    backgroundColor : '#333',
                } : {}}
                onClick={()=>setType(tab)}
                >
                    {tab}
                </button>
            ))}
            <input 
            value={title}
            onChange={e=>setTitle(e.target.value)}
            />
            <ul>
                {posts.map(post=>(
                    <li key={post.id}>{post.title || post.name}</li>
                ))}
            </ul>
        {showGoToTop && (
            <button
            style={{
                position:'fixed', 
                right:20, 
                bottom:20,
            }}
            >
                Go to top
            </button>
        )}    
        </div>
    )
}

export default Content