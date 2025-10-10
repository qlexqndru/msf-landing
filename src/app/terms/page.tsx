export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
          Moldova Security Forum — Terms of Registration & Privacy Notice (GDPR)
        </h1>
        <p className="text-sm text-gray-600 mb-8">Last updated: 9 October 2025</p>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4" style={{ color: '#034889' }}>
              1) Terms of Registration
            </h2>
            <div className="space-y-4 text-gray-700">
              <div>
                <p><strong>Event:</strong> Moldova Security Forum</p>
                <p><strong>Dates & Venue:</strong> 18–19 November 2025 | maib Park, Chișinău</p>
                <p><strong>Format:</strong> On‑site event with QR‑code access</p>
              </div>
              
              <p>
                By ticking "I agree" and submitting the registration form, you ("Participant") enter into an agreement 
                with the Organizer (the entity named on the registration page) and accept these Terms. If you do not 
                agree, please do not register or attend.
              </p>

              <div>
                <p className="mb-2"><strong>Access & credentials.</strong> Your QR code and any access credentials are personal 
                and non‑transferable. Lost or shared codes may be invalidated for security reasons.</p>
                
                <p className="mb-2"><strong>Programme changes.</strong> The Organizer may update agenda items, speakers, or timings.</p>
                
                <p className="mb-2"><strong>Code of conduct.</strong> Be respectful and professional. Harassment, discrimination, 
                or unauthorized solicitation is prohibited. Violations may lead to removal from the event.</p>
                
                <p className="mb-2"><strong>Governing law.</strong> These Terms are governed by the laws of the Republic of Moldova; 
                courts of Chișinău have exclusive jurisdiction.</p>
                
                <p><strong>Contact for general event queries:</strong> [insert organizer contact email].</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4" style={{ color: '#034889' }}>
              2) Privacy Notice (GDPR)
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>The Organizer acts as Data Controller for personal data processed for the Moldova Security Forum.</p>

              <div>
                <h3 className="font-semibold text-lg mb-2">What we collect (minimal)</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>Identification & contact:</strong> name, surname, email, phone (optional).</li>
                  <li><strong>Professional info (optional):</strong> organization, role/function.</li>
                  <li><strong>Access data:</strong> unique registration ID / QR code, check‑in & attendance scans.</li>
                  <li><strong>Technical logs:</strong> basic device/network data necessary for secure delivery of tickets and emails.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">Why we collect it (purpose & legal basis)</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Event updates & logistics</strong> (emails/SMS about schedule, venue, security procedures).<br />
                    <span className="text-sm italic">Legal basis: GDPR Art. 6(1)(b) – performance of a contract (your registration).</span>
                  </li>
                  <li>
                    <strong>Issuing and validating your QR code</strong> for on‑site access and security.<br />
                    <span className="text-sm italic">Legal basis: GDPR Art. 6(1)(b); and Art. 6(1)(f) – our legitimate interest in ensuring secure entry.</span>
                  </li>
                </ul>
                <p className="mt-2">We do not use your details for unrelated marketing without your prior consent.</p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">Who receives your data</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Ticketing / registration / emailing providers strictly to deliver updates and QR codes.</li>
                  <li>Venue and security staff for entrance management and safety.</li>
                  <li>Public authorities only where required by law.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">Retention</h3>
                <p>
                  We keep registration and access data only as long as needed for event delivery, security, 
                  and reporting—no longer than 90 days after the event—unless a longer period is legally required.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">Your rights</h3>
                <p>
                  You can request access, rectification, erasure, restriction, portability, or object to processing. 
                  To exercise your rights, email [insert data protection contact] (or reply to any event email and state your request).
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">Security</h3>
                <p>
                  We apply appropriate technical and organisational measures (encrypted delivery of tickets, 
                  role‑based access, audit logging) to protect your data.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">Updates to this notice</h3>
                <p>
                  Any changes will be published on the registration page; the latest version applies.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}