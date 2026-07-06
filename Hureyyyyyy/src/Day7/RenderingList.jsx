import UserCard from "./UserCard"

let myObjList = [
    {
        full_name: "Dipak Stha",
        roll_no: 23,
        status: true,
        marks: 456.98,
    },
    {
        full_name: "Pradip Stha",
        roll_no: 35,
        status: false,
        marks: 456.98,
    }
]
let RenderingListOfObject = () => {
    return (
        <div>
            <h1>Profile</h1>
            {
                myObjList.map(
                    (myObj, index) => {
                        return (
                            <UserCard
                            key={`${index}-${myObj.full_name}`}
                            fullName={myObj.full_name}
                            status={myObj.status}
                            onClick={()=>{
                                alert(`${myObj.full_name}`)
                            }}
                            />
                        )
                    }
                )
            }
        </div>
    )
}
export default RenderingListOfObject