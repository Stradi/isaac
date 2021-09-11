import Sidebar from "../components/Sidebar"
import MainSearch from "../components/MainSearch"

export default function Home() {
  return (
    <div>
      <Sidebar>
        <h1 className="text-2xl font-normal text-center">The Binding of Isaac Repentance</h1>
      </Sidebar>
      <div className="ml-64">
        <MainSearch placeholder="Search anything"/>
      
        Main content
      </div>
    </div>
  )
}