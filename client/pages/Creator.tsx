import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Creator() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Ebook Creator</h1>
        
        <Card>
          <CardHeader>
            <CardTitle>Create Your Ebook</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Title</label>
              <Input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter your ebook title"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Author</label>
              <Input
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                placeholder="Enter author name"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Content</label>
              <Textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Start writing your ebook content..."
                rows={10}
              />
            </div>
            
            <div className="flex gap-4">
              <Button className="bg-gradient-to-r from-purple-600 to-blue-600">
                Save Draft
              </Button>
              <Button variant="outline">
                Preview
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
