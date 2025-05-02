// async await

// fetch(URL)
//     .then(response => {
//         return response.json()
//     })
//     .then(data => {
//         console.log(data);
//     })
console.log("script start");
const URL = "https://jsonplaceholder.typicode.com/posts";
// async lgne se function return me hmesa promise dega.
// async function getPosts(){
//     const response = await fetch(URL);
//     if(!response.ok){
//         throw new Error("Something went wrong")
//     }
//     const data = await response.json();
//     return data;
// }

// ye sb async program h kyoki start phle print hoga phir end vla phir hi promise vla hoga.

// arrow function me asyncase likhenge function me phle likh dete
const getPosts = async() =>{
    const response = await fetch(URL);
    // respons ok lgne se ye error nhi dega agr url glt ho jae catch de dega.
    if(!response.ok){
        throw new Error("Something went wrong")
    }
    // await se ye wait krta h jb tk reslve na ho jae.
    const data = await response.json();
    return data;
}

// const myData = getPosts();
// console.log(myData);

getPosts()
    .then((myData) => {
        console.log(myData);
    })
    .catch(error =>{
        console.log("inside catch")
        console.log(error);
    })


console.log("script end ");