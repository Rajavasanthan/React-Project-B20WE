import { useContext, useState } from "react"
import UserContext from "./usercontext";
import { useHistory } from 'react-router-dom';


export default function CreateUser(props) {
    let [userName, setUserName] = useState("");
    let [userEmail, setUserEmail] = useState("");
    let [userCountry, setUserCountry] = useState("");
    let [userState, setUserState] = useState("");
    let [userCity, setUserCity] = useState("");

    let data = useContext(UserContext)
    const history = useHistory();

    let handleSubmit = async () => {
        await fetch("https://5cdd0a92b22718001417c19d.mockapi.io/api/users", {
            method: "POST",
            body: JSON.stringify({
                userName,
                userEmail,
                userCountry,
                userState,
                userCity
            }),
            headers: {
                "Content-type": "application/json"
            }
        })
        data.setUserData([...data.userData, {
            id: data.userData.length + 1,
            userName,
            userEmail,
            userCountry,
            userState,
            userCity
        }])
        history.push("/manage-users");
    }

    return <>
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