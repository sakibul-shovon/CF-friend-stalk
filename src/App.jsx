// src/App.jsx
import React, { useState } from 'react';
import axios from 'axios';

const defaultHandles = [
 //write handle 
];

export default function App() {
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [results, setResults] = useState([]);

  const fetchSubmissions = async () => {
    const formattedDate = new Date(date);
    const allResults = [];

    for (const handle of defaultHandles) {
      try {
        const res = await axios.get(`https://codeforces.com/api/user.status?handle=${handle}`);
        const submissions = res.data.result;

        const filtered = submissions.filter(sub => {
          const submissionDate = new Date(sub.creationTimeSeconds * 1000);
          return (
            sub.verdict === 'OK' &&
            submissionDate.toDateString() === formattedDate.toDateString()
          );
        });

        // Deduplicate solved problems by contestId + index
        const uniqueProblems = new Map();
        filtered.forEach(f => {
          const key = `${f.problem.contestId}-${f.problem.index}`;
          if (!uniqueProblems.has(key)) {
            uniqueProblems.set(key, {
              name: f.problem.name,
              url: `https://codeforces.com/problemset/problem/${f.problem.contestId}/${f.problem.index}`,
              rating: f.problem.rating || 'N/A',
              tags: f.problem.tags?.join(', ') || 'No tags'
            });
          }
        });

        if (uniqueProblems.size > 0) {
          allResults.push({
            handle,
            solved: Array.from(uniqueProblems.values())
          });
        }
      } catch (err) {
        console.error(`Error fetching for ${handle}:`, err.message);
      }
    }

    setResults(allResults);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Codeforces Friends Tracker</h1>
      <input
        type="date"
        value={date}
        onChange={e => setDate(e.target.value)}
        className="border p-2 w-full mb-4 rounded"
      />
      <button
        onClick={fetchSubmissions}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Fetch Solved Problems
      </button>

      <div className="mt-6">
        {results.map(({ handle, solved }, idx) => (
          <div key={idx} className="mb-4 p-4 border rounded">
            <h2 className="font-semibold text-lg">{handle}</h2>
            <ul className="list-disc list-inside">
              {solved.map((prob, i) => (
                <li key={i}>
                  <a href={prob.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    {prob.name}
                  </a>
                  <span className="text-sm text-gray-600"> — Rating: {prob.rating} | Tags: {prob.tags}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
