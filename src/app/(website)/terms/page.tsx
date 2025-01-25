import { COMPANY_NAME } from '@/constants'

export default function TermsPage() {
  return (
    <div className='container mx-auto mb-8 max-w-4xl space-y-8 rounded-md bg-white p-8 sm:border'>
      <div className='space-y-4'>
        <h1 className='text-4xl font-bold'>Terms of Service</h1>
        <p className='text-muted-foreground'>Last updated: January 24, 2025</p>
      </div>

      <div className='space-y-8'>
        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold'>1. Acceptance of Terms</h2>
          <p className='text-muted-foreground'>
            By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
          </p>
        </section>

        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold'>2. Use License</h2>
          <div className='space-y-4 text-muted-foreground'>
            <p>
              Permission is granted to temporarily download one copy of the materials (information or software) on Myion's website for personal, non-commercial transitory viewing only.
            </p>
            <p>This is the grant of a license, not a transfer of title, and under this license you may not:</p>
            <ul className='ml-6 list-disc space-y-2'>
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose</li>
              <li>Attempt to decompile or reverse engineer any software contained on the website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
              <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
            </ul>
          </div>
        </section>

        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold'>3. Disclaimer</h2>
          <div className='space-y-4 text-muted-foreground'>
            <p>
              The materials on Myion's website are provided on an 'as is' basis. Myion makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
            <p>
              Further, Myion does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.
            </p>
          </div>
        </section>

        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold'>4. Limitations</h2>
          <p className='text-muted-foreground'>
            In no event shall Myion or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Myion's website, even if Myion or a Myion authorized representative has been notified orally or in writing of the possibility of such damage.
          </p>
        </section>

        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold'>5. Governing Law</h2>
          <p className='text-muted-foreground'>
            These terms and conditions are governed by and construed in accordance with the laws of Florida and you irrevocably submit to the exclusive jurisdiction of the courts in that State.
          </p>
        </section>

        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold'>6. Contact Information</h2>
          <div className='space-y-2 text-muted-foreground'>
            <p>If you have any questions about these Terms, please contact us at <a href="mailto:sean@maclawran.ca" className="text-primary hover:underline">sean@maclawran.ca</a>.</p>
            <div className='mt-4 space-y-2'>
              <p><strong>Maclawran - Myion Service</strong></p>
              <p>Address: 1433 Flagler Ave, Key West, FL 33040</p>
              <p>Email: <a href="mailto:sean@maclawran.ca" className="text-primary hover:underline">sean@maclawran.ca</a></p>
              <p>Phone: +1 (305) 240-2984</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
