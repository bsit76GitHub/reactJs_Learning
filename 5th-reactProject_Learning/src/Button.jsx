
// function Button(){

//     const handleClick = () => console.log("OUTCH 🤪")

//     const handleClick2 = (name) => console.log(`${name} stop clicking me`);
//     return(<button onClick={() => handleClick2("Bro")}>click me 😁</button>)
// }
// export default Button


// function Button(){

//     let count = 0;
//     const handleClick = (name) => {
//         if(count <3){
//             count++;
//             console.log(`${name} you clicked me ${count} time/s`);
//         }
//         else {
//             console.log(`${name} stop clicking me !.`);
//         }
//     };
//  return(<button onClick={() => handleClick("Bro")}>Click me 😀</button>);
// }
// export default Button

// === event parameter=====================


// function Button() {

//     const handleClick = (e) => console.log(e);

//     return (<button onClick={(e) => handleClick(e)}> Click Me 😀 </button>);
// }
// export default Button

// chage text content onclick
// function Button() {

//     const handleClick = (e) => e.target.textContent ="OUCH🤪";

//     return (<button onClick={(e) => handleClick(e)}> Click Me 😀 </button>);
// }
// export default Button

//=====================================
function Button() {

    const handleClick = (e) => e.target.textContent ="OUCH❤️";

    return (<button onClick={(e) => handleClick(e)}> Click Me 👍🏻 </button>);
}
export default Button