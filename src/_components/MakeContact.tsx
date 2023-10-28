'use client';
import * as React from 'react';

export default function MakeContact({ saveContact }: { saveContact: any }) {
  const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    saveContact({
      test: 'Hello world',
    });
  };

  return (
    <div>
      {/* @ts-ignore */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="username"
          className="block border-2 my-5 p-2 rounded-sm"
        />
        <input
          type="text"
          placeholder="lastname"
          className="block border-2 my-5 p-2 rounded-sm"
        />
        <input
          type="text"
          placeholder="email"
          className="block border-2 my-5 p-2 rounded-sm"
        />
        <input
          type="text"
          placeholder="avatar"
          className="block border-2 my-5 p-2 rounded-sm"
        />
        <button type="submit" className="w-full bg-slate-900 text-white">
          Submit
        </button>
      </form>
    </div>
  );
}
