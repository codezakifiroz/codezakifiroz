import React from 'react'
import HTML from '/SkillsLogo/HTML.png'
import CSS from '/SkillsLogo/CSS.png'
import JS from '/SkillsLogo/JS.png'
import ReactLOGO from '/SkillsLogo/ReactLOGO.png'
import Tailwind from '/SkillsLogo/Tailwind.png'
import Java from '/SkillsLogo/Java.png'
import Github from '/SkillsLogo/Github.png'
import NodeJs from '/SkillsLogo/NodeJs.png'
import Mysql from '/SkillsLogo/Mysql.png'
function SkillBox() {

    const skillList = [HTML, CSS, JS, ReactLOGO, NodeJs, Tailwind, Java, Github, Mysql]

    return (
        <div className='w-full bg-zinc-500 h-auto shadow-xl p-5 flex' >
            <div className='m-auto flex gap-4 '>

                {skillList.map((LogoImg) => {
                    return <img src={LogoImg} key={LogoImg} className='inline h-20 w-auto' />
                })}
            </div>

        </div>
    )
}

export default SkillBox