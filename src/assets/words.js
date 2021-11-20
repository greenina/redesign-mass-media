const extractWords = (arr)=>{
    const counts = {}
    const raw = arr.map(comment =>{
        return comment.text.split(/(\s+)/)
    })
    raw.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });
    console.log("COUNTS",counts)
    return Object.keys(counts).map(count =>{
        return {text:count, value:counts[count]}
    })
}

export default extractWords