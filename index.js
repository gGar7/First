/*function x() {
    var a = 7;
    function y() {
        console.log(a);
    }
    a = 100;
    return y;
}
var z = x(); // yaha par sirf function x hi nahi return hokar aaya ha but samjho pura closure return hua ha matlab z ko invoke karna
// par a abhi bhi acess hoga that is print hoga.
console.log(z);
z();
*/
// function x() {
//     for (var i = 1; i <= 5; i++) {
//         function close(t) {
//             setTimeout(function () {
//                 console.log(t);
//             }, t * 1000);
//         }
//         close(i);
//     }

//     console.log("GAUTAM AGARWAL");
//     // javascript dont wait for any one isliye Gautam Agarwal pehle print hoga
// }
// x();

const mybtn = document.getElementById("mybtn");
mybtn.onclick= hello;
const mybtn1=document.getElementById("mybtn1");
mybtn1.onclick=solve;
 function hello()
 {
    console.log("clicked");
   const h1= document.querySelector("h1");
   h1.innerHTML="Gautam Agarwal";
   document.body.style.backgroundColor="yellow";
   mybtn.style.backgroundColor="green";
 }
 function solve()
 {
    console.log("solved");
    const h1=document.querySelector("h1");
    h1.innerText="Check my name";
    document.body.style.backgroundColor="white";
    mybtn1.style.backgroundColor="green";
 }

 
 
