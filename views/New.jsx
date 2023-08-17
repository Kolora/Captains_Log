import React from "react";

export default function New() {
  return (
    <div>
      <form action="/logs" method="POST">
        <input type="text" name="title"></input>
        <input type="textarea" name="entry" rows="1" cols="1"></input>
        <input type="checkbox" name="shipIsBroken"></input>
        <input type="submit"></input>
      </form>
    </div>
  );
}
