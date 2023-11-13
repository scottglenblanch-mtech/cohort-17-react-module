import Link from 'next/link'
 
export default function Home() {
  return (
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/dogs">Dogs Page</Link>
      </li>
      <li>
        <Link href="/cats">Cat Facts</Link>
      </li>
    </ul>
  )
}