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
                <p>The Korea Advanced Institute of Science and Technology and KAIST, located in Daejeon, are considering relocating campus to Seoul to mark the 50th anniversary of its opening. The intention is that KIST, the Korea Institute of Science and Technology, the beginning of KAIST, started in Seoul and remains in Seoul, and for KAIST to make a bigger leap forward, it must resume its previous position. 
                    <br/><br/>
                At the 50th anniversary ceremony of KAIST, the president said, "The expectations through the relocation of the campus are as follows.
First, most of the major domestic companies are located in the metropolitan area. To encourage industry-academic cooperation between KAIST and companies, it is advantageous to be located in Seoul, which is close to major companies.
Second, the stress index directly affects the academic achievement of college students. In particular, relieving stress is essential for KAIST students who are suffering from assignments and studies, and cultural life in Seoul will relieve students' stress and increase their academic achievement. 


<br/><br/>
                
                The cost of relocating to the KAIST campus to Seoul is estimated to be astronomical. It is questionable whether such a bold decision by KAIST will be carried out as planned with still divided opinions among students.
                </p>
            </div>
           
        </div>
    )
}

export default Article