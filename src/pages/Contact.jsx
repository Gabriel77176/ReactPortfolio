const Contact = () => {
  return (
      <>
          <section
              className="w-full bg-gradient-to-r from-cyan-700 to-cyan-300 min-h-[60vh] flex items-center pl-24 pr-24">
              <div>
                  <h2 className="mb-1 text-3xl font-semibold tracking-tight text-cyan-50 md:mb-4 md:max-w-2xl md:text-5xl lg:mb-6 lg:max-w-3xl lg:text-5xl xl:text-6xl 2xl:text-6xl pb-5">
                      Get in touch
                  </h2>
                  <p
                      className="text-lg leading-relaxed text-white md:text-2xl
        md:leading-relaxed lg:text-2xl lg:leading-relaxed xl:text-3xl xl:leading-relaxed
        2xl:text-3xl 2xl:leading-relaxed max-w-5xl"
                  >
                      <h2>Have a project you would like to discuss? {"Let's"} make something great together! Email me at <a href="mailto:dezon.gabriel@gmail.com?subject=Mail from my Personal Website" className="text-sky-300 underline">dezon.gabriel@gmail.com</a> or use the form below to let me know a little more about your objectives and {"I'll"} get back to you.</h2>
                  </p>
              </div>
          </section>

          <section className="bg-sky-950">
              <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                  <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-blue-50">Contact
                      Us</h2>
                  <p className="mb-8 lg:mb-16 font-light text-center text-white sm:text-xl">Got a
                      technical issue? Want to send feedback about a beta feature? Need details about our Business plan?
                      Let us know.</p>
                  <form action="https://formspree.io/f/mayrlkgj"
                        method="POST" className="space-y-8">
                      <div>
                          <label htmlFor="email"
                                 className="block mb-2 text-sm font-medium text-white">Your
                              email</label>
                          <input type="email" name="email" id="email"
                                 className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                 placeholder="name@flowbite.com" required/>
                      </div>
                      <div className="sm:col-span-2">
                          <label htmlFor="message"
                                 className="block mb-2 text-sm font-medium text-white">Your
                              message</label>
                          <textarea name="message" id="message" rows="6"
                                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="Leave a comment..."></textarea>
                      </div>
                      <button type="submit"
                              className="py-3 px-5 text-sm font-medium text-center text-black rounded-lg bg-white sm:w-fit hover:bg-slate-300 focus:ring-4 focus:outline-none focus:ring-primary-300">Send
                          message
                      </button>
                  </form>
              </div>
          </section>
      </>
  );
};

export default Contact;
