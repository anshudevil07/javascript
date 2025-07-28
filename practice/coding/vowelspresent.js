let s="hello geek";
let count=0;
for(let i=0 ;i<s.length;i++){
    if("aeiouAEIOU".includes(s[i])){
        count++;
    }
}
console.log(count);

