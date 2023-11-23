"use client";
import Link from "next/link";
import React from "react";

export default function Home() {
  const [id, setId] = React.useState(1);
  const handleChange = (ev: React.FormEvent<HTMLInputElement>) => {
    setId(Number(ev.currentTarget.value));
  };

  return (
    <div>
      <h1>Welcome Home</h1>
      <input
        type="number"
        value={id}
        placeholder="Blog ID"
        className="pt-4 outline"
        onChange={handleChange}
      />
      <div className="pt-8">
        <Link href={`/blog/${id}`}>
          <button type="button">Visit Blog with ID {id}</button>
        </Link>
      </div>
    </div>
  );
}
