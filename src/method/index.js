let num =  (arr) => {
    // let newarr = ''
     let ar = arr.split('')
     var result = [];
     for(var i=0,len=ar.length;i<len;i+=6){
        result.push(ar.slice(i,i+6));
     }
     result.forEach((item)=>{
          item.splice(item.length, 0, '<br/>');
     })
     return [].concat.apply([],result).join('')
}
export { num }