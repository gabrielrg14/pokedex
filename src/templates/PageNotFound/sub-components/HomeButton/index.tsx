import Link from "next/link"
import { Button } from "components"

export const HomeButton = () => {
    return (
        <Link href="/" aria-label="Go to Home">
            <Button>Go to Home</Button>
        </Link>
    )
}
