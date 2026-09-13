import Link from "next/link";
import Image from "next/image";
import { FEATURES, FACULTIES, NEWS_ITEMS } from "@/data/siteData";
import FeatureCards from "@/components/FeatureCards";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero */}
      <section className="relative isolate flex min-h-[560px] items-end overflow-hidden bg-white px-4 py-20 sm:px-6 lg:px-2">
        <Image
          src="/image.png"
          alt="Students studying together"
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-black/25" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-3/4 bg-gradient-to-t from-black/20 via-black/35 to-transparent" />
      </section>

      {/* 2. Featured cards between hero and next section */}
      <FeatureCards />

      <section className="flex  justify-between mx-auto max-w-7xl px-4 pb-20 pt-30 sm:px-6 lg:px8">
        <h1 className="mb-5 text-5xl max-w-150 font-medium text-black sm:text-5xl">
          Empowering Futures Through Innovative Education
        </h1>
        <div className="flex flex-col gap-15 items-start">
          <p>
            At Nationl Open University Of Nigeria we enourage Open Distance
            Learning to bridge the gap between studying in conventional
            Universities while working or nursing and it's a very flexible and
            economical choice
          </p>
          <div className="flex gap-5">
            <Link
              href="/portal"
              className="rounde-lg bg-secondary px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-secondary"
            >
              Student Portal
            </Link>
            <Link
              href="/portal"
              className="rouded-lg bg-primary px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-secondary"
            >
              Student Portal
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Faculties */}
      <section className=" flex flex-col mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 bg-primary">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end justify-center">
          <div className="flex items-center">
            <h2 className="mt-2 text-3xl w-[500px] font-bold text-white">
              Explore Our Top Programs That Inspire and Transform Your Future
            </h2>
          </div>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {FACULTIES.slice(0, 8).map((faculty, index) => (
            <Link
              key={faculty.slug}
              href={`/academics/${faculty.slug}`}
              className="group relative flex min-h-[360px] flex-col overflow-hidden brder borer-gray-200 bg-white"
            >
              <div className="relative h-40 overflow-hidden">
                <Image
                  src={faculty.image}
                  alt={faculty.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col justify-between p-5">
                <div>
                  {/* <span className="text-sm font-semibold text-primary">0{index + 1}</span> */}
                  <h3 className="mt-3 text-xl font-bold leading-tight text-gray-900 group-hover:text-primary">
                    {faculty.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-600">
                    {faculty.description}
                  </p>
                </div>
                <span
                  aria-hidden="true"
                  className="mt-5 self-end text-xl text-primary transition-transform group-hover:translate-x-1"
                >
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>
        <div className="flex items-center justify-center mt-10">
          <Link
            href="/fraud-alerts"
            className="whitespace-nowrap -full bg-primary px-5 py-2 text-sm font-semibold text-white hover:bg-secondary"
          >
            See more{" "}
            <span aria-hidden="true" className="text-lg">
              →
            </span>
          </Link>
        </div>
      </section>

      {/* 4. Why choose us */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: text Content */}
            <div>
              <p className="text-sm font-semibold text-amber-500 mb-3 tracking-wide">
                Why choose us?
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-500 leading-tight mb-10">
                Shaping vissionary leaders <br className="hidden sm:block" />
                who thrive in today's evolving world.
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
                {FEATURES.map((feats) => {
                  return (
                    <div key={feats.title}>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">
                        {feats.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {feats.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/*Right: Image */}
            <div className="bg-amber-200">
              
            </div>
          </div>
        </div>
      </section>

      {/* 5. "I am a..." audience selector */}
      <section className="mx-auto max-w-7xl px-4 pb-20 pt-8 sm:px-6 lg:px8">
        <h2 className="mb-5 text-2xl font-medium text-[#69a900] sm:text-3xl">
          Studying at Open University
        </h2>
        <div className="grid gap-0 md:grid-cols-3 gap-10">
          <Link
            href="/academics"
            className="group flex min-h-[360px] flex-col justify-between bg-primary p-5 text-white transition-colors hover:bg-secondary sm:min-h-[415px] sm:p-6 lg:p-5 xl:p-6"
          >
            <p className="max-w-xs text-2xl font-bold leading-tight sm:text-[28px]">
              90 Degree Programs.
              <br />
              17 Departments.
              <br />1 Good Choice.
            </p>
            <span className="self-end text-base font-semibold sm:text-lg">
              To the Degree Programs{" "}
              <span className="ml-1 text-2xl font-normal align-[-2px]">→</span>
            </span>
          </Link>

          <Link
            href="/academics"
            className="group relative min-h-[360px] overflow-hidden sm:min-h-[415px]"
          >
            <Image
              src="/agric.png"
              alt="Students studying outdoors"
              fill
              sizes="(min-width: 1024px) 33vw, 100vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inline-block -rotate-90 top-20 -right-6 px-3 text-black text-[12px] font-medium font-sans bg-white/80">
              Davido
            </div>
            <div className="absolute bottom-5 left-0 right-5 bg-white px-15 py-3 sm:right-8 sm:px-5 sm:py-3">
              <p className="text-sm font-semibold text-[#69a900]">
                Choosing a Degree Program
              </p>
              <p className="mt-1 max-w-sm text-md font-semibold leading-snug text-gray-950 sm:text-sm">
                What suits me? Here you will find help and advice in choosing
                your field of study.
              </p>
              <span className="absolute bottom-2 right-3 text-2xl font-light text-[#69a900]">
                →
              </span>
            </div>
          </Link>

          <Link
            href="/admissions"
            className="group relative min-h-[360px] overflow-hidden sm:min-h-[415px]"
          >
            <Image
              src="/new1.png"
              alt="University community meeting"
              fill
              sizes="(min-width: 1024px) 33vw, 100vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute bottom-5 left-0 right-5 bg-white px-5 py-8 sm:right-8 sm:px-5 sm:py-3">
              <p className="text-sm font-semibold text-[#69a900]">
                Choosing a Degree Program
              </p>
              <p className="mt-1 max-w-sm text-md font-semibold leading-snug text-gray-950 sm:text-sm">
                What suits me? Here you will find help and advice in choosing
                your field of study.
              </p>
              <span className="absolute bottom-2 right-3 text-2xl font-light text-[#69a900]">
                →
              </span>
            </div>
          </Link>
        </div>
        <nav
          aria-label="More topics"
          className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3 py-7 text-base font-medium text-gray-800 sm:text-lg"
        >
          <span className="font-bold">More Topics:</span>
          <Link
            href="/academics"
            className="transition-colors hover:text-[#69a900]"
          >
            ▰ Study in English
          </Link>
          <Link
            href="/portal"
            className="transition-colors hover:text-[#69a900]"
          >
            ▣ Campus Portal
          </Link>
          <Link
            href="/admissions"
            className="transition-colors hover:text-[#69a900]"
          >
            ● Dates &amp; Deadlines
          </Link>
        </nav>
      </section>

      {/* 6. Testimonial*/}
      <section className="bg-accent py-10">
        <div className="flex flex-col mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 gap-20">
          <div className="mt-6 grid gap-4 sm:grid-cols-4">
            {NEWS_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group border border-gray-200 bg-white p-5"
              >
                <div className="mt-4">
                  <p className="text-xs font-medium text-gray-400">
                    {item.date}
                  </p>
                  <p className="mt-1 font-semibold text-gray-900">
                    {item.title}
                  </p>
                  <p className="mt-2 text-sm text-gray-600">
                    {item.readMoreLabel}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 7. News & Announcements */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900">Latest news</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-4">
            {NEWS_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group border border-gray-200 bg-white p-5"
              >
                <div className="overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    width={400}
                    height={200}
                    className="h-80 w-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="mt-4">
                  <p className="text-xs font-medium text-gray-400">
                    {item.date}
                  </p>
                  <p className="mt-1 font-semibold text-gray-900">
                    {item.title}
                  </p>
                  <p className="mt-2 text-sm text-gray-600">
                    {item.readMoreLabel}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <Link
            href="/news"
            className="mt-6 inline-block text-sm font-semibold text-primary hover:text-secondary"
          >
            See all news →
          </Link>
        </div>
      </section>

      

      {/* 6. Student life / stats */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 text-center sm:grid-cols-4">
          <div>
            <p className="text-3xl font-bold text-gray-900">500K+</p>
            <p className="mt-1 text-sm text-gray-500">Students</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-gray-900">9</p>
            <p className="mt-1 text-sm text-gray-500">Faculties</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-gray-900">70+</p>
            <p className="mt-1 text-sm text-gray-500">Study centres</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-gray-900">1983</p>
            <p className="mt-1 text-sm text-gray-500">Founded</p>
          </div>
        </div>
      </section>
    </>
  );
}
