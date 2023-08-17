import React from "react";

export default function Index({ log }) {
  return (
    <div>
      <ul>
        {log.map((element) => (
          <li>
            {element.title}
            <br />
            <a href={`logs/${element._id}`}>Details</a>
            <br />
            <form action={`logs/${element._id}?_method=DELETE`} method="POST">
              <button>Delete</button>
            </form>
            <a href={`logs/${element._id}/edit`}>
              <button>Edit</button>
            </a>
          </li>
        ))}
      </ul>
      <a href="/logs/new">Create</a>
    </div>
  );
}
