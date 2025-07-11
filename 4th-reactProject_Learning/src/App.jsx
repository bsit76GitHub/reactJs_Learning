
// // conditional rendering = allows you to control what gets rendered
// //                         in your application based on certain conditions
// //                         (show,hide,or change components)

// import UserGreeding from "./UserGreeding"
// function App() {
//   return (
//     <>
//       <UserGreeding islogedin={false} username="Pankaj" />
//       <UserGreeding islogedin={true} username = "Rahul Kumar" />
//     </>
//   )
// }

// export default App

//=========================================================================

// import List from './List'
// function App() {
//   return (
//     <List />
//   );
// }
// export default App

// ======================================
import List from './List'
function App() {

  const fruits = [
    { id: 1, name: "apple", calories: 95},
    { id: 2, name: "orange", calories: 45 },
    { id: 3, name: "banana", calories: 89 },
    { id: 4, name: "coconut", calories: 67 },
    { id: 5, name: "papaya", calories: 178 },
  ];
  const vegitables = [
    { id: 6, name: "Patato", calories: 200 },
    { id: 7, name: "brocoli", calories: 35 },
    { id: 8, name: "carroits", calories: 90 },
    { id: 9, name: "corn", calories: 87 },
    { id: 10, name: "celery", calories: 58 },
  ];

  return (
    <>
      {fruits.length > 0 ? <List items={fruits} category="Fruits :" /> : null}
      {vegitables.length > 0 ? <List items={vegitables} category="Vagitables :" /> : null}

      {/* Alternate method of TERNARY OPRATOR */}
      {/* 
      {fruits.length > 0 && <List items={fruits} category="Fruits :" /> }
      {vegitables.length > 0 && <List items={vegitables} category="Vagitables :" /> } 
      */}


    </>
  );
}
export default App