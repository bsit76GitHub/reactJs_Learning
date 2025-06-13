
// function List() {
//     const fruits = [
//         { id: 1, name: "apple", calories: 90 },
//         { id: 2, name: "orange", calories: 45 },
//         { id: 3, name: "banana", calories: 89 },
//         { id: 4, name: "coconut", calories: 67 },
//         { id: 5, name: "papaya", calories: 178 }
//     ];

//     // fruits.sort((a,b) => a.name.localeCompare(b.name)); //ALPHABETIC ORDER
//     // fruits.sort((a,b) => b.name.localeCompare(a.name)); //REVERSE ALPHABETIC ORDER
//     // fruits.sort((a,b) => a.calories - b.calories); //INCREASING CALORIES ORDER
//     // fruits.sort((a,b) =>  b.calories - a.calories); //DECREASING CALORIES  ORDER

//     // const lowCaloriesFruits = fruits.filter(fruit => fruit.calories <100);
//     // const listItems = lowCaloriesFruits.map(lowCaloriesFruits =>
//     //                    <li key={lowCaloriesFruits.id}>
//     //                    {lowCaloriesFruits.name} : &nbsp;
//     //                    <b>{lowCaloriesFruits.calories}</b>
//     //                    </li>);


//     // const highCaloriesFruits = fruits.filter(fruit => fruit.calories > 100);
//     // const listItems = highCaloriesFruits.map(highCaloriesFruits =>
//     //                    <li key={highCaloriesFruits.id}>
//     //                        {highCaloriesFruits.name} : &nbsp;
//     //                        <b>{highCaloriesFruits.calories}</b>
//     //                    </li>);


//     const listItems = fruits.map(fruit =>
//         <li key={fruit.id}>
//             {fruit.name} : &nbsp;
//             <b>{fruit.calories}</b>
//         </li>);

//     return (<ol>{listItems}</ol>)
// }
// export default List

//===================================
import PropTypes from 'type-check'
function List(props){

    const itemList = props.items;
    const category = props.category;

    const listItems = itemList.map(item => <li key={item.id}>
                                            {item.name}: &nbsp;
                                            <b>{item.calories}</b>
                                        </li>);

    return( <> 
        <h3 className="item-category">{category}</h3>
        <ol className="item-list">{listItems}</ol>
    </>);

}

// List.propTypes = {
//     category: PropTypes.string,
//     items: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number,
//                                             name: PropTypes.string,
//                                             calories: PropTypes.number })),
// }

List.defaultProps = {
    category: "Category",
    items: [],
}
export default List