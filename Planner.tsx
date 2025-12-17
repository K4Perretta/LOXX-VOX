import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const chapters = [
  { id: 1, title: "Introduction", status: "Completed" },
  { id: 2, title: "Chapter 1: Getting Started", status: "In Progress" },
  { id: 3, title: "Chapter 2: Advanced Concepts", status: "Not Started" },
  { id: 4, title: "Chapter 3: Practical Examples", status: "Not Started" },
  { id: 5, title: "Conclusion", status: "Not Started" },
];

export default function Planner() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Content Planner</h1>
        
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Ebook Structure</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {chapters.map((chapter) => (
                <div key={chapter.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <h3 className="font-medium">{chapter.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    chapter.status === 'Completed' ? 'bg-green-100 text-green-800' :
                    chapter.status === 'In Progress' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {chapter.status}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}