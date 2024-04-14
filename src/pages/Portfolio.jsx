import {Button, Card} from "flowbite-react";

const Portfolio = () => {
  return (
      <>
      <section
          className="w-full bg-gradient-to-r from-cyan-700 to-cyan-300 min-h-[60vh] flex items-center pl-24 pr-24">
          <div>
              <h2 className="mb-1 text-3xl font-semibold tracking-tight text-cyan-50 md:mb-4 md:max-w-2xl md:text-5xl lg:mb-6 lg:max-w-3xl lg:text-5xl xl:text-6xl 2xl:text-6xl pb-5">
                  Portfolio
              </h2>
              <p
                  className="text-lg leading-relaxed text-white md:text-2xl
        md:leading-relaxed lg:text-2xl lg:leading-relaxed xl:text-3xl xl:leading-relaxed
        2xl:text-3xl 2xl:leading-relaxed max-w-5xl"
              >
                  Below you can see a selection of my web design and front-end development projects.
              </p>
          </div>
      </section>

      <section
          className="grid grid-cols-1 mx-auto md:grid-cols-3 gap-12 p
            xl:px-32
            lg:px-24
            md:px-14
            px-12
            ml-0 mr-0

            md:gap-6
            lg-gap-12
            bg-sky-950
            pt-12
            pb-12
            "
      >
      <Card
          className="max-w-sm mx-auto mb-12"
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc="../public/images/project-hero.png"
      >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900">
              Hero Block Gallery
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
              A gallery of hero block elements with split-screen layouts and duotone images.
          </p>
          <Button onClick={() => window.location.href = "https://gabriel77176.github.io/portfolio/project-hero/index-1.html"}>View project</Button>
      </Card>
      <Card
          className="max-w-sm mx-auto mb-12"
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc="../public/images/project-fashion.jpg"
      >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Snazzy Fashion
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
              A web page for a fashion retailer with a background video that plays in a continuous loop.
          </p>
          <Button onClick={() => window.location.href = "https://gabriel77176.github.io/portfolio/fashion/index.html"}>View project</Button>
      </Card>
      <Card
          className="max-w-sm mx-auto mb-12"
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc="../public/images/project-smoothie.jpg"
      >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Smooth Smoothies
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
              A multi-column, flexbox-based page layout and hero image with a tinted overlay.
          </p>
          <Button onClick={() => window.location.href = "https://gabriel77176.github.io/portfolio/smoothies/index.html"}>View project</Button>
      </Card>
      <Card
          className="max-w-sm mx-auto mb-12"
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc="../public/images/project-multi-col.png"
      >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900">
              Multi-column Layouts
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
              A gallery of multi-column, reponsive layouts.
          </p>
          <Button onClick={() => window.location.href = "https://gabriel77176.github.io/portfolio/project-multi-column/index.html"}>View project</Button>
      </Card>
      <Card
          className="max-w-sm mx-auto mb-12"
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc="../public/images/store.png"
      >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Online Store
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
              An online store offering books on web design with affiliate links to Amazon.
          </p>
          <Button onClick={() => window.location.href = "https://gabriel77176.github.io/store/index.html"}>View project</Button>
      </Card>
      <Card
          className="max-w-sm mx-auto mb-12"
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc="../public/images/project-crypto-wallet.jpg"
      >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Crypto Wallet
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
              A dark-themed responsive single-page website for a fictitious crypto wallet.
          </p>
          <Button onClick={() => window.location.href = "https://gabriel77176.github.io/portfolio/crypto-wallet/index.html"}>View project</Button>
      </Card>
      </section>
</>
)
    ;
};

export default Portfolio;
