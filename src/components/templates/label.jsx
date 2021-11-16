import React from "react";

export default function Label({label, children}) {
    return(
        <React.Fragment>
            <label htmlFor={label} className="font-bold text-gray-700">{children}</label>
        </React.Fragment>
    )
}