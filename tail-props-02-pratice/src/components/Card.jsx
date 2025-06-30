
function Card(props) {
     const username = props.someObj.userName || "User Name";
     const Course = props.someObj.course || "Graduate";

    return (<>
       
        <div className="card-container rounded-xl p-3 text-white flex flex-col">
            <img src="src/assets/profilePic.jpeg" alt="profileImage" className="items-center mb-1 "  />
            <div className="details-box bg-gray-500 ">
                <h6 className="font-extrabold">{username}</h6>
                <p>{Course}</p>
                <button className="text-1xl mb-1">view Profile</button>
            </div>
        </div>

    </>);
}
export default Card