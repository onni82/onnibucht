import React from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import SeoImage from "../images/logo-big.png"

export const Seo = ({ title, description, pathname, children }) => {
  const { title: defaultTitle, description: defaultDescription, author, siteURL} = useSiteMetadata()

  const seo = {
    title: `${title} | ${defaultTitle}` || defaultTitle,
    description: description || defaultDescription,
    author,
    url: `${siteURL}${pathname || ``}`,
  }

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:creator" content={seo.author} />
      <meta name="twitter:image" content={SeoImage} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {children}
    </>
  )
}