import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-6xl font-bold text-center mb-8 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          Premium Ebook Creator
        </h1>
        <p className="text-xl text-center text-gray-600 mb-12">
          Create beautiful, professional ebooks with ease
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Link to="/creator">
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-3">Create New Ebook</h3>
              <p className="text-gray-600">Start creating your professional ebook with our intuitive editor</p>
            </div>
          </Link>
          
          <Link to="/projects">
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-3">My Projects</h3>
              <p className="text-gray-600">View and manage all your ebook projects</p>
            </div>
          </Link>
          
          <Link to="/planner">
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-3">Content Planner</h3>
              <p className="text-gray-600">Plan and organize your ebook content structure</p>
            </div>
          </Link>
        </div>
        
        <div className="text-center">
          <Link to="/creator">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
              Get Started Now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
