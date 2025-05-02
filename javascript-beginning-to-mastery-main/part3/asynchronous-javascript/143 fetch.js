// fetch 
// fetch promise return krta hai.

const URL = "https://jsonplaceholder.typicode.com/postssss";

// responce.json bbi ak promise return krega.
// fetch(URL)
// .then(response =>{

//     return response.json()
// })
// .then(data=>{
// console.log(data)
// })


fetch(URL,{
    method: 'POST',
    body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
    })
    .then(response =>{
        if(response.ok){
            return response.json()
        }else{
            // agar error nhi di aur url glt kr diya to error throught nhi krega undifined ayega ne connet rgega to , net of krne pr ye chlega catch vla.
            throw new Error("Something went wrong!!!")
        }
    })
    .then(data =>{
        console.log(data);
    })
    // fetch me promise reject tbhi hoga, jab network error aye, 404 jasi error me reject nhi hoga.
    .catch(error =>{
        console.log("inside catch");
        console.log(error);
    })
