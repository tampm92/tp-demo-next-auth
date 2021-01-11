const Footer = () => {
  return (
    <>
      <footer className="relative bg-green-700 pt-8 pb-6">
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-green-700 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto px-4 text-gray-200">
          <div className="flex flex-wrap text-center lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl font-semibold text-white">Let's keep in touch!</h4>
              <h5 className="text-lg mt-0 mb-2">
                Find us on any of these platforms, we respond 1-2 business days.
              </h5>
              <div className="mt-6 lg:mb-0 mb-6">
                <a
                  className="bg-white hover:bg-gray-200 text-blue-400 inline-flex shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  href="https://twitter.com/tamphan1992"
                  target="_blank"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  className="bg-white hover:bg-gray-200 text-blue-500 inline-flex shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  href="https://www.linkedin.com/in/tampm"
                  target="_blank"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                <a
                  className="bg-white hover:bg-gray-200 text-gray-900 inline-flex shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  href="https://github.com/tampm92"
                  target="_blank"
                >
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block uppercase text-sm font-bold mb-2 text-white">
                    Useful Links
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="hover:text-gray-400 font-semibold block pb-2 text-sm"
                        href="https://tampm.com/"
                        target="_blank"
                      >
                        About Me
                      </a>
                    </li>
                    <li>
                      <a
                        className="hover:text-gray-400 font-semibold block pb-2 text-sm"
                        href="https://tampm.com/blog"
                        target="_blank"
                      >
                        Blog
                      </a>
                    </li>
                    <li>
                      <a
                        className="hover:text-gray-400 font-semibold block pb-2 text-sm"
                        href="https://github.com/tampm92"
                        target="_blank"
                      >
                        Github
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-white font-semibold py-1">
                Copyright © {new Date().getFullYear()} {" "}
                <a
                  href="https://tampm.com"
                  className="text-white hover:text-gray-400"
                >
                  Tam Phan
                </a>
                .
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default  Footer