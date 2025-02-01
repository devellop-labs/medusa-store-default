import { Suspense } from "react"

import { listRegions } from "@lib/data/regions"
import { StoreRegion } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"

const MenuItems = {
  Consignação: "/store",
  Compra: "/store",
  Aluguel: "/store",
}

export default async function Nav() {
  const regions = await listRegions().then((regions: StoreRegion[]) => regions)

  return (
    <div className="sticky top-0 inset-x-0 z-50 group">
      <header className="relative h-16 mx-auto duration-200 bg-ui-bg-standard">
        <nav className="px-6 md:px-16 txt-xsmall-plus text-ui-fg-subtle flex items-center justify-between w-full h-full text-small-regular">
          <div className="flex-1 basis-0 h-full flex items-center">
            <div className="h-full">
              {/* <SideMenu regions={regions} /> */}
              <ul className="flex gap-6 items-center justify-center h-full">
                {Object.entries(MenuItems).map(([name, href]) => {
                  return (
                    <li key={name}>
                      <LocalizedClientLink
                        href={href}
                        className="text-md leading-10 text-ui-text-contrast hover:text-ui-fg-disabled"
                        data-testid={`${name.toLowerCase()}-link`}
                      >
                        {name}
                      </LocalizedClientLink>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>

          <div className="flex items-center h-full">
            <LocalizedClientLink
              href="/"
              className="text-xl-bold text-ui-text-contrast hover:text-ui-fg-base uppercase"
              data-testid="nav-store-link"
            >
              VICA
            </LocalizedClientLink>
          </div>

          <div className="flex items-center gap-x-6 h-full flex-1 basis-0 justify-end">
            <div className="hidden small:flex items-center gap-x-6 h-full">
              <LocalizedClientLink
                className="text-ui-text-contrast hover:text-ui-fg-base"
                href="/account"
                data-testid="nav-account-link"
              >
                Login
              </LocalizedClientLink>
            </div>
            <Suspense
              fallback={
                <LocalizedClientLink
                  className="text-ui-text-contrast hover:text-ui-fg-base flex gap-2"
                  href="/cart"
                  data-testid="nav-cart-link"
                >
                  Carrinho (0)
                </LocalizedClientLink>
              }
            >
              <CartButton />
            </Suspense>
          </div>
        </nav>
      </header>
    </div>
  )
}
