import NavBar from "@/components/NavBar";
import styles from '@/styles/Home.module.css'

export default function Page2() {
    return (
        <main className={`${styles.main}`}>
            <NavBar />
            <h1>Page 2</h1>
        </main>
    )
}