function UserProfile({name,profileImg,email,course,institute,contact}) {


  return (
    <div style={{border:"1px solid black",borderRadius:"50px"}}>
      <h1>Profile</h1>
      <div style={{display:'flex',alignItems:'center'}}>
        <img style={{width:'150px'}} src={profileImg} alt="img" />
        <div>
          <ul>
           { name && <li>{name}</li>}
            <li>{course}</li>
            <li>{institute}</li>
            <li>{email}</li>
            <li>{contact}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
