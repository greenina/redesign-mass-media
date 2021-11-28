import {auth, db, SignIn} from '../firebase'

const extractWords = (arr)=>{
    if(!arr) return [{text:"wait", value:0}]
    const counts = {}
    const rid=["It","I","Now","it","it.","in","Is","is","and","we","I'd","On","on","do","There","with","will","My","this","that?","into","can","be","It's","a","the","of","2","to","about","over","it's","at","so","from","me",'would',"I'd","it's","It's","that"]
    arr.map(comment =>{
        comment.text.split(/(\s+)/).forEach(function (x) { 
            if(!rid.includes(x)){
                counts[x] = (counts[x] || 0) + 1;
            }
         });
    })
    return Object.keys(counts).map(count =>{
        return {text:count, value:counts[count]}
    })
}

export default extractWords