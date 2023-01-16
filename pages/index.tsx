import Head from 'next/head'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { Card, Header } from '../components/imports'
const Couch = dynamic(() => import('../components/Couch/Couch'), {ssr: false, loading: () => <p>loading...</p>})


export default function Home() {
  return (
    <>
    <Header />

    <main>
    <Couch />
    <Card />
    </main>
   </>
  )
}
