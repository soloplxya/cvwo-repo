import React from 'react'

const Dashboard = props => {
    return (
        <main>
            <h1> Dashboard </h1>
            <h2> Status: {props.loggedInStatus }</h2>
        </main>
    )
}

export default Dashboard; 