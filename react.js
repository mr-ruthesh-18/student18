import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

function DashboardHome() {
  return (
    <div>
      <h2 className="text-2xl font-bold">Welcome back, Ruthesh Kumar</h2>
      <p className="text-gray-500">Always stay updated in your student portal</p>
    </div>
  );
}

function PaymentInfo() {
  return <h2 className="text-2xl">Payment Information Page</h2>;
}

function Registration() {
  return <h2 className="text-2xl">Registration Page</h2>;
}

function Courses() {
  return <h2 className="text-2xl">Courses Page</h2>;
}

function DropSemester() {
  return <h2 className="text-2xl">Drop Semester Page</h2>;
}

function Result() {
  return <h2 className="text-2xl">Result Page</h2>;
}

function Notice() {
  return <h2 className="text-2xl">Notice Board Page</h2>;
}

function Schedule() {
  return <h2 className="text-2xl">Schedule Page</h2>;
}

export default function Dashboard() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 p-6 flex">
        {/* Sidebar */}
        <aside className="w-64 h-screen bg-gradient-to-b from-red-500 to-pink-500 p-4 text-white rounded-2xl">
          <div className="mb-10">
            <div className="flex items-center space-x-3">
              <img src="/logo.png" alt="Logo" className="w-10 h-10" />
              <span className="font-bold text-xl">Dashboard</span>
            </div>
          </div>
          <nav className="space-y-6">
            <Link to="/" className="block">Dashboard</Link>
            <Link to="/payment" className="block">Payment Info</Link>
            <Link to="/registration" className="block">Registration</Link>
            <Link to="/courses" className="block">Courses</Link>
            <Link to="/drop-semester" className="block">Drop Semester</Link>
            <Link to="/result" className="block">Result</Link>
            <Link to="/notice" className="block">Notice</Link>
            <Link to="/schedule" className="block">Schedule</Link>
            <a href="#" className="block text-red-300">Logout</a>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 ml-8">
          <Routes>
            <Route path="/" element={<DashboardHome />} />
            <Route path="/payment" element={<PaymentInfo />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/drop-semester" element={<DropSemester />} />
            <Route path="/result" element={<Result />} />
            <Route path="/notice" element={<Notice />} />
            <Route path="/schedule" element={<Schedule />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
