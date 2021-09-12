import Sidebar from "../Sidebar";
import MainSearch from "../MainSearch";


export default function Layout({ children }) {
  return (
    <div>
      <Sidebar>
        <h1 className="text-2xl font-normal text-center">Logo goes here</h1>
      </Sidebar>
      <div className="ml-64">
        <MainSearch placeholder="Search anything"/>
        <div className="p-8">
          { children }
        </div>
      </div>
    </div>
  )
}