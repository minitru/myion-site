import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'
import { ViewIcon } from 'lucide-react'
import Link from 'next/link'

export default function DashPage() {
  return (
    <div className='container mx-auto space-y-8 py-8'>
      <div className='flex items-center justify-between'>
        <Typography variant='h1'>Dashboard</Typography>
        <Button asChild>
          <Link href='/dash/setup'>
            <ViewIcon className='mr-2 h-4 w-4' />
            Setup Guide
          </Link>
        </Button>
      </div>
      <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
        <Card className='p-6'>
          <Typography variant='h3'>Welcome!</Typography>
          <Typography className='mt-2'>
            This is your dashboard. Add components and data here.
          </Typography>
        </Card>
      </div>
    </div>
  )
}
