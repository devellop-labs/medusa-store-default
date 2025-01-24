import { Metadata } from "next"

import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import { listCollections } from "@lib/data/collections"
import { getRegion } from "@lib/data/regions"
import Banner from "@modules/home/components/banner"

export const metadata: Metadata = {
  title: "Medusa Next.js Starter Template",
  description:
    "A performant frontend ecommerce starter template with Next.js 14 and Medusa.",
}

const homeBannersProprieties = [
  {
    imageUrl: "https://images.pexels.com/photos/26954376/pexels-photo-26954376/free-photo-of-purse-with-artificial-crocodile-leather.jpeg",
    title: "Novos produtos com até 80% de desconto",
    subtitle: "Nova coleção de outubro",
  },
  {
    imageUrl: "https://images.pexels.com/photos/6650001/pexels-photo-6650001.jpeg",
    title: "Novas Tendencias",
    subtitle: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
  },
  {
    imageUrl: "https://images.pexels.com/photos/18645340/pexels-photo-18645340/free-photo-of-elegant-shoes-and-bags-standing-on-white-surface.jpeg",
    title: "Coleção de Outono",
    subtitle: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
  }
]

export default async function Home(props: {
  params: Promise<{ countryCode: string }>
}) {
  const params = await props.params

  const { countryCode } = params

  const region = await getRegion(countryCode)

  const { collections } = await listCollections({
    fields: "id, handle, title",
  })

  if (!collections || !region) {
    return null
  }

  return (
    <>
      <Banner {...homeBannersProprieties[0]} />
      <Banner {...homeBannersProprieties[1]} />
      <Banner {...homeBannersProprieties[2]} />
      <div className="py-12">
        <ul className="flex flex-col gap-x-6">
          <FeaturedProducts collections={collections} region={region} />
        </ul>
      </div>
    </>
  )
}
