import { Metadata } from "next"

import FeaturedProducts from "@modules/home/components/featured-products"
import { listCollections } from "@lib/data/collections"
import { getRegion } from "@lib/data/regions"
import Banner from "@modules/home/components/banner"
import { CardCategories } from "@modules/home/components/card-categories"
import { CardBrands } from "@modules/home/components/card-brands"
import { Carousel } from "@modules/home/components/carousel"
import { CardNews } from "@modules/home/components/card-news"
import { CardProduct } from "@modules/home/components/card-product"


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

const homeCarouselProprieties = [
  {
    label: "Gucci",
    imageUrl: "https://logospng.org/download/gucci/logo-gucci-256.png",
    url: "/calcados",
  },
  {
    label: "Hermes",
    imageUrl: "https://cdn.dooca.store/63240/brands/hijn5a7fbqjia7rvbmyoamlauk8w0crivvrp.png?v=1663517215&webp=0",
    url: "/calcados",
  },
  {
    label: "Louis Vuitton",
    imageUrl: "https://static.vecteezy.com/system/resources/previews/027/127/487/non_2x/louis-vuitton-logo-louis-vuitton-icon-transparent-free-png.png",
    url: "/calcados",
  },
  {
    label: "Prada",
    imageUrl: "https://jingdaily.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Ff8lauh0h%2Fproduction%2Fcf91e76f58399f97eadc81c4c588ba1c7439f06b-700x700.png&w=256&q=75",
    url: "/calcados",
  },
  {
    label: "Chanel",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Chanel_logo.svg/1200px-Chanel_logo.svg.png",
    url: "/calcados",
  },
  {
    label: "Dior",
    imageUrl: "https://logospng.org/download/dior/logo-dior-256.png",
    url: "/calcados",
  },
  {
    label: "Gucci",
    imageUrl: "https://logospng.org/download/gucci/logo-gucci-256.png",
    url: "/calcados",
  },
  {
    label: "Hermes",
    imageUrl: "https://cdn.dooca.store/63240/brands/hijn5a7fbqjia7rvbmyoamlauk8w0crivvrp.png?v=1663517215&webp=0",
    url: "/calcados",
  },
  {
    label: "Louis Vuitton",
    imageUrl: "https://static.vecteezy.com/system/resources/previews/027/127/487/non_2x/louis-vuitton-logo-louis-vuitton-icon-transparent-free-png.png",
    url: "/calcados",
  },
  {
    label: "Prada",
    imageUrl: "https://jingdaily.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Ff8lauh0h%2Fproduction%2Fcf91e76f58399f97eadc81c4c588ba1c7439f06b-700x700.png&w=256&q=75",
    url: "/calcados",
  },
  {
    label: "Chanel",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Chanel_logo.svg/1200px-Chanel_logo.svg.png",
    url: "/calcados",
  },
  {
    label: "Dior",
    imageUrl: "https://logospng.org/download/dior/logo-dior-256.png",
    url: "/calcados",
  },
  {
    label: "Gucci",
    imageUrl: "https://logospng.org/download/gucci/logo-gucci-256.png",
    url: "/calcados",
  },
  {
    label: "Hermes",
    imageUrl: "https://cdn.dooca.store/63240/brands/hijn5a7fbqjia7rvbmyoamlauk8w0crivvrp.png?v=1663517215&webp=0",
    url: "/calcados",
  },
  {
    label: "Louis Vuitton",
    imageUrl: "https://static.vecteezy.com/system/resources/previews/027/127/487/non_2x/louis-vuitton-logo-louis-vuitton-icon-transparent-free-png.png",
    url: "/calcados",
  },
  {
    label: "Prada",
    imageUrl: "https://jingdaily.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Ff8lauh0h%2Fproduction%2Fcf91e76f58399f97eadc81c4c588ba1c7439f06b-700x700.png&w=256&q=75",
    url: "/calcados",
  },
  {
    label: "Chanel",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Chanel_logo.svg/1200px-Chanel_logo.svg.png",
    url: "/calcados",
  },
  {
    label: "Dior",
    imageUrl: "https://logospng.org/download/dior/logo-dior-256.png",
    url: "/calcados",
  },
  {
    label: "Gucci",
    imageUrl: "https://logospng.org/download/gucci/logo-gucci-256.png",
    url: "/calcados",
  },
  {
    label: "Hermes",
    imageUrl: "https://cdn.dooca.store/63240/brands/hijn5a7fbqjia7rvbmyoamlauk8w0crivvrp.png?v=1663517215&webp=0",
    url: "/calcados",
  },
  {
    label: "Louis Vuitton",
    imageUrl: "https://static.vecteezy.com/system/resources/previews/027/127/487/non_2x/louis-vuitton-logo-louis-vuitton-icon-transparent-free-png.png",
    url: "/calcados",
  },
  {
    label: "Prada",
    imageUrl: "https://jingdaily.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Ff8lauh0h%2Fproduction%2Fcf91e76f58399f97eadc81c4c588ba1c7439f06b-700x700.png&w=256&q=75",
    url: "/calcados",
  },
  {
    label: "Chanel",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Chanel_logo.svg/1200px-Chanel_logo.svg.png",
    url: "/calcados",
  },
  {
    label: "Dior",
    imageUrl: "https://logospng.org/download/dior/logo-dior-256.png",
    url: "/calcados",
  },
  {
    label: "Gucci",
    imageUrl: "https://logospng.org/download/gucci/logo-gucci-256.png",
    url: "/calcados",
  },
  {
    label: "Hermes",
    imageUrl: "https://cdn.dooca.store/63240/brands/hijn5a7fbqjia7rvbmyoamlauk8w0crivvrp.png?v=1663517215&webp=0",
    url: "/calcados",
  },
  {
    label: "Louis Vuitton",
    imageUrl: "https://static.vecteezy.com/system/resources/previews/027/127/487/non_2x/louis-vuitton-logo-louis-vuitton-icon-transparent-free-png.png",
    url: "/calcados",
  },
  {
    label: "Prada",
    imageUrl: "https://jingdaily.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Ff8lauh0h%2Fproduction%2Fcf91e76f58399f97eadc81c4c588ba1c7439f06b-700x700.png&w=256&q=75",
    url: "/calcados",
  },
  {
    label: "Chanel",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Chanel_logo.svg/1200px-Chanel_logo.svg.png",
    url: "/calcados",
  },
  {
    label: "Dior",
    imageUrl: "https://logospng.org/download/dior/logo-dior-256.png",
    url: "/calcados",
  },
  {
    label: "Gucci",
    imageUrl: "https://logospng.org/download/gucci/logo-gucci-256.png",
    url: "/calcados",
  },
  {
    label: "Hermes",
    imageUrl: "https://cdn.dooca.store/63240/brands/hijn5a7fbqjia7rvbmyoamlauk8w0crivvrp.png?v=1663517215&webp=0",
    url: "/calcados",
  },
  {
    label: "Louis Vuitton",
    imageUrl: "https://static.vecteezy.com/system/resources/previews/027/127/487/non_2x/louis-vuitton-logo-louis-vuitton-icon-transparent-free-png.png",
    url: "/calcados",
  },
  {
    label: "Prada",
    imageUrl: "https://jingdaily.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Ff8lauh0h%2Fproduction%2Fcf91e76f58399f97eadc81c4c588ba1c7439f06b-700x700.png&w=256&q=75",
    url: "/calcados",
  },
  {
    label: "Chanel",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Chanel_logo.svg/1200px-Chanel_logo.svg.png",
    url: "/calcados",
  },
  {
    label: "Dior",
    imageUrl: "https://logospng.org/download/dior/logo-dior-256.png",
    url: "/calcados",
  },
]

const homeCardCategoriesProprieties = [
  {
    title: "Tendencias",
    subtitle: "It is a long established fact that a reader will ",
    imageUrl: "https://images.pexels.com/photos/27835298/pexels-photo-27835298/free-photo-of-saint-laurent-black-and-white-leather-bag.jpeg",
    url: "/calcados",
  },
  {
    title: "Novidades",
    subtitle: "It is a long established fact that a reader will ",
    imageUrl: "https://images.pexels.com/photos/27849638/pexels-photo-27849638/free-photo-of-bags-women-fashion.jpeg",
    url: "/bolsas",
  },
  {
    title: "Contemporâneo",
    subtitle: "It is a long established fact that a reader will ",
    imageUrl: "https://images.pexels.com/photos/27565820/pexels-photo-27565820/free-photo-of-carterita.png",
    url: "/acessorios",
  },
]

const homeCardBlogProprieties = [
  {
    title: "Blog",
    imageUrl: "https://images.pexels.com/photos/5490227/pexels-photo-5490227.jpeg",
    url: "/calcados",
  },
  {
    title: "Novidades",
    imageUrl: "https://images.pexels.com/photos/8502482/pexels-photo-8502482.jpeg",
    url: "/bolsas",
  },
  {
    title: "Promoções",
    imageUrl: "https://images.pexels.com/photos/6633795/pexels-photo-6633795.jpeg",
    url: "/acessorios",
  },
]

const homeHighlightsProductsProprieties = [
  {
    title: "Bolsa Gucci MK",
    description: "A bolsa gucci GG Marmont é uma releitura do clássico logo da grife italiana, o duplo GG",
    price: "R$ 1.000,00",
    imageUrl: "https://data.pozzilei.it/images/galleries/26822/06032024_002.png",
    url: "/calcados",
  },
  {
    title: "Bolsa Gucci MK",
    description: "A bolsa gucci GG Marmont é uma releitura do clássico logo da grife italiana, o duplo GG",
    price: "R$ 1.000,00",
    imageUrl: "https://data.pozzilei.it/images/galleries/26822/06032024_002.png",
    url: "/calcados",
  },
  {
    title: "Bolsa Gucci MK",
    description: "A bolsa gucci GG Marmont é uma releitura do clássico logo da grife italiana, o duplo GG",
    price: "R$ 1.000,00",
    imageUrl: "https://data.pozzilei.it/images/galleries/26822/06032024_002.png",
    url: "/calcados",
  },
  {
    title: "Bolsa Gucci MK",
    description: "A bolsa gucci GG Marmont é uma releitura do clássico logo da grife italiana, o duplo GG",
    price: "R$ 1.000,00",
    imageUrl: "https://data.pozzilei.it/images/galleries/26822/06032024_002.png",
    url: "/calcados",
  },
  {
    title: "Bolsa Gucci MK",
    description: "A bolsa gucci GG Marmont é uma releitura do clássico logo da grife italiana, o duplo GG",
    price: "R$ 1.000,00",
    imageUrl: "https://data.pozzilei.it/images/galleries/26822/06032024_002.png",
    url: "/calcados",
  },
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
      <section className="items-center my-[10vh]">
        <Carousel
          isDisabledButtons
          autoplay
        >
          {homeCarouselProprieties.map((values, index) => (
            <CardBrands key={index} {...values} />
          ))}
        </Carousel>
      </section>
      <section className="flex w-full justify-center items-center my-[10vh]">
        <div className="flex w-full max-w-[1400px] gap-6">
          {homeCardCategoriesProprieties.map((values, index) => (
            <CardCategories key={index} {...values} />
          ))}
        </div>
      </section>
      <Banner containerStyles="bg-[center_60%]" {...homeBannersProprieties[1]} />
      <section className="flex w-full justify-center items-center my-[10vh]">
        <div className="grid w-full max-w-[1400px] gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {homeHighlightsProductsProprieties.map((values, index) => (
            <CardProduct key={index} {...values} />
          ))}
        </div>
      </section>
      <Banner {...homeBannersProprieties[2]} />
      <section className="flex w-full justify-center items-center my-[10vh]">
        <div className="grid w-full max-w-[1400px] gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {homeHighlightsProductsProprieties.map((values, index) => (
            <CardProduct key={index} {...values} />
          ))}
        </div>
      </section>
      <section className="flex flex-col w-full justify-center items-center my-[10vh]">
        <div className="flex flex-col w-full text-lg gap-y-4 max-w-[1400px]">
          <h1 className="w-full text-lg md:text-xl font-semi-bold leading-tigh ">Acesse também</h1>
          <div className="flex w-full gap-6">
            {homeCardBlogProprieties.map((values, index) => (
              <CardNews key={index} {...values} />
            ))}
          </div>
        </div>
      </section>
      {/* <section className="my-[10vh]">
        <ul className="flex flex-col gap-x-6">
          <FeaturedProducts collections={collections} region={region} />
        </ul>
      </section> */}
    </>
  )
}
