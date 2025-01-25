import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { PageSection, PageSectionTitle } from './page-section'

export function AboutMeSection() {
  return (
    <PageSection>
      <div className='flex flex-col items-center gap-8 md:flex-row'>
        <div className='flex-1'>
          <PageSectionTitle>About Me</PageSectionTitle>
          <p className='mb-4 text-muted-foreground'>
            Hi! I'm a passionate developer who loves building things for the
            web. I specialize in creating modern, responsive applications using
            the latest technologies.
          </p>
          <Button variant='outline'>Learn More</Button>
        </div>
        <div className='relative aspect-square w-full max-w-[400px] flex-1'>
          <Image
            src='/placeholder-profile.jpg'
            alt='Profile picture'
            fill
            className='rounded-lg object-cover'
            priority
          />
        </div>
      </div>
    </PageSection>
  )
}
