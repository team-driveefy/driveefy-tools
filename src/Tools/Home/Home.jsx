import Tool_icon from "../../assets/icons/Tools.png"
import { BarChart, Activity, Zap, Book } from 'lucide-react';
import { Link } from "react-router-dom";
import React from 'react'
const Home = () => {
  return (
    <div className="flex min-h-screen p-6 gap-6">
      <div className=" w-full flex justify-center items-center h-auto">
        <div className="w-1/4">
            <img src={Tool_icon} alt="Tools" className="w-full h-auto" />
        </div>
      </div>
      <div className="w-3/4 grid grid-cols-2 gap-4">
        <Link to="/CustomerTickets">
            <div className="bg-blue-100 p-6 rounded-lg shadow flex flex-col items-center text-center">
                <BarChart className="w-12 h-12 mb-2" />
                <h2 className="text-xl font-bold mb-2">Analytics Dashboard</h2>
                <p className="text-gray-600">Track key metrics, user engagement, and performance statistics in real-time</p>
            </div>
        </Link>

        <Link to="/CustomerTickets">
            <div className="bg-green-100 p-6 rounded-lg shadow flex flex-col items-center text-center">
                <Activity className="w-12 h-12 mb-2" />
                <h2 className="text-xl font-bold mb-2">Recent Activity</h2>
                <p className="text-gray-600">Monitor latest updates, changes, and user interactions across the platform</p>
            </div>
        </Link>

        <Link to="/CustomerTickets">
            <div className="bg-yellow-100 p-6 rounded-lg shadow flex flex-col items-center text-center">           
                <Zap className="w-12 h-12 mb-2" />
                <h2 className="text-xl font-bold mb-2">Customer Issues</h2>
                <p className="text-gray-600">Here You can able to see the issues raised by the customer.</p>
            </div>
        </Link>
        
        
        <Link to="/CustomerTickets">
            <div className="bg-purple-100 p-6 rounded-lg shadow flex flex-col items-center text-center">
                <Book className="w-12 h-12 mb-2" />
                <h2 className="text-xl font-bold mb-2">Blogs</h2>
                <p className="text-gray-600">From Here you can able to post the blogs.</p>
            </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;