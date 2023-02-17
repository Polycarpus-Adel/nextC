import Link from "next/link"
import Styles from "../styles/Navbar.module.css"

function Navbar(){
    return(
        <div className={Styles.bg}>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/posts">Posts</Link>
        </div>
    )
}
export default Navbar
