import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import SpeedClick from '../components/games/speedclick'
import Menu from '../components/menu'

const Play: NextPage = () => {
  return (
    <SpeedClick/>
  )
}

export default Play
