import { Outlet, createRootRoute } from '@tanstack/react-router'
import Header from '../components/Header'

export const Route = createRootRoute({
  component: () => (
    <>
      <div className='min-h-screen fixed inset-0 overflow-y-auto bg-linear-to-br from-gray-900 via-black to-gray-900 text-white text-[calc(10px+2vmin)]'>
        <Header />
        <Outlet />
      </div>
    </>
  )
})
