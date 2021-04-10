import NotificationCard from "./notificationcard";
import { useState } from "react";
function Dashboard() {
    let notifications = [
        {
            title : "EARNINGS (MONTHLY)",
            value : 40000,
            currency : "$",
            icon : "fa-calendar",
            color : "primary"
        },
        {
            title : "EARNINGS (ANNUAL)",
            value : 215000,
            currency : "$",
            icon : "fa-dollar-sign",
            color : "success"
        },
        {
            title : "TASKS",
            value : 83,
            currency : "$",
            icon : "fa-clipboard-list",
            color : "info",
            isProgress : true
        },
        {
            title : "PENDING REQUESTS",
            value : 40000,
            currency : "$",
            icon : "fa-comments",
            color : "warning"
        }
    ]
    const [selectedCard,setSelectedCard] = useState("")

    let handleCard = (title) => {
        setSelectedCard(title)
    }
    return <>
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
            <a href="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                class="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
        </div>
        <div className="row">
            {
                notifications.map((item) => {
                    return <NotificationCard data={item} handleCardClick={handleCard} />
                })
            }
        </div>
        <div class="row">
            <h3>{selectedCard}</h3>
        </div>
    </>
}

export default Dashboard;