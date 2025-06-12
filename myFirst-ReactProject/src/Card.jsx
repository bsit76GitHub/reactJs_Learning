import profilePic from './assets/profilePic.jpeg'
function Card(){
return(
    <div className="card">
        <img className='card-img' src={profilePic} alt="profileImage" srcset="" />
        <h3 className='card-title'> Card Title Name</h3>
        <p className='card-decsription' >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit possimus molestiae dolor eos. Doloremque officia molestias assumenda, impedit et explicabo?</p>
    </div>
);
}

export default Card