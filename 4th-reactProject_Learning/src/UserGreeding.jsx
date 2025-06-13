
import PropTypes from 'type-check';

function UserGreeding(props) {

    // if (props.islogedin) {
    //     return <p>Welcome {props.username}</p>
    // } else {
    //     return <p>Please login to continue.</p>
    // }
    //=========================================
    // if (props.islogedin) {
    //     return <p>Welcome {props.username}</p>
    // }
    // return <p>Please login to continue.</p>
    //================================================
    // return (props.islogedin ? <p className="welcome-message">Welcome {props.username}</p> : <p className="login-prompt">Please login to continue.</p> );
    // =======================================================
    const welcomeMessage = <p className="welcome-message">Welcome {props.username}</p>
    const loginPrompt = <p className="login-prompt">Please login to continue.</p>
    return (props.islogedin ? welcomeMessage : loginPrompt);

}
UserGreeding.proptypes = {
    islogedin: PropTypes.bool,
    username: PropTypes.string,
}
UserGreeding.defaultProps = {
    islogedin: false,
    username: "Guest",
}

export default UserGreeding