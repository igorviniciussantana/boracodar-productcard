import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import dynamic from 'next/dynamic'

const inter = Inter({ subsets: ['latin'] })
const Couch = dynamic(() => import('../components/Couch/Couch'), {ssr: false, loading: () => <p>loading...</p>})


export default function Home() {
  return (
    <>
    <main>
    <Couch />
    </main>
   </>
  )
}
