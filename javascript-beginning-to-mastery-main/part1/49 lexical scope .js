// lexical scope 
const myVar = "value1";

function myApp(){
    

    // my var ki value phle apne function check kege phir uskeb age phir global jha mil jae vha se print kr dega.
    function myFunc(){
        // const myVar = "value59";
        const myFunc2 = () =>{
            console.log("inside myFunc", myVar);
        }
        myFunc2();
    }


    console.log(myVar);
    myFunc();
}

myApp();