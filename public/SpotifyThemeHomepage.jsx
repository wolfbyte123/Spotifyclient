import React from "react";
import { Home, Search, Library } from "lucide-react";

export default function SpotifyThemeHomepage() {
  return (
    <div className="min-h-screen flex text-white" style={{ backgroundImage: 'url(/Untitled design.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      {/* Sidebar */}
      <aside className="w-60 bg-black bg-opacity-40 backdrop-blur-md p-4">
        <div className="mb-10 flex items-center space-x-2">
          <img src="/logo.png" alt="Logo" className="h-10 w-10" />
          <span className="text-xl font-bold">MySpotify</span>
        </div>
        <nav className="space-y-4">
          <a href="#" className="flex items-center space-x-2 hover:text-green-200">
            <Home className="w-5 h-5" />
            <span>Home</span>
          </a>
          <a href="#" className="flex items-center space-x-2 hover:text-green-200">
            <Search className="w-5 h-5" />
            <span>Search</span>
          </a>
          <a href="#" className="flex items-center space-x-2 hover:text-green-200">
            <Library className="w-5 h-5" />
            <span>Your Library</span>
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-white bg-opacity-10 backdrop-blur-lg">
        <h1 className="text-3xl font-bold mb-6">Good Afternoon</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="bg-black bg-opacity-50 p-4 rounded-xl hover:bg-opacity-70 transition"
            >
              <div className="h-32 bg-white bg-opacity-10 rounded-lg mb-2"></div>
              <div className="text-sm font-semibold">Playlist {i + 1}</div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
