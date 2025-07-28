// const nestedArray = [1, [2, 3], 4, [5, 6,[7, 8]]];
// const ans=nestedArray.flat(Infinity)
// console.log(ans);




function func(arr){
    let result=[];
    for(let i of arr){
        if(Array.isArray(i)){
            result=result.concat(func(i));
        }else{
            result.push(i);
        }
    }
    return result;
}


const nestedArray = [1, [2, 3], 4, [5, 6,[7, 8]]];

const ans=func(nestedArray)
for(let i of ans){
    console.log(i);
}