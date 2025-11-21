import { Card, CardContent } from "@/components/ui/card";
import { Shield } from "lucide-react";

export default function Privacy() {
  return (
    <div className="flex flex-col">
      <section className="py-16 md:py-20 bg-card border-b">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <div className="flex items-center gap-3 mb-6">
            <Shield className="h-8 w-8 text-primary" />
            <h1 className="text-4xl md:text-5xl font-bold">Privacy Policy</h1>
          </div>
          <p className="text-muted-foreground font-body">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <Card>
            <CardContent className="p-8 space-y-6 font-body">
              <div>
                <h2 className="text-2xl font-semibold mb-3">Introduction</h2>
                <p className="text-muted-foreground leading-relaxed">
                  At Mr. Catalyst Insurance Agency, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you interact with our services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-3">Information We Collect</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  We collect information that you provide directly to us, including:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Name, email address, and phone number</li>
                  <li>Insurance coverage preferences and requirements</li>
                  <li>Communication preferences</li>
                  <li>Any other information you choose to provide</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-3">How We Use Your Information</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Provide personalized insurance quotes and recommendations</li>
                  <li>Communicate with you about your insurance needs</li>
                  <li>Send you relevant updates and educational content (with your consent)</li>
                  <li>Improve our services and customer experience</li>
                  <li>Comply with legal and regulatory requirements</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-3">Data Security</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. Your data is stored securely and accessed only by authorized personnel.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-3">Information Sharing</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We do not sell, rent, or share your personal information with third parties except as necessary to provide our services (e.g., sharing information with insurance providers to generate quotes) or as required by law.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-3">Your Rights</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Access the personal information we hold about you</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your information</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Withdraw consent at any time</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-3">Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about this Privacy Policy or how we handle your data, please contact us:
                </p>
                <ul className="space-y-1 text-muted-foreground mt-3">
                  <li>Email: info@mrcatalyst.co.ke</li>
                  <li>Phone: 0725 928 653</li>
                  <li>Address: Bishop Garden Tower, Upper Hill, Nairobi</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-3">Changes to This Policy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
