import { useContext, useState } from "react"
import UserContext from "./usercontext";

export default function CreateUser() {
    let [userName, setUserName] = useState("");
    let [userEmail, setUserEmail] = useState("");
    let [userCountry, setUserCountry] = useState("");
    let [userState, setUserState] = useState("");
    let [userCity, setUserCity] = useState("");

    let data = useContext(UserContext)

    let handleSubmit = () => {
        data.setUserData([...data.userData, {
            userName,
            userEmail,
            userCountry,
            userState,
            userCity
        }])
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