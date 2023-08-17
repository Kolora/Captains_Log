import React from "react";

export default function Index({ log }) {
  return (
    <div>
      <ul>
        {log.map((element) => (
          <li>
            {element.title} <a href={`logs/${element._id}`}>Details</a>
          </li>
        ))}
      </ul>
      <a href="/logs/new">Create</a>
    </div>
  );
}
