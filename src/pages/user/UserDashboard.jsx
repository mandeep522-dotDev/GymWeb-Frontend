import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function UserDashboard() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (!user) navigate("/login");
  }, [user, navigate]);
  

  return (
    <>
      <h2 className="text-3xl font-bold mb-6">My Dashboard</h2>

      {/* USER INFO CARD */}
      <div className="bg-white rounded-xl shadow p-6 mb-6">
        <h3 className="text-xl font-semibold mb-4">Profile Information</h3>

        <div className="space-y-2">
          <p>
            <b>Name:</b> {user?.name}
          </p>
          <p>
            <b>Email:</b> {user?.email}
          </p>
          <p>
            <b>Role:</b> {user?.role}
          </p>
        </div>
      </div>

      {/* STATS */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow">
          <h4 className="text-gray-500">Enrolled Classes</h4>
          <p className="text-3xl font-bold">0</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h4 className="text-gray-500">Membership</h4>
          <p>
            <b>Membership:</b>{" "}
            <span
              className={
                user?.membership === "active"
                  ? "text-green-600"
                  : "text-red-600"
              }
            >
              {user?.membership}
            </span>
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h4 className="text-gray-500">Next Class</h4>
          <p className="font-semibold">Not Scheduled</p>
        </div>
      </div>
    </>
  );
}
