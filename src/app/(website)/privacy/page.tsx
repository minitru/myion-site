import { COMPANY_NAME } from '@/constants'

export default function PrivacyPage() {
  return (
    <div className='container mx-auto mb-8 max-w-4xl space-y-8 rounded-md bg-white p-8 sm:border'>
      <div className='space-y-4'>
        <h1 className='text-4xl font-bold'>Privacy Policy for Myion by Maclawran</h1>
        <p className='text-muted-foreground'>Last Updated: January 24, 2025</p>
      </div>

      <div className='space-y-8'>
        <section className='space-y-4'>
          <p className='text-muted-foreground'>
            Maclawran, the company behind Myion, is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you use our video-on-demand recording services. By using Myion, you agree to the terms outlined in this policy.
          </p>
        </section>

        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold'>1. Information We Collect</h2>
          <div className='space-y-4 text-muted-foreground'>
            <p>We may collect the following types of information:</p>
            <ul className='ml-6 list-disc space-y-2'>
              <li><strong>Personal Identifiable Information (PII):</strong> Name, email address, phone number, and billing information.</li>
              <li><strong>Video Content Data:</strong> Viewing history and preferences.</li>
              <li><strong>Device Information:</strong> IP address, browser type, operating system, and device identifiers.</li>
              <li><strong>Location Data:</strong> If enabled on your device.</li>
              <li><strong>Communication Data:</strong> Any messages or inquiries sent to our support team.</li>
            </ul>
          </div>
        </section>

        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold'>2. How We Use Your Information</h2>
          <div className='space-y-4 text-muted-foreground'>
            <p>We use the collected data for the following purposes:</p>
            <ul className='ml-6 list-disc space-y-2'>
              <li>To provide and improve Myion's services.</li>
              <li>To personalize your experience by recommending content based on your viewing history.</li>
              <li>For billing and account management.</li>
              <li>To communicate with you about updates or issues related to Myion.</li>
              <li>To comply with legal obligations or enforce our terms of service.</li>
            </ul>
          </div>
        </section>

        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold'>3. Sharing of Information</h2>
          <div className='space-y-4 text-muted-foreground'>
            <p>We do not sell your personal information. However, we may share your data under these circumstances:</p>
            <ul className='ml-6 list-disc space-y-2'>
              <li><strong>Service Providers:</strong> With third-party vendors who assist in providing services such as payment processing or customer support.</li>
              <li><strong>Legal Compliance:</strong> If required by law or to respond to legal processes.</li>
              <li><strong>Consent-Based Sharing:</strong> With your explicit consent for specific purposes.</li>
            </ul>
          </div>
        </section>

        <section className='space-y-4'>
          <p className='text-muted-foreground'>
            Under the Video Privacy Protection Act (VPPA), we will not disclose your viewing history linked to personally identifiable information without your consent.
          </p>
        </section>

        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold'>4. Data Retention</h2>
          <div className='space-y-4 text-muted-foreground'>
            <p>We retain your personal data for as long as necessary to provide our services or comply with legal obligations. Upon account termination or a deletion request, we will securely delete your data within a reasonable timeframe unless otherwise required by law.</p>
          </div>
        </section>

        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold'>5. Security Measures</h2>
          <div className='space-y-4 text-muted-foreground'>
            <p>We implement robust security measures to protect your data from unauthorized access, alteration, disclosure, or destruction. These include encryption, firewalls, and regular security audits.</p>
          </div>
        </section>

        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold'>6. Your Rights</h2>
          <div className='space-y-4 text-muted-foreground'>
            <p>As a user of Myion in Florida, you have the following rights under applicable laws:</p>
            <ul className='ml-6 list-disc space-y-2'>
              <li><strong>Access and Correction:</strong> Request access to your personal data and correct inaccuracies.</li>
              <li><strong>Data Deletion:</strong> Request deletion of your personal data.</li>
              <li><strong>Opt-Out:</strong> Opt out of targeted advertising or the sale of personal data (if applicable).</li>
              <li><strong>Withdraw Consent:</strong> Revoke consent for data sharing at any time.</li>
            </ul>
          </div>
        </section>

        <section className='space-y-4'>
          <div className='space-y-4 text-muted-foreground'>
            <p>To exercise these rights, contact us at <a href="mailto:sean@maclawran.ca" className="text-primary hover:underline">sean@maclawran.ca</a>.</p>
          </div>
        </section>

        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold'>7. Cookies and Tracking Technologies</h2>
          <div className='space-y-4 text-muted-foreground'>
            <p>Myion uses cookies and similar technologies to enhance user experience and gather analytics. You can manage cookie preferences through your browser settings.</p>
          </div>
        </section>

        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold'>8. Children's Privacy</h2>
          <div className='space-y-4 text-muted-foreground'>
            <p>Myion does not knowingly collect personal information from individuals under 18 without parental consent. If we discover that we have inadvertently collected such data, it will be promptly deleted.</p>
          </div>
        </section>

        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold'>9. Updates to This Policy</h2>
          <div className='space-y-4 text-muted-foreground'>
            <p>We may update this Privacy Policy periodically. Any changes will be communicated via email or a prominent notice on our platform. The "Last Updated" date at the top reflects the most recent changes.</p>
          </div>
        </section>

        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold'>10. Contact Us</h2>
          <div className='space-y-2 text-muted-foreground'>
            <p>If you have any questions about this Privacy Policy or how we handle your data, please contact us at:</p>
            <div className='mt-4 space-y-2'>
              <p><strong>Maclawran - Myion Service</strong></p>
              <p>Address: 1433 Flagler Ave, Key West, FL 33040</p>
              <p>Email: sean@maclawran.ca</p>
              <p>Phone: +1 (305) 240-2984</p>
            </div>
          </div>
        </section>

        <section className='space-y-4'>
          <p className='text-muted-foreground'>
            This Privacy Policy complies with relevant laws including the Florida Digital Bill of Rights (FDBR), Florida Information Protection Act (FIPA), and the Video Privacy Protection Act (VPPA).
          </p>
        </section>
      </div>
    </div>
  )
}
