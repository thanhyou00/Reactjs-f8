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
// 2. Cleanup function luôn được gọi trước khi component unmouted

const tabs = ['posts', 'comments', 'albums']

function Content() {

    const [countdown, setCountdown] = useState(180);

    useEffect(()=>{
        const timerId = setInterval(()=>{
            setCountdown(preState => preState -1)
        }    
        ,1000);

        return ()=>clearInterval(timerId);
    },[])

    return (
        
        <div>
             <h1>{countdown}</h1>  
        </div>
    )
}

export default Content