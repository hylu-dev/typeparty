import type { NextPage } from 'next'
import Link from 'next/link'

const Lobby: NextPage = () => {
    return (
        <div className='container w-full min-h-[66%] grid grid-cols-3 grid-row-3 gap-5 grid-flow-row place-content-center border border-5 border-black'>
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 col-span-3'>
                <div className="p-5 flex flex-col justify-around items-center">
                    <div>Name</div>
                    <div className='container h-36 grid place-content-center border border-1'>Avatar</div>
                </div>
                <div className="p-5 flex flex-col justify-around items-center">
                    <div>Name</div>
                    <div className='container h-36 grid place-content-center border border-1'>Avatar</div>
                </div>
                <div className="p-5 flex flex-col justify-around items-center">
                    <div>Name</div>
                    <div className='container h-36 grid place-content-center border border-1'>Avatar</div>
                </div>
                <div className="p-5 flex flex-col justify-around items-center">
                    <div>Name</div>
                    <div className='container h-36 grid place-content-center border border-1'>Avatar</div>
                </div>
                <div className="p-5 flex flex-col justify-around items-center">
                    <div>Name</div>
                    <div className='container h-36 grid place-content-center border border-1'>Avatar</div>
                </div>
                <div className="p-5 flex flex-col justify-around items-center">
                    <div>Name</div>
                    <div className='container h-36 grid place-content-center border border-1'>Avatar</div>
                </div>
            </div>

            <div className="container col-span-3 md:col-span-2 p-5 flex flex-col justify-center items-end text-white">
                <h2 className='text-black'>Games</h2>
                <div className='flex gap-5 mb-5'>
                    <button className='bg-black py-1.5 px-5 grid place-content-center hover:bg-gray-800'>Speed</button>
                    <button className='bg-black py-1.5 px-5 grid place-content-center hover:bg-gray-800'>Target</button>
                    <button className='bg-black py-1.5 px-5 grid place-content-center hover:bg-gray-800'>Reflex</button>
                </div>
                <h2 className='text-black'>Rounds</h2>
                <select name="rounds" id="rounds" className='text-black'>
                    <option value="1">1 ROUNDS</option>
                    <option value="2">2 ROUNDS</option>
                    <option value="3">3 ROUNDS</option>
                    <option value="4">4 ROUNDS</option>
                </select>

            </div>
            <div className="container col-span-3 md:col-span-1 p-5 flex flex-col gap-5 justify-center items-end md:items-start text-white">
                <button className='bg-black py-2 px-5 grid place-content-center hover:bg-gray-800'>
                    <span>
                        Invite&nbsp;
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                        </svg>
                    </span>
                </button>
                <Link href="/play">
                    <button className='bg-black py-2 px-5 grid place-content-center hover:bg-gray-800'>Start</button>
                </Link>
            </div>
        </div>
    )
}

export default Lobby
