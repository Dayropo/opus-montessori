import FAQSection from "@/components/FAQSection"
import GuidingPrinciplesSection from "@/components/GuidingPrinciplesSection"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
  return (
    <main className="flex w-full flex-col">
      {/* Hero section */}
      <section className="relative h-[calc(100dvh_-_72px)] bg-[url(/images/hero.jpg)] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-green-900 opacity-30"></div>

        <div className="relative container mx-auto flex h-full flex-col justify-center px-5">
          <h1 className="mb-4 w-full max-w-xl text-2xl font-bold text-white md:text-5xl">
            Educating for Today, Tomorrow and Beyond
          </h1>
          <p className="mb-8 max-w-2xl text-base text-white md:text-xl">
            Where children develop independence, critical thinking, and creativity in a carefully
            prepared environment.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button variant="default" size="lg" asChild>
              <Link href="">Schedule a Tour</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-white/10 text-white backdrop-blur-sm hover:bg-white/20"
              asChild
            >
              <Link href="">Learn About Admissions</Link>
            </Button>
          </div>
        </div>
      </section>

      <GuidingPrinciplesSection />

      <FAQSection />
    </main>
  )
}
