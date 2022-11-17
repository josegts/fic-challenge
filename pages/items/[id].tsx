import Head from "next/head"
import { DetailProduct } from "../../src/components"

const Detail = () => {
  return (
    <>
      <Head>
        <title>Detalle del producto</title>
        <meta name="description" content="Descripcion de producto" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DetailProduct/>
    </>
  )
}

export default Detail
