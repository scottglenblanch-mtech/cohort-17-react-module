
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import NavBar from '@/components/NavBar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
      <main className={`${styles.main} ${inter.className}`}>
          <NavBar />
          <h1>Page 1</h1>
      </main>

  )
}
