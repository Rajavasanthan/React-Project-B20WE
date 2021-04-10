import { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "./usercontext";
export default function ManageUsers() {

    let data = useContext(UserContext)


    return <>
        <div className="row">
            <div className="col-lg-12">
                <Link to="/create-users" className="btn btn-primary">Create User</Link>
            </div>
        </div>
        <div class="card shadow mb-4">
            <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Position</th>
                                <th>Office</th>
                                <th>Age</th>
                                <th>Start date</th>
                                <th>Salary</th>
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <th>Name</th>
                                <th>Position</th>
                                <th>Office</th>
                                <th>Age</th>
                                <th>Start date</th>
                                <th>Salary</th>
                            </tr>
                        </tfoot>
                        <tbody>
                            {
                                data.userData.map((user) => {
                                    return <tr>
                                        <td>{user.userName}</td>
                                        <td>{user.userEmail}</td>
                                        <td>{user.userCountry}</td>
                                        <td>{user.userCity}</td>
                                        <td>{user.userState}</td>
                                       <td>
                                           <button className="btn btn-sm btn-primary">Edit</button>
                                           <button className="btn btn-sm btn-danger">Delete</button>
                                           </td>
                                    </tr>
                                })
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </>
}