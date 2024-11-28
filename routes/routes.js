import { useRouter } from "next/router";
import About from "../components/index"

export default Routs = () => {
    const routes = useRouter([
        { path: '/about', component: About },
    ]);
    return (
        <>
        </>
    )
}