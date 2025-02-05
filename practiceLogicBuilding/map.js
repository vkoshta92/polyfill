let map={};
let arr=[1,2,31,1,3,3]
for (let i=0;i<arr.length;i++){
    map[arr[i]] = (map[arr[i]] || 0) + 1;
}
console.log(map);
