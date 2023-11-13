import Link from 'next/link'

export default function NavBar() {
    return (
        <nav>
            <Link href="/">
                Page 1
            </Link>
            <Link href="/page2">
                Page 2
            </Link>
            <Link href="/page3">
                Page 3
            </Link>
        </nav>

    )
}