import { guidingPrinciples } from "@/lib/data/guidingPrinciples"
import PrincipleCard from "./PrincipleCard"

const GuidingPrinciplesSection: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-xl font-bold md:text-3xl">Our Guiding Principles</h2>
          <p className="mx-auto max-w-2xl text-sm text-gray-600 md:text-base">
            These six principles form the foundation of our educational approach, creating an
            environment where children can develop holistically.
          </p>
        </div>

        <div className="grid auto-rows-auto grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {guidingPrinciples.map((principle: GuidingPrinciple) => (
            <PrincipleCard key={principle.id} principle={principle} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default GuidingPrinciplesSection
