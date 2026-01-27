import { useEffect, useState } from "react";
import api from "../api/axios";

export default function AdminClasses() {
  const [classes, setClasses] = useState([]);

  

  useEffect(() => {
    const loadClasses = async () => {
        const res = await api.get("/classes/get-classes");
        setClasses(res.data?.data || []);
    };
    loadClasses();
  }, []);
  return (
    <div className="min-h-screen bg-gray-500 p-8 text-white flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">Join Classes</h1>
      {/* List */}
      <div className="grid md:grid-cols-3 gap-6 ">
        {classes.map(c => (
          <div key={c._id} className="bg-white p-6 rounded-xl relative h-auto">
            <h2 className="font-semibold">{c.title}</h2>
            <p className="text-gray-900">Trainer : {c.trainer} • {c.schedule}</p>
            <p className="text-gray-900">Scheduled : {c.schedule}</p>

            <p className="text-gray-900">Description : {c.description}</p>
            <button
              className="mt-4 bg-red-600 px-3 py-1 rounded hover:bg-red-700">
              Join Class
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
