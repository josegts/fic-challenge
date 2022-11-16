import { useRouter } from "next/router"

const Items = () => {
  const router = useRouter()
  const  q = router.query
  console.log(q)
  return (
    <div>items</div>
  )
}

export default Items
