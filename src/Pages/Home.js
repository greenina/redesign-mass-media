import React from 'react'
import './Home.css'

const Home = () =>{
    return(
    <div>
        <div id="intro">
            <h1 id="title">Redesign-Mass-Media</h1>
            <button onClick={()=>window.location.href="/linear"}>Group1</button><button onClick={()=>window.location.href="/cloud"}>Group2</button>
        </div>
        {/* <div id="madeby">
            made by <a href="https://github.com/greenina">@inhwasong</a>
        </div> */}

    </div>)
}

export default Home; 