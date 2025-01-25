import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { COMPANY_NAME } from '@/constants'

export function Footer() {
  return (
    <footer className='bg-secondary/80 py-2'>
      <div className='container flex flex-col gap-4 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between'>
        <div className='flex flex-col items-center gap-2 sm:flex-row sm:gap-4 sm:divide-x-2'>
          <p className='text-center sm:text-left'>
            &copy; 2025 {COMPANY_NAME}. All rights reserved.
          </p>
          <div>
            <Button
              variant='link'
              className='text-muted-foreground'
              size='sm'
              asChild
            >
              <Link href='/terms'>Terms of Service</Link>
            </Button>
          </div>
          <div>
            <Button
              variant='link'
              className='text-muted-foreground'
              size='sm'
              asChild
            >
              <Link href='/privacy'>Privacy Policy</Link>
            </Button>
          </div>
        </div>
        <div className='flex items-center justify-center gap-2'>
          <SocialLink href='https://x.com/eddedd77'>
            <svg
              role='img'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <title>X</title>
              <path d='M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z' />
            </svg>
          </SocialLink>
        </div>
      </div>
    </footer>
  )
}

function SocialLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Button variant='ghost' className='hover:bg-primary/5' size='icon' asChild>
      <a href={href} target='_blank'>
        {children}
      </a>
    </Button>
  )
}
