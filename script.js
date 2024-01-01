// function a(){
//     var b=100;
//     return function c(){
//         console.log(b);
//     }
// }

// var d=a();
// d();
// function abc()
// {
//     for(var i=1;i<=5;i++)
//     {
//         setTimeout(function cd(){
//             console.log(i);
//         }, i*1000);
//     }
//     console.log("Welcome to js");
// }
// abc();
// function abc()
// {
//     for(let i=1;i<=5;i++)
//     {
//         setTimeout(function cd(){
//             console.log(i);
//         }, i*1000);
//     }
//     console.log("Welcome to js");
// }
// abc();
function abc() {
  for (var i = 1; i <= 5; i++) {
    function sd(i) {
      setTimeout(function cd() {
        console.log(i);
      }, i * 1000);
    }
    sd(i)
  }
  console.log("Welcome to js");
}
abc();
