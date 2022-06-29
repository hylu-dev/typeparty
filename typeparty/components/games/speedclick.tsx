import type { NextPage } from 'next'
import styles from '../../styles/SpeedClick.module.scss'

const SpeedClick: NextPage = () => {
    const counter: number = 0;

    return (
        <div className="container h-full grid place-content-center">
            <div className={styles.pulsatingCircle}>
                <div className='text-black z-10'>
                    hello
                </div>
            </div>
        </div>
    )
}

export default SpeedClick
