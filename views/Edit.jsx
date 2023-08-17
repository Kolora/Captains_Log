import React from "react";

export default function Edit({log}){
    return (
        <div>
            <form action={`/logs/${log._id}?_method=PUT`} method="POST">
                <input type="text" name='title' defaultValue={log.title}></input>
                <input type="textarea" name='entry' rows="1" cols="1" defaultValue={log.entry}></input>
                <input type="checkbox" defaultChecked={log.shipIsBroken} name='shipIsBroken'></input>
                <input type='submit'></input>
            </form>
        </div>
    )
}
