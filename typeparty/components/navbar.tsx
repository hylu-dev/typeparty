import type { NextPage } from 'next'

const Navbar: NextPage = () => {
    return (
        <nav className="flex justify-between items-center bg-black px-4 py-2.5">
            <div className="flex items-center">
                <div className='text-white text-2xl'>
                    ClickParty <small className='text-sm ml-1 inline-block'>The click measuring contest.</small>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
