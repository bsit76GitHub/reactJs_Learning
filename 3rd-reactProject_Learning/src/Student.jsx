
// proptypes = a mechanism that ensures that the passed value
//              is of the correct datatype.
//             age : PropTypes.number

// defaultProps = default values for Props in case they are not
//                not passed from the Perent Component
//               name: "Guest"


import PropTypes from 'type-check'

function Student(props) {
    return (<>
        <div className="studentrecordCard">
            <p>Name : {props.name}</p>
            <p>Age : {props.age}</p>
            <p>Student : {props.isStudent ? "Yes" : "No"}</p>
        </div>
    </>);
}
Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.boolean,
}
Student.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false,
}

export default Student