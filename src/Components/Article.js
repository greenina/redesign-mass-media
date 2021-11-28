import React from 'react'
import './Article.css'
// import kaist-logo from './kaist.png'
import kaistLogo from '../assets/images/kaist.png'
import nupjuk from '../assets/images/nupjuk.JPG'
const Article = () =>{
    return(
        <div>
            <div id="logo"><img src={kaistLogo} width="100px"/></div>
            <h1 id="title">KAIST moves its campus to Seoul, celebrating it's 50th anniversary</h1>
            <div id="content">
                <div><img src={nupjuk}/></div>
                <p>Korea Advanced Institute of Science and Technology (KAIST), currently located in Daejeon, is considering  relocation to Seoul for its upcoming 50th anniversary. As KIST, the forerunner of KAIST remains in Seoul, people are on board with the idea that KAIST must also be located in Seoul to take a greater leap in becoming the forefront of science and technology.  
                    <br/><br/>
                The president of KAIST revealed what the relocation would bring at the 50th anniversary ceremony. He mentioned that the most of the enterprises are located around Seoul. To encourage strong cooperation between KAIST and the enterprises, it it important that KAIST be located in Seoul. 
                <br/> <br/>
Second, the stress index directly affects the academic achievement of college students. In particular, relieving stress is essential for KAIST students who are suffering from assignments and studies, and cultural life in Seoul will relieve students' stress and increase their academic achievement. 

<br/><br/>
                
                The cost of relocating to the KAIST campus to Seoul is estimated to be astronomical. It is questionable whether such a bold decision by KAIST will be carried out as planned with still divided opinions among students. 
                </p>
            </div>
           
        </div>
    )
}

export default Article