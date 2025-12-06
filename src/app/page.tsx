"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroSplitAvatars from '@/components/sections/hero/HeroSplitAvatars';
import FeatureCardTwenty from '@/components/sections/feature/FeatureCardTwenty';
import AboutShowcase from '@/components/sections/about/AboutShowcase';
import ProductCardSeven from '@/components/sections/product/ProductCardSeven';
import TestimonialCardFour from '@/components/sections/testimonial/TestimonialCardFour';
import FaqBase from '@/components/sections/faq/FaqBase';
import ContactInline from '@/components/sections/contact/ContactInline';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-bubble"
      defaultTextAnimation="reveal-blur"
      borderRadius="sharp"
      contentWidth="medium"
      sizing="large"
      background="plain"
      cardStyle="glass-outline-light"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="glass"
      headingFontWeight="normal"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="Luxury Motors"
          navItems={[
            { name: "Fleet", id: "fleet" },
            { name: "About", id: "about" },
            { name: "Testimonials", id: "testimonials" },
            { name: "Contact", id: "contact" }
          ]}
          button={{
            text: "Book Now",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplitAvatars
          title="Experience Unmatched Luxury"
          description="Drive the world's finest vehicles. Premium cars, white-glove service, and unforgettable journeys await."
          tag="Premium Fleet"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765046340393-w1fprgo9.jpg"
          imageAlt="Luxury car showcase"
          imagePosition="right"
          avatars={[
            { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765046341043-6r4tpspr.jpg", alt: "Client 1" },
            { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765046341920-r33wadf9.jpg", alt: "Client 2" },
            { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765046342707-i09wiouu.jpg", alt: "Client 3" },
            { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765046343381-2ic2e5yk.jpg", alt: "Client 4" }
          ]}
          avatarText="Trusted by 2,000+ luxury travelers"
          buttons={[
            { text: "Browse Fleet", href: "fleet" },
            { text: "Get Quote", href: "contact" }
          ]}
        />
      </div>

      <div id="fleet" data-section="fleet">
        <FeatureCardTwenty
          title="Curated Collection of Prestige Vehicles"
          description="Every vehicle in our fleet represents the pinnacle of automotive engineering. From sleek sports cars to elegant executive sedans, we offer only the finest automobiles for discerning travelers."
          tag="Premium Selection"
          images={[
            { id: 1, imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765046344084-go8p2iy9.jpg", imageAlt: "Sports car" },
            { id: 2, imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765046344674-fc65jm3d.jpg", imageAlt: "Luxury sedan" },
            { id: 3, imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765046345680-kppbig3f.jpg", imageAlt: "Executive vehicle" },
            { id: 4, imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765046346363-yh8882i7.png", imageAlt: "Showroom display" }
          ]}
          textboxLayout="default"
          useInvertedBackground="noInvert"
          buttons={[
            { text: "Explore All Models", href: "fleet" }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <AboutShowcase
          title="Legacy of Excellence in Luxury Travel"
          description="Founded on principles of perfection, Luxury Motors has been the trusted choice of executives, celebrities, and discerning travelers for over two decades. Our commitment to quality, service, and discretion sets us apart."
          tag="Our Story"
          useCappedBorderRadius={true}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          leftItem={{
            title: "Premium Fleet Management",
            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765046347095-zxjefpkx.jpg"
          }}
          rightItem={{
            title: "Concierge Excellence",
            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765046347723-t0k1gy61.jpg"
          }}
          centerImageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765046347095-zxjefpkx.jpg"
          buttons={[
            { text: "Learn More", href: "about" }
          ]}
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardSeven
          title="Available Models"
          description="Choose from our handpicked selection of luxury vehicles. Each car is meticulously maintained and ready for your next adventure."
          tag="Our Fleet"
          products={[
            {
              id: "1",
              name: "Mercedes-Benz S-Class",
              price: "From $500/day",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765046348392-93iwlt4x.jpg",
              imageAlt: "Mercedes-Benz S-Class"
            },
            {
              id: "2",
              name: "BMW 7 Series",
              price: "From $450/day",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765046349123-bhc5a6ec.jpg",
              imageAlt: "BMW 7 Series"
            },
            {
              id: "3",
              name: "Audi A8",
              price: "From $425/day",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765046349795-iaejyak9.jpg",
              imageAlt: "Audi A8"
            },
            {
              id: "4",
              name: "Bentley Continental",
              price: "From $750/day",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765046350457-50ny8hqk.jpg",
              imageAlt: "Bentley Continental"
            }
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFour
          title="Client Testimonials"
          description="Hear from our satisfied clients who have experienced the Luxury Motors difference."
          tag="Reviews"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          testimonials={[
            {
              id: "1",
              name: "James Mitchell",
              role: "Executive",
              company: "Global Finance Corp",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765046351120-ua1kop6u.jpg",
              imageAlt: "James Mitchell"
            },
            {
              id: "2",
              name: "Sarah Johnson",
              role: "CEO",
              company: "Luxury Travel Ltd",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765046352159-1391pen8.jpg",
              imageAlt: "Sarah Johnson"
            },
            {
              id: "3",
              name: "Marcus Rodriguez",
              role: "Entrepreneur",
              company: "Tech Innovations Inc",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765046352649-anlbcqfs.jpg",
              imageAlt: "Marcus Rodriguez"
            },
            {
              id: "4",
              name: "Elena Rossini",
              role: "Marketing Director",
              company: "European Brands",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765046353416-pu0hxg4y.jpg",
              imageAlt: "Elena Rossini"
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          title="Frequently Asked Questions"
          description="Find answers to common questions about our rental services, fleet, and policies."
          tag="Help & Support"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "What are your rental requirements?",
              content: "We require drivers to be at least 25 years old with a valid driver's license and passport. International clients should carry an International Driving Permit. A credit card is required for the security deposit."
            },
            {
              id: "2",
              title: "Is insurance included in the rental price?",
              content: "Yes, comprehensive insurance coverage is included in all our rental rates. This covers third-party liability, collision, and theft protection. Additional premium coverage options are also available for enhanced protection."
            },
            {
              id: "3",
              title: "Can I arrange airport pickup?",
              content: "Absolutely. We offer complimentary airport pickup and delivery service for all rentals. Our professional drivers will meet you at your terminal with a welcome sign bearing your name."
            },
            {
              id: "4",
              title: "What is your cancellation policy?",
              content: "Free cancellation up to 48 hours before your rental date. Cancellations within 48 hours may incur a 25% fee. For peace of mind, we offer optional cancellation protection insurance."
            },
            {
              id: "5",
              title: "Do you offer long-term rental discounts?",
              content: "Yes. Rentals of 7+ days receive 10% discount, 14+ days receive 15% discount, and monthly rentals receive 20% discount. Contact our sales team for customized corporate rates."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactInline
          text="Ready to experience luxury?"
          animationType="reveal-blur"
          inputPlaceholder="Enter your email for exclusive offers"
          buttonText="Get Started"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="Luxury Motors"
          columns={[
            {
              items: [
                { label: "Our Fleet", href: "fleet" },
                { label: "About Us", href: "about" },
                { label: "Contact", href: "contact" }
              ]
            },
            {
              items: [
                { label: "Pricing", href: "products" },
                { label: "Testimonials", href: "testimonials" },
                { label: "FAQ", href: "faq" }
              ]
            },
            {
              items: [
                { label: "Terms of Service", href: "#" },
                { label: "Privacy Policy", href: "#" },
                { label: "Booking Terms", href: "#" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}