import React from "react";

export default function Details({ params }) {
  const id = params.id;
  return (
    <section>
      {id}
      <div>page</div>
    </section>
  );
}
