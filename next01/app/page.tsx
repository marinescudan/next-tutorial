import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <h2>Hello World!</h2>
      <Link href="/about">Go to About Page</Link>
    </main>
  )
}
