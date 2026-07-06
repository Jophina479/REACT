const UserCard=({fullName,status,onClick})=>{
    return(
        <div 
        style={{
            backgroundColor:"teal",
            Color:"white",
            padding:"10px",
            borderRadius:"10px",
            margin:"5px"}}>
        <h4>FULL NAME:{fullName}</h4>
        <i>Status:{status ? <u>Active</u> : <u>Inactive</u>}</i>
        <br/>
        <button onClick={onClick}>Click Me</button>
        </div>
        
    );
};
export default UserCard;