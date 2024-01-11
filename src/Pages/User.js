import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';


function User() {
    const [data, setData] = useState([])
    const [mode, setMode] = useState("Online")
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => {
                setData(json)
                localStorage.setItem("user", JSON.stringify(json))
            })
            .catch((err) => {
                setMode("offline")
                const userData = localStorage.getItem("user")
                setData(JSON.parse(userData))
            })
    }, [])
    return (
        <>
            <div>
                {mode === "offline" ? "your in offline mode " : null}
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) =>
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                        </tr>)}


                </tbody>
            </Table>
        </>

    )
}

export default User
