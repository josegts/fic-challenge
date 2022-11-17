import Head from "next/head"
import { useRouter } from "next/router"
import { ListResults } from "../../src/components"

const Items = () => {
  const router = useRouter()
  const { search } = router.query
  return (
    <>
      <Head>
        <title>Resultado de la Busqueda</title>
        <meta name="description" content="Lista de resultados de productos en base a la api de Mercado Libre" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ListResults term={search?.toString()}/>
    </>
  )
}

export default Items
