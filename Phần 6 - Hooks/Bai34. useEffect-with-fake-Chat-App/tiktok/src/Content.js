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
// 3. Cleanup function luôn được gọi trước khi callback được gọi (trừ lần mounted) 

const lessons = [
    {
        id : 1,
        name : 'ReactJS là gì ? Tại sao nên học ReactJS'
    },
    {
        id : 2,
        name : 'SPA/MPA là gì ?'
    },
    {
        id : 3,
        name : 'Arrow function'
    }
];

function Content() {
    const [lessonId, setLessonId] = useState(1);

    useEffect(()=>{
        const handleComment = ({detail})=>{
            console.log(detail);
        }

        window.addEventListener(`lesson-${lessonId}`, handleComment)

        // Cleanup function
        return (()=>{
            window.removeEventListener(`lesson-${lessonId}`, handleComment)
        })
    },[lessonId])

    return ( 
        <div>
            <ul>
                {lessons.map(lesson=>(
                    <li
                    key={lesson.id}
                    style={{
                        color : lessonId === lesson.id ? 'red' : '#333'
                    }}
                    onClick={()=>setLessonId(lesson.id)}
                    >
                        {lesson.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Content