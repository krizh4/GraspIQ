export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b shadow-sm h-14 flex items-center px-6 justify-between">
      <div className="text-lg font-semibold">AI Study Planner</div>
      <nav className="flex gap-4 text-sm text-gray-600">
        <a href="#" className="hover:text-black">Home</a>
        <a href="#" className="hover:text-black">Plans</a>
        <a href="#" className="hover:text-black">Resources</a>
        <a href="#" className="hover:text-black">About</a>
      </nav>
    </header>
  )
}
