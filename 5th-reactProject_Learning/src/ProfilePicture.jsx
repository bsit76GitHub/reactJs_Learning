
// function ProfilePicture(){
//     const imageUrl = './src/assets/profilePic.jpeg';

//     const handleClick = () => console.log("OUCH!🙈");

//     return(<img onClick = {handleClick} src={imageUrl}></img>);
// }
// export default ProfilePicture

//==============================
function ProfilePicture(){
    const imageUrl = './src/assets/profilePic.jpeg';

    const handleClick = (e) => e.target.style.display = "none";

    return(<img onClick={(e) => handleClick(e)} src={imageUrl}></img>)
}
export default ProfilePicture