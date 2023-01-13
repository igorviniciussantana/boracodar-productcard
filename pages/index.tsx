import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import dynamic from 'next/dynamic'
import Card from '../components/Card/Card'

const inter = Inter({ subsets: ['latin'] })
const Couch = dynamic(() => import('../components/Couch/Couch'), {ssr: false, loading: () => <p>loading...</p>})


export default function Home() {
  return (
    <>
    <main>
    <Couch />
    <Card />
    </main>
   </>
  )
}
