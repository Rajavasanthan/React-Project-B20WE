function NotificationCard(props) {

    return <>
        <div class="col-xl-3 col-md-6 mb-4" style={{cursor:"pointer"}} onClick={() => props.handleCardClick(props.data.title)}>
            <div className={`card shadow h-100 py-2 border-left-${props.data.color}`}>
                <div class="card-body">
                    <div class="row no-gutters align-items-center">
                        {
                            props.data.isProgress ? <div class="col mr-2">
                                <div class="text-xs font-weight-bold text-info text-uppercase mb-1">Tasks
                                            </div>
                                <div class="row no-gutters align-items-center">
                                    <div class="col-auto">
                                        <div class="h5 mb-0 mr-3 font-weight-bold text-gray-800">{props.data.value}%</div>
                                    </div>
                                    <div class="col">
                                        <div class="progress progress-sm mr-2">
                                            <div class="progress-bar bg-info" role="progressbar"
                                                style={{width: `${props.data.value}%`}} aria-valuenow="50" aria-valuemin="0"
                                                aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                </div>
                            </div> : <div class="col mr-2">
                                <div className={`text-xs font-weight-bold text-uppercase mb-1 text-${props.data.color}`}>
                                    {props.data.title}</div>
                                <div class="h5 mb-0 font-weight-bold text-gray-800">{props.data.currency}{props.data.value}</div>
                            </div>

                        }
                        <div class="col-auto">
                            <i className={`fas fa-2x text-gray-300 ${props.data.icon}`}></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default NotificationCard;