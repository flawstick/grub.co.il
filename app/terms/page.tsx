import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function TermsOfService() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center text-[#FD8000] dark:text-[#FFA500]">Terms of Service</h1>
      <div className="prose dark:prose-invert max-w-none">
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        <p>Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the Grub website and service operated by Grub, Inc.</p>

        <h2>1. Agreement to Terms</h2>
        <p>By accessing or using our Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.</p>

        <h2>2. Use of Service</h2>
        <p>Our Service allows you to order meals from participating restaurants for yourself or your team. You are responsible for maintaining the confidentiality of your account and password and for restricting access to your account.</p>

        <h2>3. Content</h2>
        <p>Our Service allows you to post, link, store, share and otherwise make available certain information, text, graphics, or other material ("Content"). You are responsible for the Content that you post on or through the Service.</p>

        <h2>4. Accounts</h2>
        <p>When you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.</p>

        <h2>5. Intellectual Property</h2>
        <p>The Service and its original content, features, and functionality are and will remain the exclusive property of Grub, Inc. and its licensors.</p>

        <h2>6. Links To Other Web Sites</h2>
        <p>Our Service may contain links to third-party websites or services that are not owned or controlled by Grub, Inc. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services.</p>

        <h2>7. Termination</h2>
        <p>We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.</p>

        <h2>8. Governing Law</h2>
        <p>These Terms shall be governed and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.</p>

        <h2>9. Changes</h2>
        <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.</p>

        <h2>Contact Us</h2>
        <p>If you have any questions about these Terms, please contact us at:</p>
        <p>Grub, Inc.<br />123 Main Street<br />Anytown, USA 12345<br />terms@grub.com</p>
      </div>
      <div className="mt-8 text-center">
        <Button asChild>
          <Link href="/">Return to Home</Link>
        </Button>
      </div>
    </div>
  )
}

