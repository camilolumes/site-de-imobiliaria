import MobileHero from "@/components/mobile-hero"
import MobileSearch from "@/components/mobile-search"
import FeaturedProperties from "@/components/featured-properties"
import MobileAdvantages from "@/components/mobile-advantages"
import MobileTestimonials from "@/components/mobile-testimonials"
import MobileCTA from "@/components/mobile-cta"

export default function Home() {
  return (
    <div>
      {/* Mobile Hero Section */}
      <MobileHero />

      {/* Mobile Search Section */}
      <MobileSearch />

      {/* Featured Properties */}
      <FeaturedProperties />

      {/* Mobile Advantages */}
      <MobileAdvantages />

      {/* Mobile Testimonials */}
      <MobileTestimonials />

      {/* Mobile CTA */}
      <MobileCTA />
    </div>
  )
}
