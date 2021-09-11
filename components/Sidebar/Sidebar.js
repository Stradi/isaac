export default function Sidebar({ children }) {
  return (
    <div className="h-full w-64 fixed top-0 left-0 overflow-x-hidden p-5 bg-gray-200 text-gray-900">
      { children }
    </div>
  )
}