export default function Sidebar({ children }) {
  return (
    <div className="h-full w-64 fixed top-0 left-0 overflow-x-hidden p-5 bg-gray-800 text-gray-200">
      { children }
    </div>
  )
}