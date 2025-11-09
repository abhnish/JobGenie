import Header from "@/components/ui/header"
import { Outlet } from "react-router-dom"

const AppLayout = () => {
  return (
    <div>
      <div className ="grid-background"></div>
      <main className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1">
          <Outlet />
        </div>
      </main>
      <div className="p-10 text-center bg-gray-800 mt-10">
        JobGenie
      </div>
    </div>
  )
}

export default AppLayout
