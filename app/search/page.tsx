import Link from "next/link"
import Button from "../_atoms/Button"
import { Search } from "lucide-react"
import SearchComponent from "../_components/SearchComponent"


const page = () => {
  return (
    <div>
        <h1 className="text-4xl text-secondary font-bold text-center mt-20">Let&apos;s find the best clinic for you!</h1>

        <SearchComponent/>
        <div className="text-neutralDark underline text-center mt-10">
          <Link href={"#"}>
          Advanced Search
          </Link>  
            
            </div>

    </div>
  )
}

export default page