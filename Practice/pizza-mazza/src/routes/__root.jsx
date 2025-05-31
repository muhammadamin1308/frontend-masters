import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import {createRootRoute, Outlet} from '@tanstack/react-router'
import logo from '../assets/images/logo-2.png'
import Order from './order.lazy'
import { Cart } from '../Cart'
import Pizza from '../Pizza'


export const Route = createRootRoute({
    component: () => {
        return (
            <>
                <div className='main-cont'>
                    <nav className='flex justify-center p-4 gap-x-3 border-b-1 border-gray-300'>
                        <img className='w-12' src={logo} alt="" />
                        <h1 className='text-3xl font-bold text-amber-400'>Mazza Pizza</h1>
                    </nav>
                    <div className='grid grid-cols-2'>
                        <Order />
                        <Pizza />
                        <Cart />
                    </div>
                </div>
                <TanStackRouterDevtools />
            </>
        )
    }
})