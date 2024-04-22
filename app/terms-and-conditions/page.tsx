"use client";

import React from "react";

const TermsAndConditions: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 pt-20">
      <h1 className="text-3xl font-bold mb-8">
        Terms and Conditions for Memox
      </h1>

      <div className="max-w-4xl">
        <p>
          Welcome to Memox! These terms and conditions outline the rules and
          regulations for the use of Memox's app.
        </p>
        <p>
          By accessing this app we assume you accept these terms and conditions.
          Do not continue to use Memox if you do not agree to take all of the
          terms and conditions stated on this page.
        </p>

        <h2 className="font-bold mt-8">1. License</h2>
        <p className="mt-4">
          Unless otherwise stated, Memox and/or its licensors own the
          intellectual property rights for all material on Memox. All
          intellectual property rights are reserved. You may access this from
          Memox for your own personal use subjected to restrictions set in these
          terms and conditions.
        </p>

        <h2 className="font-bold mt-8">2. You must not:</h2>
        <ul>
          <li className="mt-4">• Republish material from Memox</li>
          <li className="mt-4">
            • Sell, rent, or sub-license material from Memox
          </li>
          <li className="mt-4">
            • Reproduce, duplicate, or copy material from Memox
          </li>
          <li className="mt-4">• Redistribute content from Memox</li>
        </ul>

        <h2 className="font-bold mt-8">3. Comments</h2>
        <p className="mt-4">
          Parts of this app offer an opportunity for users to post and exchange
          opinions and information in certain areas of the website. Memox does
          not filter, edit, publish, or review Comments prior to their presence
          on the website. Comments do not reflect the views and opinions of
          Memox, its agents, and/or affiliates. Comments reflect the views and
          opinions of the person who posts their views and opinions. To the
          extent permitted by applicable laws, Memox shall not be liable for the
          Comments or for any liability, damages, or expenses caused and/or
          suffered as a result of any use of and/or posting of and/or appearance
          of the Comments on this website.
        </p>

        <h2 className="font-bold mt-8">4. Content Monitoring</h2>
        <p className="mt-4">
          Memox reserves the right to monitor all Comments and to remove any
          Comments which can be considered inappropriate, offensive, or causes
          breach of these Terms and Conditions.
        </p>

        <h2 className="font-bold mt-8">5. Your Warranties</h2>
        <ul>
          <li className="mt-4">
            You are entitled to post the Comments on our website and have all
            necessary licenses and consents to do so;
          </li>
          <li className="mt-4">
            The Comments do not invade any intellectual property right,
            including without limitation copyright, trademark, patent, or other
            proprietary rights of any third party;
          </li>
          <li className="mt-4">
            The Comments do not contain any defamatory, libelous, offensive,
            indecent, or otherwise unlawful material which is an invasion of
            privacy
          </li>
          <li className="mt-4">
            The Comments will not be used to solicit or promote business or
            custom or present commercial activities or unlawful activity.
          </li>
        </ul>

        <h2 className="font-bold mt-8">6. Reservation of Rights</h2>
        <p className="mt-4">
          We reserve the right to request that you remove all links or any
          particular link to our app. You approve to immediately remove all
          links to our app upon request. We also reserve the right to amend
          these terms and conditions and its linking policy at any time. By
          continuously linking to our app, you agree to be bound to and follow
          these linking terms and conditions.
        </p>

        <h2 className="font-bold mt-8">7. Removal of Links</h2>
        <p className="mt-4">
          If you find any link on our app that is offensive for any reason, you
          are free to contact and inform us at any moment. We will consider
          requests to remove links but we are not obligated to or so or to
          respond to you directly.
        </p>

        <h2 className="font-bold mt-8">8. Disclaimer</h2>
        <p className="mt-4">
          We do not ensure that the information on this app is correct, we do
          not warrant its completeness or accuracy; nor do we promise to ensure
          that the app remains available or that the material on the app is kept
          up to date.
        </p>

        <h2 className="font-bold mt-8">9. Maximum Disclaimer</h2>
        <p className="mt-4">
          To the maximum extent permitted by applicable law, we exclude all
          representations, warranties, and conditions relating to our app and
          the use of this app. Nothing in this disclaimer will:
          <ul>
            <li className="mt-4">
              • limit or exclude our or your liability for death or personal
              injury;
            </li>
            <li className="mt-4">
              • limit or exclude our or your liability for fraud or fraudulent
              misrepresentation;
            </li>
            <li className="mt-4">
              • limit any of our or your liabilities in any way that is not
              permitted under applicable law; or
            </li>
            <li className="mt-4">
              • exclude any of our or your liabilities that may not be excluded
              under applicable law.
            </li>
          </ul>
        </p>

        <h2 className="font-bold mt-8">Contact Us</h2>
        <p className="mt-4 mb-40">
          If you have any questions about these Terms and Conditions, please
          contact us.
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditions;
