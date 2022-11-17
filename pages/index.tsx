import Head from 'next/head'
import { SearchInputs } from '../src/components/organisms';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Buscador de Productos</title>
        <meta name="description" content="Buscador de cualquier producto en base a la api de Mercado Libre " />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SearchInputs/>
    </div>
  )
}
