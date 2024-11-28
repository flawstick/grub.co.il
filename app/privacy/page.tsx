import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center text-[#FD8000] dark:text-[#FFA500]">Privacy Policy</h1>
      <div className="prose dark:prose-invert max-w-none">
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        <p>At Grub, we take your privacy seriously. This Privacy Policy describes how we collect, use, and share your personal information when you use our services.</p>

        <h2>Information We Collect</h2>
        <p>We collect information you provide directly to us, such as when you create an account, place an order, or contact us for support. This may include:</p>
        <ul>
          <li>Name and contact information</li>
          <li>Payment information</li>
          <li>Dietary preferences and restrictions</li>
          <li>Order history</li>
        </ul>

        <h2>How We Use Your Information</h2>
        <p>We use your information to:</p>
        <ul>
          <li>Provide, maintain, and improve our services</li>
          <li>Process transactions and send related information</li>
          <li>Send you technical notices, updates, and support messages</li>
          <li>Respond to your comments and questions</li>
          <li>Develop new products and services</li>
        </ul>

        <h2>Sharing of Information</h2>
        <p>We may share your information with:</p>
        <ul>
          <li>Restaurants to fulfill your orders</li>
          <li>Service providers who perform services on our behalf</li>
          <li>Law enforcement or other third parties in response to a legal request</li>
        </ul>

        <h2>Your Choices</h2>
        <p>You can access and update certain information about you from within your Grub account. You may also opt out of receiving promotional communications from us by following the instructions in those messages.</p>

        <h2>Changes to This Policy</h2>
        <p>We may change this privacy policy from time to time. If we make changes, we will notify you by revising the date at the top of the policy.</p>

        <h2>Contact Us</h2>
        <p>If you have any questions about this privacy policy, please contact us at:</p>
        <p>Grub, Inc.<br />123 Main Street<br />Anytown, USA 12345<br />privacy@grub.com</p>
      </div>
      <div className="mt-8 text-center">
        <Button asChild>
          <Link href="/">Return to Home</Link>
        </Button>
      </div>
    </div>
  )
}

