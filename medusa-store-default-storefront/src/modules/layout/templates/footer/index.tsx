import { listCategories } from "@lib/data/categories"
import { listCollections } from "@lib/data/collections"
import { Text, clx } from "@medusajs/ui"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import MedusaCTA from "@modules/layout/components/medusa-cta"

export default async function Footer() {
  const { collections } = await listCollections({
    fields: "*products",
  })
  const productCategories = await listCategories()

  return (
    <footer className="border-t border-ui-border-base w-full bg-ui-bg-standard">
      <div className="content-container flex flex-col w-full">
        <div className="flex flex-col gap-y-6 xsmall:flex-row items-start justify-between py-40">
          <div>
            <LocalizedClientLink
              href="/"
              className="text-6xl text-ui-text-contrast hover:text-ui-fg-base uppercase"
            >
              VICÀ
            </LocalizedClientLink>
            <div className="flex flex-col gap-y-4 mt-8">
              <Text className="text-ui-text-contrast">Para ficar por dentro das nossas promoções assine nosso <strong>News Letter</strong></Text>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Seu melhor e-mail"
                  className="border border-ui-border-base rounded-md px-4 py-2"
                />
                <button className="bg-ui-bg-contrast text-ui-text-contrast px-4 py-2 rounded-md">Assinar</button>
              </div>
            </div>
          </div>
          <div className="gap-10 md:gap-x-16 grid grid-cols-2 sm:grid-cols-3">
            {productCategories && productCategories?.length > 0 && (
              <div className="flex flex-col gap-y-2">
                <span className="txt-small-plus text-ui-text-contrast">
                  Categories
                </span>
                <ul
                  className="grid grid-cols-1 gap-2"
                  data-testid="footer-categories"
                >
                  {productCategories?.slice(0, 6).map((c) => {
                    if (c.parent_category) {
                      return
                    }

                    const children =
                      c.category_children?.map((child) => ({
                        name: child.name,
                        handle: child.handle,
                        id: child.id,
                      })) || null

                    return (
                      <li
                        className="flex flex-col gap-2 text-small-regular"
                        key={c.id}
                      >
                        <LocalizedClientLink
                          className={clx(
                            "text-small-regular hover:text-ui-fg-base",
                            children && "text-small-regular text-ui-text-contrast"
                          )}
                          href={`/categories/${c.handle}`}
                          data-testid="category-link"
                        >
                          {c.name}
                        </LocalizedClientLink>
                        {children && (
                          <ul className="grid grid-cols-1 ml-3 gap-2">
                            {children &&
                              children.map((child) => (
                                <li key={child.id}>
                                  <LocalizedClientLink
                                    className="text-ui-text-contrast text-small-regular hover:text-ui-fg-base"
                                    href={`/categories/${child.handle}`}
                                    data-testid="category-link"
                                  >
                                    {child.name}
                                  </LocalizedClientLink>
                                </li>
                              ))}
                          </ul>
                        )}
                      </li>
                    )
                  })}
                </ul>
              </div>
            )}
            {collections && collections.length > 0 && (
              <div className="flex flex-col gap-y-2">
                <span className="text-ui-text-contrast txt-small-plus txt-ui-fg-base">
                  Collections
                </span>
                <ul
                  className={clx(
                    "grid grid-cols-1 gap-2 text-small-regular",
                    {
                      "grid-cols-2": (collections?.length || 0) > 3,
                    }
                  )}
                >
                  {collections?.slice(0, 6).map((c) => (
                    <li key={c.id}>
                      <LocalizedClientLink
                        className="text-ui-text-contrast text-small-regular hover:text-ui-fg-base"
                        href={`/collections/${c.handle}`}
                      >
                        {c.title}
                      </LocalizedClientLink>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div className="flex flex-col gap-y-2">
              <span className="txt-small-plus text-ui-text-contrast">Outros</span>
              <ul className="grid grid-cols-1 gap-y-2">
                <li>
                  <a
                    // href="https://github.com/medusajs/nextjs-starter-medusa"
                    target="_blank"
                    rel="noreferrer"
                    className="text-ui-text-contrast text-small-regular  hover:text-ui-fg-base"
                  >
                    Sobre a VICA
                  </a>
                </li>
                <li>
                  <a
                    // href="https://github.com/medusajs/nextjs-starter-medusa"
                    target="_blank"
                    rel="noreferrer"
                    className="text-ui-text-contrast text-small-regular  hover:text-ui-fg-base"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    // href="https://github.com/medusajs"
                    target="_blank"
                    rel="noreferrer"
                    className="text-ui-text-contrast text-small-regular  hover:text-ui-fg-base"
                  >
                    Entrar em contato
                  </a>
                </li>
                <li>
                  <a
                    // href="https://docs.medusajs.com"
                    target="_blank"
                    rel="noreferrer"
                    className="text-ui-text-contrast text-small-regular  hover:text-ui-fg-base"
                  >
                    Solucionar problema
                  </a>
                </li>
                <li>
                  <a
                    // href="https://github.com/medusajs/nextjs-starter-medusa"
                    target="_blank"
                    rel="noreferrer"
                    className="text-ui-text-contrast text-small-regular  hover:text-ui-fg-base"
                  >
                    Segurança
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex w-full mb-16 justify-between text-ui-fg-muted">
          <div className="flex flex-col">
            <Text className="txt-compact-small text-ui-text-contrast">
              © {new Date().getFullYear()} Devellop Labs. All rights reserved.
            </Text>
            <Text className="txt-compact-small text-ui-text-contrast">
              © {new Date().getFullYear()} Medusa Store. All rights reserved.
            </Text>
          </div>
          <MedusaCTA />
        </div>
      </div>
    </footer>
  )
}
