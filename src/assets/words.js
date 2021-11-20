const extractWords = (arr)=>{
    if(!arr) return [{text:"wait", value:0}]
    const counts = {}
    arr.map(comment =>{
        comment.text.split(/(\s+)/).forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });
    })
    console.log("COUNTS",counts)
    return Object.keys(counts).map(count =>{
        return {text:count, value:counts[count]}
    })
}

export default extractWords