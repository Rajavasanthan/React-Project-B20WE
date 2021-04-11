import { useContext, useEffect, useState } from "react";
import UserContext from "./usercontext";

export default function EditUser(props){
    let UserId = props.match.params.id;
    let [userName, setUserName] = useState("");
    let [userEmail, setUserEmail] = useState("");
    let [userCountry, setUserCountry] = useState("");
    let [userState, setUserState] = useState("");
    let [userCity, setUserCity] = useState("");

    let data = useContext(UserContext);

    useEffect(() => {
        // Do this
        let selectedData = data.userData.find(obj => obj.id == UserId);
        setUserName(selectedData.userName)
        setUserEmail(selectedData.userEmail)
        setUserCountry(selectedData.userCountry)
        setUserState(selectedData.userState)
        setUserCity(selectedData.userCity)
    },[]) // Did Mount

    useEffect(() => {
        // This will execute when userName value changes
        if(userName == "Vasanth"){
            alert("Not Allowed")
            setUserName("")
        }
    },[userName]) // On Update

    useEffect(() => {

    },[userEmail])

    useEffect(() => {
        
        // before destroy
        return () => {
            // alert("Bye Bye")
        }
    },[]) // On Destroy




    let handleSubmit = () => {
        let selectedDataIndex = data.userData.findIndex(obj => obj.id == UserId);
        console.log(selectedDataIndex)
        console.log(data.userData)
        let afterRemove = data.userData.splice(selectedDataIndex,1);
        console.log(afterRemove)
        data.setUserData([...afterRemove])
        data.setUserData([...afterRemove,{
                id : UserId,
                userName,
                userEmail,
                userCountry,
                userState,
                userCity
            }])
        // data.setUserData([...data.userData, {
        //     id : data.userData.length + 1,
        //     userName,
        //     userEmail,
        //     userCountry,
        //     userState,
        //     userCity
        // }])
    }


    return <>
    {UserId}
    <div className="row">
        <div className="col-lg-6">
            <label>User Name</label>
            <input type="text" className="form-control" value={userName} onChange={(e) => setUserName(e.target.value)} />
        </div>
        <div className="col-lg-6">
            <label>Email</label>
            <input type="text" className="form-control" value={userEmail} onChange={(e) => setUserEmail(e.target.value)} />
        </div>
    </div>
    <div className="row">
        <div className="col-lg-4">
            <label>Country</label>
            <input type="text" className="form-control" value={userCountry} onChange={(e) => setUserCountry(e.target.value)} />
        </div>
        <div className="col-lg-4">
            <label>State</label>
            <input type="text" className="form-control" value={userState} onChange={(e) => setUserState(e.target.value)} />
        </div>
        <div className="col-lg-4">
            <label>City</label>
            <input type="text" className="form-control" value={userCity} onChange={(e) => setUserCity(e.target.value)} />
        </div>
    </div>
    <div className="row mt-3">
        <div className="col-lg-12">
            <input className="btn btn-primary" type="submit" onClick={handleSubmit} />
        </div>
    </div>
</>
}