# DO NOT USE — legacy HTML: standalone.html

This file is an archived legacy version. Keep for reference only.

Original `standalone.html` content:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Premium Ebook Creator</title>
    <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/react-router-dom@6/umd/react-router-dom.development.js"></script>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700&family=Playfair+Display:wght@600;700;800&display=swap" rel="stylesheet">
    <style>
        * {
            font-family: 'Sora', system-ui, sans-serif;
        }
        h1, h2, h3, h4, h5, h6 {
            font-family: 'Playfair Display', serif;
            font-weight: bold;
        }
        :root {
            --background: 0 0% 99.5%;
            --foreground: 220 20% 15%;
            --primary: 263 70% 50%;
            --secondary: 200 60% 55%;
        }
        .bg-gradient-to-r {
            background-image: linear-gradient(to right, var(--tw-gradient-stops));
        }
        .from-purple-600 {
            --tw-gradient-from: #9333ea;
        }
        .to-blue-600 {
            --tw-gradient-to: #2563eb;
        }
    </style>
<script src="https://sites.super.myninja.ai/_assets/ninja-daytona-script.js"></script>
</head>
<body class="bg-gradient-to-br from-purple-50 to-blue-50">
    <div id="root"></div>
    
    <script type="text/javascript">
        const { useState } = React;
        const { BrowserRouter, Routes, Route, Link } = ReactRouterDOM;
        
        function HomePage() {
            return React.createElement('div', { className: "min-h-screen p-8" },
                React.createElement('div', { className: "max-w-4xl mx-auto" },
                    React.createElement('h1', { className: "text-6xl font-bold text-center mb-8 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent" }, "Premium Ebook Creator"),
                    React.createElement('p', { className: "text-xl text-center text-gray-600 mb-12" }, "Create beautiful, professional ebooks with ease"),
                    
                    React.createElement('div', { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12" },
                        React.createElement(Link, { to: "/creator" },
                            React.createElement('div', { className: "bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow" },
                                React.createElement('h3', { className: "text-xl font-semibold mb-3" }, "Create New Ebook"),
                                React.createElement('p', { className: "text-gray-600" }, "Start creating your professional ebook with our intuitive editor")
                            )
                        ),
                        React.createElement(Link, { to: "/projects" },
                            React.createElement('div', { className: "bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow" },
                                React.createElement('h3', { className: "text-xl font-semibold mb-3" }, "My Projects"),
                                React.createElement('p', { className: "text-gray-600" }, "View and manage all your ebook projects")
                            )
                        ),
                        React.createElement(Link, { to: "/planner" },
                            React.createElement('div', { className: "bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow" },
                                React.createElement('h3', { className: "text-xl font-semibold mb-3" }, "Content Planner"),
                                React.createElement('p', { className: "text-gray-600" }, "Plan and organize your ebook content structure")
                            )
                        )
                    ),
                    
                    React.createElement('div', { className: "text-center" },
                        React.createElement(Link, { to: "/creator" },
                            React.createElement('button', { className: "px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-colors font-medium" }, "Get Started Now")
                        )
                    )
                )
            );
        }
        
        function CreatorPage() {
            const [title, setTitle] = useState("");
            const [author, setAuthor] = useState("");
            const [content, setContent] = useState("");
            
            return React.createElement('div', { className: "min-h-screen p-8" },
                React.createElement('div', { className: "max-w-4xl mx-auto" },
                    React.createElement('h1', { className: "text-4xl font-bold mb-8" }, "Ebook Creator"),
                    
                    React.createElement('div', { className: "bg-white rounded-lg shadow-lg p-6" },
                        React.createElement('h2', { className: "text-2xl font-semibold mb-6" }, "Create Your Ebook"),
                        
                        React.createElement('div', { className: "space-y-6" },
                            React.createElement('div', null,
                                React.createElement('label', { className: "block text-sm font-medium mb-2" }, "Title"),
                                React.createElement('input', {
                                    type: "text",
                                    value: title,
                                    onChange: (e) => setTitle(e.target.value),
                                    placeholder: "Enter your ebook title",
                                    className: "flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm"
                                })
                            ),
                            
                            React.createElement('div', null,
                                React.createElement('label', { className: "block text-sm font-medium mb-2" }, "Author"),
                                React.createElement('input', {
                                    type: "text",
                                    value: author,
                                    onChange: (e) => setAuthor(e.target.value),
                                    placeholder: "Enter author name",
                                    className: "flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm"
                                })
                            ),
                            
                            React.createElement('div', null,
                                React.createElement('label', { className: "block text-sm font-medium mb-2" }, "Content"),
                                React.createElement('textarea', {
                                    value: content,
                                    onChange: (e) => setContent(e.target.value),
                                    placeholder: "Start writing your ebook content...",
                                    rows: 10,
                                    className: "flex min-h-[80px] w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm"
                                })
                            ),
                            
                            React.createElement('div', { className: "flex gap-4" },
                                React.createElement('button', { className: "px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-md hover:from-purple-700 hover:to-blue-700 transition-colors font-medium" }, "Save Draft"),
                                React.createElement('button', { className: "px-4 py-2 border border-gray-300 bg-white text-gray-700 rounded-md hover:bg-gray-50 transition-colors font-medium" }, "Preview")
                            )
                        )
                    )
                )
            );
        }
        
        function ProjectsPage() {
            const projects = [
                { id: 1, title: "My First Ebook", author: "John Doe", status: "Draft" },
                { id: 2, title: "Advanced Guide", author: "Jane Smith", status: "Published" },
                { id: 3, title: "Cookbook Deluxe", author: "Chef Mike", status: "In Review" },
            ];
            
            return React.createElement('div', { className: "min-h-screen p-8" },
                React.createElement('div', { className: "max-w-6xl mx-auto" },
                    React.createElement('div', { className: "flex justify-between items-center mb-8" },
                        React.createElement('h1', { className: "text-4xl font-bold" }, "My Projects"),
                        React.createElement('button', { className: "px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-md hover:from-purple-700 hover:to-blue-700 transition-colors font-medium" }, "New Project")
                    ),
                    
                    React.createElement('div', { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" },
                        projects.map(project =>
                            React.createElement('div', { key: project.id, className: "bg-white rounded-lg shadow-lg p-6" },
                                React.createElement('h3', { className: "text-xl font-semibold mb-3" }, project.title),
                                React.createElement('p', { className: "text-gray-600 mb-2" }, `by ${project.author}`),
                                React.createElement('span', { className: "inline-block px-2 py-1 text-sm rounded-full bg-blue-100 text-blue-800" }, project.status),
                                React.createElement('div', { className: "mt-4 flex gap-2" },
                                    React.createElement('button', { className: "px-3 py-1 text-sm border border-gray-300 bg-white text-gray-700 rounded-md hover:bg-gray-50 transition-colors" }, "Edit"),
                                    React.createElement('button', { className: "px-3 py-1 text-sm bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-md hover:from-purple-700 hover:to-blue-700 transition-colors" }, "View")
                                )
                            )
                        )
                    )
                )
            );
        }
        
        function PlannerPage() {
            const chapters = [
                { id: 1, title: "Introduction", status: "Completed" },
                { id: 2, title: "Chapter 1: Getting Started", status: "In Progress" },
                { id: 3, title: "Chapter 2: Advanced Concepts", status: "Not Started" },
                { id: 4, title: "Chapter 3: Practical Examples", status: "Not Started" },
                { id: 5, title: "Conclusion", status: "Not Started" },
            ];
            
            return React.createElement('div', { className: "min-h-screen p-8" },
                React.createElement('div', { className: "max-w-4xl mx-auto" },
                    React.createElement('h1', { className: "text-4xl font-bold mb-8" }, "Content Planner"),
                    
                    React.createElement('div', { className: "bg-white rounded-lg shadow-lg p-6" },
                        React.createElement('h2', { className: "text-2xl font-semibold mb-6" }, "Ebook Structure"),
                        
                        React.createElement('div', { className: "space-y-4" },
                            chapters.map(chapter =>
                                React.createElement('div', { key: chapter.id, className: "flex items-center justify-between p-4 border rounded-lg" },
                                    React.createElement('h3', { className: "font-medium" }, chapter.title),
                                    React.createElement('span', { className: `px-3 py-1 rounded-full text-sm ${
                                        chapter.status === 'Completed' ? 'bg-green-100 text-green-800' :
                                        chapter.status === 'In Progress' ? 'bg-yellow-100 text-yellow-800' :
                                        'bg-gray-100 text-gray-800'
                                    }` }, chapter.status)
                                )
                            )
                        )
                    )
                )
            );
        }
        
        function SettingsPage() {
            return React.createElement('div', { className: "min-h-screen p-8" },
                React.createElement('div', { className: "max-w-4xl mx-auto" },
                    React.createElement('h1', { className: "text-4xl font-bold mb-8" }, "Settings"),
                    
                    React.createElement('div', { className: "bg-white rounded-lg shadow-lg p-6 mb-6" },
                        React.createElement('h2', { className: "text-2xl font-semibold mb-6" }, "Profile Settings"),
                        
                        React.createElement('div', { className: "space-y-4" },
                            React.createElement('div', null,
                                React.createElement('label', { className: "block text-sm font-medium mb-2" }, "Name"),
                                React.createElement('input', {
                                    type: "text",
                                    placeholder: "Your name",
                                    className: "flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm"
                                })
                            ),
                            React.createElement('div', null,
                                React.createElement('label', { className: "block text-sm font-medium mb-2" }, "Email"),
                                React.createElement('input', {
                                    type: "email",
                                    placeholder: "your@email.com",
                                    className: "flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm"
                                })
                            ),
                            React.createElement('button', { className: "px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-md hover:from-purple-700 hover:to-blue-700 transition-colors font-medium" }, "Save Changes")
                        )
                    ),
                    
                    React.createElement('div', { className: "bg-white rounded-lg shadow-lg p-6" },
                        React.createElement('h2', { className: "text-2xl font-semibold mb-4" }, "Preferences"),
                        React.createElement('p', { className: "text-gray-600" }, "Additional settings coming soon...")
                    )
                )
            );
        }
        
        function NotFoundPage() {
            return React.createElement('div', { className: "min-h-screen flex items-center justify-center p-8" },
                React.createElement('div', { className: "text-center" },
                    React.createElement('h1', { className: "text-6xl font-bold mb-4" }, "404"),
                    React.createElement('h2', { className: "text-2xl font-semibold mb-4" }, "Page Not Found"),
                    React.createElement('p', { className: "text-gray-600 mb-8" }, "The page you're looking for doesn't exist."),
                    React.createElement(Link, { to: "/" },
                        React.createElement('button', { className: "px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-md hover:from-purple-700 hover:to-blue-700 transition-colors font-medium" }, "Go Home")
                    )
                )
            );
        }
        
        function App() {
            return React.createElement(BrowserRouter, null,
                React.createElement(Routes, null,
                    React.createElement(Route, { path: "/", element: React.createElement(HomePage) }),
                    React.createElement(Route, { path: "/creator", element: React.createElement(CreatorPage) }),
                    React.createElement(Route, { path: "/projects", element: React.createElement(ProjectsPage) }),
                    React.createElement(Route, { path: "/ebook", element: React.createElement('div', { className: "min-h-screen p-8" }, "Ebook reader coming soon...") }),
                    React.createElement(Route, { path: "/planner", element: React.createElement(PlannerPage) }),
                    React.createElement(Route, { path: "/settings", element: React.createElement(SettingsPage) }),
                    React.createElement(Route, { path: "*", element: React.createElement(NotFoundPage) })
                )
            );
        }
        
        ReactDOM.render(React.createElement(App), document.getElementById('root'));
    </script>
</body>
</html>
```
