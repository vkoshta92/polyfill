// const rootNode = document.getRootNode();
// const htmlElementNode = rootNode.childNodes[0];
// // console.log(htmlElementNode.childNodes); NodeList(3) [head, text, body]
// const headElementNode = htmlElementNode.childNodes[0];
// const textNode1 = htmlElementNode.childNodes[1];
// const bodyElementNode = htmlElementNode.childNodes[2];
// console.log(headElementNode.childNodes);
// // sibling relation 
// console.log(headElementNode.nextSibling);
// const h1 = document.querySelector("h1");
// const body = h1.parentNode.parentNode;
// body.style.color = "#efefef";
// body.style.backgroundColor = "#333"
// const body = document.body
// body.style.color = "#efefef";
// body.style.backgroundColor = "#333"
// const head = document.querySelector("head");
// // console.log(head);
// const title = head.querySelector("title");
// console.log(title.childNodes);

// const container = document.querySelector(".container");
// console.log(container.children);




const rootNode=document.getRootNode();
const htmlElementNode=rootNode.childNodes[0];
console.log(rootNode);
console.log(htmlElementNode);
const cn= htmlElementNode.childNodes; // node list[head text, body]
console.log(cn);
const cn1= Array.from(cn);  // array
console.log(Array.isArray(cn1));
const node = htmlElementNode.nextSibling.childNodes;
console.log(node);





//child relation

// const headElementNode=htmlElementNode.childNodes[0];
// console.log(headElementNode);
// const textNod1= htmlElementNode.childNodes[0]
// console.log(textNod1);
// const bodyElementNode=htmlElementNode.childNodes[2];
// console.log(bodyElementNode);

// sibling relation

// console.log(cn.nextSibling);


















