import React from 'react'
import './Article.css'
// import kaist-logo from './kaist.png'
import kaistLogo from '../assets/images/kaist.png'
import nupjuk from '../assets/images/nupjuk.JPG'
const Article = () =>{
    return(
        <div>
            <div id="logo"><img src={kaistLogo} width="100px"/></div>
            <h1 id="title">카이스트, 개교 50주년 맞아 서울로 캠퍼스 이전</h1>
            <div id="content">
                <div><img src={nupjuk}/></div>
                <p>대전에 위치한 한국과학기술원, 이하 카이스트가 개교 50주년을 맞아 서울로 캠퍼스 이전을 검토한다. 카이스트의 시초라고 할 수 있는 한국과학기술연구원 KIST가 서울에서 시작하여 서울에 남아있으며, 카이스트의 더 큰 도약을 위해서는 초심을 위해 이전의 위치에서 다시 시작해야 한다는 취지이다. 
 
                카이스트 50주년 기념식에서 총장님이 밝힌, 캠퍼스 이전을 통해 기대하는 바는 다음과 같다. 
                첫째, 국내 주요 기업들은 대부분 수도권에 위치해 있다.  카이스트와 기업들 간의 산학협력을 장려하려면  주요 기업과 가까이 위치한 서울에 위치하는게 유리하다.
                둘째, 스트레스 지수는 대학생들의 학업 성취도에 직접적으로 영향을 끼친다. 특히 과제와 학업에 시달리는 카이스트 학생들에게 스트레스 해소는 필수적이며, 서울에서의 문화생활은 학생들의 스트레스를 해소하여 학업성취도를 높일 것이다. 
                
                카이스트 캠퍼스 이전에 드는 비용은 천문학적일 것으로 추정된다. 카이스트 측의 이러한 과감한 결정은 아직도 학생들 사이에서 의견이 분분한 가운데 계획대로 추진될 지는 의문이다.  
                </p>
            </div>
           
        </div>
    )
}

export default Article