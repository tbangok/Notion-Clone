"use client";

const PrivacyPolicy = () => {
  return (
    <div className="= flex flex-col items-center justify-center space-y-4 pt-20">
      <h1 className="text-3xl font-bold mb-8">Privacy Policy for Memox</h1>

      <div className="max-w-4xl">
        <p>
          Welcome to Memox! We are committed to protecting your privacy and
          ensuring that your personal information is handled safely and
          responsibly. This Privacy Policy outlines how we collect, use,
          protect, and share information when you use Memox.
        </p>
        <h2 className="font-bold mt-8">1. Information Collection</h2>
        <ul>
          <li className="mt-4">
            <strong>Personal Information:</strong> When you create an account
            with Memox, we collect personal information such as your name, email
            address, and password.
          </li>
          <li className="mt-4">
            <strong>Notes and Content:</strong> Any text, images, and other
            content you create or upload to the app are stored on our servers.
          </li>
          <li className="mt-4">
            <strong>Usage Data:</strong> We collect data on how you interact
            with the app, which may include date and time stamps of access,
            device information, and the types of features you use.
          </li>
        </ul>

        <h2 className="font-bold mt-8">2. Use of Information</h2>
        <p className="mt-4">
          To provide, maintain, and improve the functionalities of Memox. To
          communicate with you, such as to send you updates and security alerts.
          To enhance the security of our service, including to prevent
          fraudulent use of your account.
        </p>

        <h2 className="font-bold mt-8">3. Sharing of Information</h2>
        <ul>
          <li className="mt-4">
            <strong>Service Providers:</strong> We share your information with
            third-party service providers who perform services on our behalf,
            such as data hosting and maintenance.
          </li>
          <li className="mt-4">
            <strong>Legal Obligations:</strong> We may disclose your information
            if required by law or if we believe it is necessary to protect the
            rights, property, or safety of Memox, our users, or others.
          </li>
          <li className="mt-4">
            <strong>Business Transfers:</strong> In the event of a merger,
            acquisition, or sale of assets, your information may be transferred
            as part of that transaction.
          </li>
        </ul>

        <h2 className="font-bold mt-8">4. Data Security</h2>
        <p className="mt-4">
          We implement a variety of security measures to maintain the safety of
          your personal information. However, no method of transmission over the
          Internet or method of electronic storage is 100% secure.
        </p>

        <h2 className="font-bold mt-8">5. Your Rights</h2>
        <ul>
          <li className="mt-4">
            <strong>Access and Update:</strong> You can review and update your
            personal information through your account settings.
          </li>
          <li className="mt-4">
            <strong>Deletion:</strong> You can request to delete your account
            and your associated data.
          </li>
          <li className="mt-4">
            <strong>Opt-Out:</strong> You have the option to opt out of
            receiving promotional communications from us.
          </li>
        </ul>

        <h2 className="font-bold mt-8">6. Children&apos;s Privacy</h2>
        <p className="mt-4">
          Memox does not knowingly collect or solicit any information from
          anyone under the age of 13. If we learn that we have collected
          personal information from a child under age 13 without verification of
          parental consent, we will delete that information as quickly as
          possible.
        </p>

        <h2 className="font-bold mt-8">7. Changes to Our Privacy Policy</h2>
        <p className="mt-4">
          We may update this Privacy Policy from time to time. We will notify
          you of any changes by posting the new Privacy Policy on this page.
        </p>

        <h2 className="font-bold mt-8 ">Contact Us</h2>
        <p className="mt-4 mb-40">
          If you have any questions about this Privacy Policy, please contact
          us.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
