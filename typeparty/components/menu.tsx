import type { NextPage } from 'next'
import Link from 'next/link'

const Menu: NextPage = () => {
    return (
        <div className='container w-full min-h-[66%] grid gap-10 p-5 place-items-center place-content-center border border-5 border-black'>
            <div className='flex'>
                <button className='text-4xl'>&#9666;</button>
                <div className='border-4 p-5'></div>
                <button className='text-4xl'>&#9656;</button>
            </div>
            <input className='w-55 p-5 border-4 text-center' type="text" placeholder='Choose a name' />
            <Link href="/lobby">
                <button className='bg-black hover:bg-gray-800 text-white py-1.5 px-5'>Start</button>
            </Link>

        </div>
    )
}

export default Menu
