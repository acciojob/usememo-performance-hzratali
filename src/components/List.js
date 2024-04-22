import React, { memo } from "react";

const List = memo(function List({ items }) {
  console.log(
    "[ARTIFICIALLY SLOW] Rendering <List /> with " + items.length + " items"
  );
  let startTime = performance.now();

  setTimeout(() => {}, 10000);

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.completed ? <s>{item.text}</s> : item.text}</li>
      ))}
    </ul>
  );
});

export default List;
