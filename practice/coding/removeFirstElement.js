    let arr=[99, 5, 3, 100, 1]


    //first method
    // let ans=arr.shift();
    // console.log(arr)


    //secocd  // but it is not removing just returnig the value in form of array
    let ans1=arr.slice(0,1)
    console.log(arr)


    //third   //This remove permanently
    let ans2=arr.splice(0,1);
    console.log(arr);