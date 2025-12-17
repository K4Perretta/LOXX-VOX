import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const projects = [
  { id: 1, title: "My First Ebook", author: "John Doe", status: "Draft" },
  { id: 2, title: "Advanced Guide", author: "Jane Smith", status: "Published" },
  { id: 3, title: "Cookbook Deluxe", author: "Chef Mike", status: "In Review" },
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">My Projects</h1>
          <Button className="bg-gradient-to-r from-purple-600 to-blue-600">
            New Project
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.id}>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2">by {project.author}</p>
                <span className="inline-block px-2 py-1 text-sm rounded-full bg-blue-100 text-blue-800">
                  {project.status}
                </span>
                <div className="mt-4 flex gap-2">
                  <Button size="sm" variant="outline">Edit</Button>
                  <Button size="sm">View</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
