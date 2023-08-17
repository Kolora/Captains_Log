import React from "react";

export default function Show({element}) {
    return(
        <div>
            <h1>{element.title}</h1>
            <h3>{element.entry}</h3>
            <br />
            <p>{element.shipIsBroken ? 'The Ship is Broken' : 
            'The Ship is not Broken'}</p>
            <h4>{element.createdAt.toISOString().slice(0, 16)}</h4>
            <a href='/logs'>
                <button>Back</button>
            </a>
        </div>
    )
}
