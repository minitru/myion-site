import { FAQSection } from './faq-section'
import { HeroSection } from './hero-section'
import { HowItWorksSection } from './how-it-works-section'
import { FinalCTASection } from './final-cta-section'
import type { Metadata } from 'next'
import { AboutMeSection } from './about-me-section'

export const metadata: Metadata = {
  title: 'Myion | Media Platform',
  description:
    'Myion is a modern media platform that helps creators connect with their audience and share their content effectively.',
  keywords: [
    'media platform',
    'content creation',
    'creator tools',
    'digital media',
    'content sharing',
  ],
}

export default function LandingPage() {
  return (
    <>
      <HeroSection />
      <HowItWorksSection />
      <FAQSection />
      <AboutMeSection />
      <FinalCTASection />
    </>
  )
}
