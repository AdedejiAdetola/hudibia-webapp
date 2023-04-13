const Dashboard = () => {
    const user = JSON.parse(localStorage.getItem('profile'));
    console.log(user)
    return(
        <div>
            Welcome {user.result.firstName}
        </div>
    );


}

export default Dashboard;