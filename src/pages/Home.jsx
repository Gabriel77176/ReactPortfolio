import { Card } from "flowbite-react";
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <section className="bg-gradient-to-r from-cyan-700 to-cyan-300 min-h-[70vh] flex items-center justify-center">
                <div className="grid max-w-screen-4xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                    <div className="mr-auto place-self-center lg:col-span-7">
                        <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-cyan-50 pb-6">Gabriel
                            Dezon</h1>
                        <p className="max-w-2xl mb-6 font-bold text-white lg:mb-8 md:text-2xl lg:text-3xl pb-9">I am a proud
                            Dorset Engineer who loves to build human-friendly interfaces.</p>
                        <Link to="/portfolio"
                           className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-black border-2 border-white hover:border-slate-600 rounded-lg bg-white hover:bg-slate-600 hover:text-white focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                            View my work
                        </Link>
                        <Link to="/contact"
                           className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white border-2 border-white hover:border-slate-600 rounded-lg hover:bg-slate-600 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                            Get in touch
                        </Link>
                    </div>
                    <div
                        className="hidden lg:mt-0 lg:col-span-5 lg:flex bg-white items-center justify-center rounded-full">
                        <img src="../..//images/portrait.png" alt="mockup"
                             className="w-full h-full rounded-full"/>
                    </div>
                </div>
            </section>

            <section
                className="lg:py-13 lg:px-42 px-8 py-6 text-center md:px-40 md:py-12 lg:py-14 xl:px-64 xl:py-16 2xl:px-72 bg-sky-950">
                <h2 className="mb-1 text-2xl font-semibold tracking-tight text-white md:mb-4 md:text-4xl lg:mb-6 lg:text-4xl xl:text-5xl 2xl:text-5xl">
                    Recent projects
                </h2>
                <p
                    className="text-base leading-relaxed text-white md:text-lg md:leading-relaxed
        lg:text-xl lg:leading-relaxed xl:text-2xl xl:leading-relaxed 2xl:text-2xl 2xl:leading-relaxed"
                >
                    Below you can see some examples of my recent work. Check out my complete portfolio of web design projects. Have a project you would like to discuss?
                    {" Let's"} make something great together!
                </p>
            </section>

            <section
                className="grid grid-cols-1 mx-auto md:grid-cols-3 gap-12 pt-2 p
      xl:px-32
      lg:px-24
      md:px-14
      px-12
      ml-0 mr-0

      md:gap-6
      lg-gap-12
      bg-sky-950
      pb-12
      "
            >
                <Card
                    className="max-w-sm mx-auto"
                    imgAlt="Meaningful alt text for an image that is not purely decorative"
                    imgSrc="..//images/project-hero.png"
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
                    className="max-w-sm mx-auto"
                    imgAlt="Meaningful alt text for an image that is not purely decorative"
                    imgSrc="..//images/project-fashion.jpg"
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
                    className="max-w-sm mx-auto"
                    imgAlt="Meaningful alt text for an image that is not purely decorative"
                    imgSrc="..//images/project-smoothie.jpg"
                >
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Smooth Smoothies
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        A multi-column, flexbox-based page layout and hero image with a tinted overlay.
                    </p>
                    <Button onClick={() => window.location.href = "https://gabriel77176.github.io/portfolio/smoothies/index.html"}>View project</Button>
                </Card>
            </section>
        </>
    );
};

export default Home;