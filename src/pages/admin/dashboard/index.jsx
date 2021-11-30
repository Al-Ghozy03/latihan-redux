import React from "react";
import { Link } from "react-router-dom";

export default function Dashboard() {
    return(
        <React.Fragment>
            <p>Dashboard</p>
            <Link to="/tes">tes</Link>
            <Link to="/login">login</Link>
        </React.Fragment>
    )
}