import React from 'react'
import '../App.css'
import CodezakiFiroz from '/image/CodezakiFiroz.png'
function Navbar() {
    const list = ["Home", "About", "Projects", "Contact"]
    return (
        <div className='w-full h-auto shadow-lg flex items-center justify-between px-8'>
            <div>
                <img src={CodezakiFiroz} alt="" className='h-20' />
            </div>
            <ul className='flex gap-8'>
                {list.map((listIteam) => {
                    return <li key={listIteam} className='hover:text-blue-400 font-bold text-lg'><a>{listIteam}</a></li>
                })}
            </ul>
        </div>
    )
}

export default Navbar