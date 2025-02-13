import { COMPANY_NAME } from '@/constants'

export default function PrivacyPage() {
  return (
    <div className='container mx-auto mb-8 max-w-4xl space-y-8 rounded-md bg-white p-8 sm:border'>
      <div className='space-y-4'>
        <h1 className='text-4xl font-bold'>FAQ</h1>
        <p className='text-muted-foreground'>Last Updated: February 13, 2025</p>
      </div>

      <div className='space-y-8'>
        <section className='space-y-4'>
          <p className='text-muted-foreground'>
            Maclawran, the company behind Myion, is committed to protecting your
            privacy. This Privacy Policy explains how we collect, use, and
            safeguard your personal information when you use our video-on-demand
            recording services. By using Myion, you agree to the terms outlined
            in this policy.
          </p>
        </section>

        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold'>What is Myion?</h2>
          <div className='space-y-4 text-muted-foreground'>
            <p>
              Myion is a live video recording service that allows you to get
              live video from anywhere in the US and control the camera.
            </p>
          </div>
        </section>

        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold'>How does it work?</h2>
          <div className='space-y-4 text-muted-foreground'>
            <p>
              It's simple - you create a streaming request with a time and
              address, and we'll match you with a Myion operator in the area
            </p>
            <ul className='ml-6 list-disc space-y-2'>
              <li>You can control up to 4 cameras remotely</li>
              <li>You're billed by minute for each camera.</li>
              <li>
                You can restream any or all cameras to Youtube, Twitch, Rumble,
                etc
              </li>
              <li>Streams are available for 30 days after creation</li>
            </ul>
          </div>
        </section>

        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold'>How do I get started?</h2>
          <div className='space-y-4 text-muted-foreground'>
            <p>
              It's easy - just go to{' '}
              <a
                href='https://myion.org/request'
                className='text-primary hover:underline'
              >
                myion.org/request
              </a>{' '}
              and create a request.
            </p>
            <ul className='ml-6 list-disc space-y-2'>
              <li>
                You'll need to register for a Myion account, and a credit card
                is required for verification and billing
              </li>
              <li>
                We recommend controlling the cameras from a laptop since you
                have more screen space
              </li>
            </ul>
          </div>
        </section>

        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold'>Who are these Operators?</h2>
          <div className='space-y-4 text-muted-foreground'>
            <p>
              Camera Operators are generally gig workers who are already
              familliar with the area and use the cameras.
            </p>
            <p>
              They use the Myion-operator app to accept instructions from you
              and stream video back to you.
            </p>
            <p>
              They remain anonymous to you, and are identified as Cam1, Cam2,
              etc on-screen
            </p>
          </div>
        </section>

        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold'>What about Support?</h2>
          <div className='space-y-4 text-muted-foreground'>
            <p>
              Support is available through the Controller interface and by email
              to{' '}
              <a
                href='mailto:support@myion.org'
                className='text-primary hover:underline'
              >
                support@myion.org
              </a>
            </p>
          </div>
        </section>

        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold'>What about Privacy?</h2>
          <div className='space-y-4 text-muted-foreground'>
            <p>
              You can review our privacy policy{' '}
              <a href='/privacy' className='text-primary hover:underline'>
                here
              </a>
              .
            </p>
          </div>
        </section>

        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold'>Terms of Service</h2>
          <div className='space-y-4 text-muted-foreground'>
            <p>
              You can review our terms of service{' '}
              <a href='/terms' className='text-primary hover:underline'>
                here
              </a>
              .
            </p>
          </div>
        </section>

        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold'>Contact Us</h2>
          <div className='space-y-2 text-muted-foreground'>
            <p>If you have any other questions or need to get in touch:</p>
            <div className='mt-4 space-y-2'>
              <p>
                <strong>Maclawran - Myion Service</strong>
              </p>
              <p>Address: 1433 Flagler Ave, Key West, FL 33040</p>
              <p>Email: sean@maclawran.ca</p>
              <p>Phone: +1 (305) 240-2984</p>
            </div>
          </div>
        </section>

        <section className='space-y-4'>
          <p className='text-muted-foreground'>
            This Privacy Policy complies with relevant laws including the
            Florida Digital Bill of Rights (FDBR), Florida Information
            Protection Act (FIPA), and the Video Privacy Protection Act (VPPA).
          </p>
        </section>
      </div>
    </div>
  )
}
