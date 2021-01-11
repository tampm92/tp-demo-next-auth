const HomePage = () => {
  return (
    <main className="min-h-screen">
      <section className="header bg-green-700 relative items-center flex pt-24 pb-8">
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4 mb-10">
            <div className="text-white pt-32 sm:pt-0">
              <h4 className="mt-2 mb-6 text-2xl leading-relaxed font-bold">
                User from Session
              </h4>
              <iframe src="/api/user/session"/>
            </div>
          </div>
        </div>
      </section>

      <section className="relative items-center flex pt-6 pb-16">
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="pt-32 sm:pt-0">
              <h4 className="mt-4 mb-6 text-2xl leading-relaxed text-gray-900 font-bold">
                User from JWT
              </h4>
              <iframe src="/api/user/jwt"/>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default HomePage