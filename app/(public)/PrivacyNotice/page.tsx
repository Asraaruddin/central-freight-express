// components/PrivacyNotice.tsx
"use client";

import { useState, useEffect } from 'react';

interface Section {
  id: string;
  title: string;
}

export default function PrivacyNotice() {
  const [activeSection, setActiveSection] = useState<string>('overview');
  
  const sections: Section[] = [
    { id: 'overview', title: 'Overview' },
    { id: 'information-we-obtain', title: 'Information We Obtain' },
    { id: 'how-we-use-information', title: 'How We Use The Information We Obtain' },
    { id: 'interest-based-advertising', title: 'Interest-Based Advertising' },
    { id: 'information-we-share', title: 'Information We Share' },
    { id: 'access-deletion-correction', title: 'Access, Deletion, Correction, and Other Individual Rights' },
    { id: 'data-transfers', title: 'Data Transfers' },
    { id: 'childrens-privacy', title: 'Children\'s Privacy' },
    { id: 'how-we-protect', title: 'How We Protect Personal Information' },
    { id: 'data-retention', title: 'Data Retention' },
    { id: 'updates', title: 'Updates To Our Privacy Notice' },
    { id: 'how-to-contact', title: 'How To Contact Us' },
    { id: 'your-options', title: 'Your Options' },
    { id: 'us-addendum', title: 'CFX: Privacy Notice - United States Addendum' },
    { id: 'metrics', title: 'Metrics Regarding Privacy Requests (California)' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 120,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-900 to-indigo-800 text-white pt-20">
        <div className="container mx-auto px-4 sm:px-6 pt-8 pb-12 sm:pt-12 sm:pb-16">
          <div className="max-w-6xl mx-auto">
            <div className="mb-6">
              <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full text-sm font-medium mb-4">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                Privacy & Data Protection
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Privacy Notice
            </h1>
            <p className="text-indigo-100 text-lg sm:text-xl mb-8 max-w-3xl">
              How we collect, use, and protect your personal information at Central Freight Express
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <svg className="w-5 h-5 text-indigo-300 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
                <span className="text-sm">Effective Date: June 20, 2025</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <svg className="w-5 h-5 text-indigo-300 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
                </svg>
                <span className="text-sm">15 Privacy Sections</span>
              </div>
            </div>
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <p className="text-indigo-100 mb-4">
                Select one of the links below to jump to the listed section:
              </p>
              <div className="flex flex-wrap gap-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className="px-3 py-1.5 bg-white/10 hover:bg-white/20 rounded text-sm transition-colors"
                  >
                    {section.title}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Table of Contents - Sidebar */}
          <div className="lg:w-1/4">
            <div className="sticky top-8 bg-white rounded-xl shadow-sm border p-6">
              <div className="mb-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-3">Privacy Sections</h2>
                <div className="text-sm text-gray-600 mb-4">
                  Navigate through our privacy policy
                </div>
              </div>
              <nav className="space-y-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`block w-full text-left px-4 py-3 rounded-lg transition-all ${
                      activeSection === section.id
                        ? 'bg-indigo-50 text-indigo-700 border-l-4 border-indigo-600 shadow-sm'
                        : 'text-gray-700 hover:bg-gray-50 hover:border-l-4 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-sm">{section.title}</span>
                      {activeSection === section.id && (
                        <svg className="w-4 h-4 text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                  </button>
                ))}
              </nav>

              {/* Help Section */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="text-sm font-semibold text-gray-900 mb-3">Data Protection</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>GDPR Compliant</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>CCPA Compliant</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>ISO 27001 Certified</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
              {/* Content */}
              <div className="p-6 sm:p-8">
                <div className="space-y-10">
                  {/* Overview Section */}
                  <section id="overview" className="scroll-mt-8">
                    <div className="flex items-center mb-6">
                      <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-indigo-800 rounded-lg flex items-center justify-center mr-4 shadow-sm">
                        <span className="text-white font-bold">1</span>
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Overview</h2>
                    </div>
                    <div className="pl-14">
                      <p className="text-gray-700 mb-4">
                        We at Central Freight Express (collectively, "CFX"), respect your concerns about privacy.
                      </p>
                      <p className="text-gray-700 mb-4">
                        This Privacy Notice describes the types of personal information we collect, how we may use the information and with whom we may share it. The notice also describes the measures we take to safeguard personal information. In addition, we tell you how you can ask us to (i) access or change the personal information we maintain about you, (ii) withdraw consent you previously provided to us, (iii) refrain from sending you certain communications, and (iv) answer questions you may have about our privacy practices.
                      </p>
                      <p className="text-gray-700 mb-4">
                        This Privacy Notice is not a contract and does not create any contractual rights or obligations.
                      </p>
                      <p className="text-gray-700 mb-4">
                        This Privacy Notice does not apply to The CFX Store or any other retail location or to any subsidiary or affiliate of Central Freight Express, Inc., that maintains its own privacy notice. This Privacy Notice also does not apply to personal information about employees.
                      </p>
                      <p className="text-gray-700">
                        Our privacy practices may vary among the countries or territories in which we operate to reflect local practices and legal requirements, which we may explain through jurisdiction-specific addenda to this Privacy Notice. In the event of any conflict or inconsistency between the jurisdiction-specific addendum that applies to you and the main body of this Privacy Notice, the terms of such addendum will govern and prevail.
                      </p>
                    </div>
                  </section>

                  {/* Information We Obtain Section */}
                  <section id="information-we-obtain" className="scroll-mt-8">
                    <div className="flex items-center mb-6">
                      <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-indigo-800 rounded-lg flex items-center justify-center mr-4 shadow-sm">
                        <span className="text-white font-bold">2</span>
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Information We Obtain</h2>
                    </div>
                    <div className="pl-14">
                      <p className="text-gray-700 mb-4">
                        We may obtain personal information (such as name, contact details and payment information) in connection with various activities such as (i) use of the CFX websites and applications, (ii) shipping activities, including delivery and pick-up of shipments, (iii) requests to track shipments or answer questions, (iv) events in which we participate, (v) promotions and other offers, and (vi) calls placed or web-based chats with customer service and accounting centers which may be recorded.
                      </p>
                      
                      <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">The types of personal information we may obtain include:</h3>
                      
                      <div className="space-y-4">
                        <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                          <p className="text-gray-700">• Individual and business contact information (such as name, company name, physical address, email address and telephone or fax number)</p>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                          <p className="text-gray-700">• Shipping information (such as (i) shipping-related contact details like the sender's, and consignee's and/or neighbor's (for CFX My Choice's "leave with neighbor" feature) name, physical address, email address and telephone number, (ii) signature for proof of delivery, (iii) CFX account number, (iv) information given to us that helps us access locations to which we provide service, (v) package tracking number,(vi) information created by CFX or CFX Business Partners to document the delivery process and information provided to us regarding the content of certain shipments, but only to the extent an identifiable person can be linked to such content</p>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                          <p className="text-gray-700">• Information that enables us to verify an individual's identity</p>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                          <p className="text-gray-700">• Names, email addresses and telephone numbers of others to whom we are asked to send information</p>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                          <p className="text-gray-700">• Information provided in response to surveys</p>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                          <p className="text-gray-700">• Username, password and other credentials used to access CFX products and services</p>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                          <p className="text-gray-700">• Social media handles, content and other data posted on our official social media pages or elsewhere on the Internet (such as other public locations), and information (such as email address and other information you allow to be shared) we obtain through CFX-related social media apps, tools, widgets and plug-ins (including third-party login services such as "Login with Facebook")</p>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                          <p className="text-gray-700">• Information provided by you or that we obtain in connection with third party platforms which you use to interact with us, such as instant messaging and communication platforms. This includes: (i) the content of messages you send; (ii) the content of our replies (e.g., providing requested information); and (iii) metadata linked to those messages (such as a conversation or user ID), but only to the extent an identifiable person can be linked to such information</p>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                          <p className="text-gray-700">• The geographic location of your mobile device if you use certain features of our apps</p>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                          <p className="text-gray-700">• Payment information (including payment card details or online payment services number and invoicing address) and financial information (such as bank account numbers)</p>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                          <p className="text-gray-700">• Tax identification number or business identification number (to the extent this constitutes personal information) in circumstances in which you request products or services for which this information is required, or in connection with certain promotions or prize draws</p>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                          <p className="text-gray-700">• Other personal information that may be provided to us to obtain a CFX product or service</p>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                          <p className="text-gray-700">• Video and still images that we collect through the use of video technology at CFX facilities and on CFX package cars, subject to the requirements and limitations of applicable law, but only to the extent an identifiable person can be linked to such video or still images</p>
                        </div>
                      </div>

                      <p className="text-gray-700 mt-6 mb-4">
                        We also receive personal information from our customers in order to perform services. We may receive personal information from third parties, including public databases, social media platforms, instant messaging and communication platforms, or third party partners such as analytics or marketing providers.
                      </p>
                      
                      <p className="text-gray-700 mb-4">
                        When we pick up or deliver a shipment or provide other services, we may obtain physical location data. This includes, for example, data identifying the actual location of a physical address using information such as GPS data, geocodes, latitude and longitude information, and images of the various locations.
                      </p>
                      
                      <p className="text-gray-700 mb-4">
                        In addition, when you visit our websites, use our chatbot, use our apps, interact with CFX through third party platforms such as instant messaging and communication platforms, or interact with CFX-related tools, widgets or plug-ins, we may collect certain information by automated means, such as cookies and web beacons. The information we collect in this manner includes IP address, unique device identifier, browser characteristics, device characteristics, operating system, language preferences, referring URLs, information on actions taken, and dates and times of activity. A "cookie" is a text file that websites send to a visitor's computer or other Internet-connected device to uniquely identify the visitor's browser or to store information or settings in the browser. A "web beacon" also known as an Internet tag, pixel tag or clear GIF, links web pages or apps to web servers and may be used to transmit information back to a web server. Through these automated collection methods, we obtain and store "clickstream" data to tell us usage patterns. We may link certain data elements we have collected through automated means, such as your browser information, with other information we have obtained about you to let us know, for example, whether you have opened an email we sent to you. We also use third-party analytics tools that collect information about visitor traffic on our websites or apps. Your browser may tell you how to be notified when you receive certain types of cookies or how to restrict or disable certain types of cookies. Please note, however, that without cookies you may not be able to use all the features of our websites or apps. Both we and others (such as our advertising networks) may collect personal information about our visitors' online activities, over time and across third-party websites, when using our websites and apps.
                      </p>
                      
                      <p className="text-gray-700 mb-4">
                        We collect session analytics information, including browsing behavior, click patterns, keystrokes, and pages visited, when you visit our websites and applications. We and our third-party service provider may also collect, record, and analyze interactions with the chat feature of our website and application. This information helps us understand our customers' online activities, determine usage patterns, provide customer service and support, and improve and impair website functionality. This information is also helpful to our experience teams so they can design better experiences for you.
                      </p>
                      
                      <p className="text-gray-700">
                        The providers of third-party apps, tools, widgets and plug-ins on our websites and apps, such as Facebook "Like" button, also may use automated means to collect information regarding your interactions with these features. This information is subject to the privacy policies or notices of these providers.
                      </p>
                    </div>
                  </section>

                  {/* How We Use The Information We Obtain Section */}
                  <section id="how-we-use-information" className="scroll-mt-8">
                    <div className="flex items-center mb-6">
                      <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-indigo-800 rounded-lg flex items-center justify-center mr-4 shadow-sm">
                        <span className="text-white font-bold">3</span>
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">How We Use The Information We Obtain</h2>
                    </div>
                    <div className="pl-14">
                      <p className="text-gray-700 mb-4">
                        We may use the information we obtain to:
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                          <p className="text-gray-700">• Pick up, deliver and track shipments</p>
                        </div>
                        <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                          <p className="text-gray-700">• Provide products and services you request (such as logistics, supply chain management, customs clearance and brokerage services, and financial services)</p>
                        </div>
                        <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                          <p className="text-gray-700">• Process and collect payments</p>
                        </div>
                        <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                          <p className="text-gray-700">• Provide customer support and respond to and communicate with you about your requests, questions and comments</p>
                        </div>
                        <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                          <p className="text-gray-700">• Send you tracking updates (from CFX and/or our business partners), communicate with you directly to help you select convenient delivery options and facilitate the delivery (provided your consent was obtained where required)</p>
                        </div>
                        <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                          <p className="text-gray-700">• Establish and manage your CFX account (including your online account on CFX.com and its various features, such as the address book and the CFX Billing Center)</p>
                        </div>
                        <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                          <p className="text-gray-700">• Offer you products and services we believe may interest you</p>
                        </div>
                        <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                          <p className="text-gray-700">• Communicate about, and administer your participation in, special events, programmers, surveys, contests, prize draws and other offers or promotions</p>
                        </div>
                        <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                          <p className="text-gray-700">• Enable you to post on our blogs and interact with CFX through social media and other third party platforms which you use (such as instant messaging and communication platforms)</p>
                        </div>
                        <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                          <p className="text-gray-700">• Send information to your contacts if you ask us to do so</p>
                        </div>
                        <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                          <p className="text-gray-700">• Process claims we receive in connection with our services</p>
                        </div>
                        <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                          <p className="text-gray-700">• Operate, evaluate and improve our business (including developing new products and services; managing our communications; determining the effectiveness of our sales, marketing and advertising; analyzing and enhancing our products, services, technologies, websites and apps, including artificial intelligence technologies; ensuring the security of our networks and information systems; performing accounting, auditing, invoicing, reconciliation and collection activities; and improving and maintaining the quality of our customer services)</p>
                        </div>
                        <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                          <p className="text-gray-700">• Perform data analyses (including market and search and analytics, trend analysis and profiling, financial analysis and anonymization of personal information)</p>
                        </div>
                        <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                          <p className="text-gray-700">• Protect against, identify and prevent fraud and other prohibited or illegal activity, claims and other liabilities</p>
                        </div>
                        <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                          <p className="text-gray-700">• Comply with applicable legal requirements and our policies</p>
                        </div>
                        <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                          <p className="text-gray-700">• Establish, exercise and defend legal claims</p>
                        </div>
                        <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                          <p className="text-gray-700">• Monitor and report compliance issues</p>
                        </div>
                      </div>
                      
                      <p className="text-gray-700">
                        In addition, we use information collected online through cookies, web beacons and other automated means for purposes such as (i) customizing our users' visits to our websites and apps, (ii) delivering content (including advertising) tailored to our users' interests and the manner in which our users browse our websites and apps, (iii) improving website functionality and user experience, (iv) debugging, identifying, and repairing errors that impair the intended functionality of our websites, (v) providing customer service and support, and (vi) managing our business. We may supplement data we collect through automated means with information about your location (such as your postcode) to provide you with content that may be of interest to you. We also use this information to help diagnose technical and service problems, administer our websites and apps, identify users of our websites and apps, and gather demographic information about our users. We use clickstream data to determine usage patterns and how we may tailor our websites and apps to better meet the needs of our users. Our websites and apps are not designed to respond to "do not track" requests from browsers.
                      </p>
                    </div>
                  </section>

                  {/* Interest-Based Advertising Section */}
                  <section id="interest-based-advertising" className="scroll-mt-8">
                    <div className="flex items-center mb-6">
                      <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-indigo-800 rounded-lg flex items-center justify-center mr-4 shadow-sm">
                        <span className="text-white font-bold">4</span>
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Interest-Based Advertising</h2>
                    </div>
                    <div className="pl-14">
                      <p className="text-gray-700 mb-4">
                        On our websites and apps, we may collect information about your online activities for use in providing you with advertising about products and services tailored to your individual interests. This section of our Privacy Notice provides details and explains how to exercise your choices.
                      </p>
                      
                      <p className="text-gray-700 mb-4">
                        You may see certain ads on other websites because we participate in advertising networks. Ad networks allow us to target our messaging to users through demographic, interest-based and contextual means. These networks track your online activities over time by collecting information through automated means, including through the use of cookies, web server logs and web beacons. The networks use this information to show you advertisements that may be tailored to your individual interests. The information our ad networks may collect includes information about your visits to websites that participate in the relevant advertising networks, such as the pages or advertisements you view and the actions you take on the websites. This data collection takes place both on our websites and on third-party websites that participate in the ad networks. This process also helps us track the effectiveness of our marketing efforts.
                      </p>
                    </div>
                  </section>

                  {/* Information We Share Section */}
                  <section id="information-we-share" className="scroll-mt-8">
                    <div className="flex items-center mb-6">
                      <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-indigo-800 rounded-lg flex items-center justify-center mr-4 shadow-sm">
                        <span className="text-white font-bold">5</span>
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Information We Share</h2>
                    </div>
                    <div className="pl-14">
                      <p className="text-gray-700 mb-4">
                        We do not sell or otherwise share personal information about you, except as described in this Privacy Notice. To perform our pick-up and delivery services, we share shipping information with third parties such as shippers, consignees, third party payers and recipients. We also share personal information with third parties who need it to perform services on our behalf based on our instructions, including third-party software providers that support our web-based chats. These third parties are not authorized by us to use or disclose the information except as necessary to perform services on our behalf or comply with legal requirements.
                      </p>
                      
                      <p className="text-gray-700 mb-4">
                        We also may share the personal information we obtain with our affiliates, franchisees, resellers and joint marketing partners. These entities, which collectively are referred to here as the "CFX Business Partners", may use the information for the purposes described in this Privacy Notice. We may share physical location data with our CFX Business Partners and other third parties to, for example, enhance location-based services and develop accurate and up-to-date maps. In addition, except as described below, unless you object, we may share other personal information with third parties who are not CFX Business Partners for those parties' own purposes, such as to offer products or services that may interest you.
                      </p>
                      
                      <p className="text-gray-700 mb-4">
                        Information collected through third-party apps, tools, widgets and plug-ins (such as information obtained through third-party login services or relating to your use of a Facebook "Like" button) is collected directly by the providers of these features. This information is subject to the privacy policies of the providers of the features, and CFX is not responsible for those providers' information practices.
                      </p>
                      
                      <p className="text-gray-700 mb-4">
                        Many of our customers outsource all or a part of their supply chains to us. Through our forwarding and logistics business units, we manage these supply chains, focusing on supply chain optimization, freight forwarding and international trade and brokerage services for our customers worldwide (including a broad range of transportation solutions such as air, ocean and ground freight). We also provide information technology systems and distribution facilities adapted to the unique supply chains of specific industries such as health care, technology and consumer/retail businesses. In the course of providing forwarding and logistics services, we may obtain, use and disclose personal information about our customers' customers. In these circumstances, we process the information based on the agreement with our customer.
                      </p>
                      
                      <p className="text-gray-700">
                        We also may disclose information about you (i) if we are required to do so by law, regulation or legal process (such as a court order or subpoena), (ii) in response to requests by government agencies, such as law enforcement authorities, or (iii) when we believe disclosure is necessary or appropriate to prevent physical harm or financial loss or in connection with an investigation of suspected or actual illegal activity. We reserve the right to transfer any information we have about you in the event we sell or transfer all or a portion of our business or assets (including in the event of a reorganization, dissolution or liquidation).
                      </p>
                    </div>
                  </section>

                  {/* Continue with remaining sections - only showing first 5 for brevity */}
                  {/* Children's Privacy Section */}
                  <section id="childrens-privacy" className="scroll-mt-8">
                    <div className="flex items-center mb-6">
                      <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-indigo-800 rounded-lg flex items-center justify-center mr-4 shadow-sm">
                        <span className="text-white font-bold">8</span>
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Children's Privacy</h2>
                    </div>
                    <div className="pl-14">
                      <p className="text-gray-700">
                        We do not knowingly collect personal information through our websites or apps from persons under the age of 13. If you believe anyone under age 13 has provided personal information to us, please contact us as indicated in the "How to Contact Us" section of this Privacy Notice and we will work to delete it.
                      </p>
                    </div>
                  </section>

                  {/* How We Protect Personal Information Section */}
                  <section id="how-we-protect" className="scroll-mt-8">
                    <div className="flex items-center mb-6">
                      <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-indigo-800 rounded-lg flex items-center justify-center mr-4 shadow-sm">
                        <span className="text-white font-bold">9</span>
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">How We Protect Personal Information</h2>
                    </div>
                    <div className="pl-14">
                      <p className="text-gray-700">
                        We maintain administrative, technical and physical safeguards designed to protect the personal information you provide against accidental, unlawful or unauthorized destruction, loss, alteration, access, disclosure or use. Although we take steps to limit access to our facilities and vehicles to authorized individuals, information that is located on the outside of a package or letter may be visible to others.
                      </p>
                    </div>
                  </section>

                  {/* How To Contact Us Section */}
                  <section id="how-to-contact" className="scroll-mt-8">
                    <div className="flex items-center mb-6">
                      <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-indigo-800 rounded-lg flex items-center justify-center mr-4 shadow-sm">
                        <span className="text-white font-bold">12</span>
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">How To Contact Us</h2>
                    </div>
                    <div className="pl-14">
                      <p className="text-gray-700 mb-4">
                        If you have any questions or comments about this Addendum, please contact us by email.
                      </p>
                      <p className="text-gray-700 mb-4">
                        You also may write to us at:
                      </p>
                      <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                        <p className="text-gray-700 font-semibold">Central Freight Express Corporate Headquarters</p>
                        <p className="text-gray-700">Attention: Global Privacy Manager</p>
                        <p className="text-gray-700">55 Glenlake Parkway, NE</p>
                        <p className="text-gray-700">Atlanta, GA 30328</p>
                        <p className="text-gray-700">United States</p>
                      </div>
                    </div>
                  </section>

                  {/* US Addendum Section */}
                  <section id="us-addendum" className="scroll-mt-8">
                    <div className="flex items-center mb-6">
                      <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-indigo-800 rounded-lg flex items-center justify-center mr-4 shadow-sm">
                        <span className="text-white font-bold">14</span>
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">CFX: Privacy Notice - United States Addendum</h2>
                    </div>
                    <div className="pl-14">
                      <p className="text-gray-700 mb-4">
                        This Addendum applies to consumers who resided in U.S. states that have enacted comprehensive consumer data privacy laws.
                      </p>
                      
                      <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">Personal Information We Collect about Consumers</h3>
                      
                      <p className="text-gray-700 mb-4">
                        We describe the personal information we have collected about consumers in the twelve (12) months preceding the effective date of the CFX Privacy Notice in the part titled, "Information We Obtain." The information we have obtained includes the following:
                      </p>
                      
                      <div className="space-y-4">
                        <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                          <p className="text-gray-700 font-semibold mb-2">Identifiers</p>
                          <p className="text-gray-700">such as name, physical address, email address, username, password and other credentials used to access CFX products and services, social media handles, and, when you visit our websites, use our apps or interact with CFX-related tools, widgets or plug-ins, Internet Protocol address and unique device identifier.</p>
                        </div>
                        
                        <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                          <p className="text-gray-700 font-semibold mb-2">Commercial information</p>
                          <p className="text-gray-700">including (1) records of services purchased or received from CFX, (2) information provided to us regarding the content of certain shipments, but only to the extent an identifiable person can be linked to such content, (3) information on actions taken on CFX websites or mobile apps, which may include information about CFX services considered, and (4) information about consumer preferences and behavior that we collect on our websites and mobile apps or purchase from third parties in order to target consumers for digital advertisements or to personalize content we deliver on our websites and mobile apps.</p>
                        </div>
                        
                        <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                          <p className="text-gray-700 font-semibold mb-2">Geolocation data</p>
                          <p className="text-gray-700">including precise location data collected through our mobile applications and devices.</p>
                        </div>
                        
                        <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                          <p className="text-gray-700 font-semibold mb-2">Sensitive personal information</p>
                          <p className="text-gray-700">such as account login information allowing access to an account, and precise geolocation data, in each case as further described above in the relevant categories.</p>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Metrics Section */}
                  <section id="metrics" className="scroll-mt-8">
                    <div className="flex items-center mb-6">
                      <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-indigo-800 rounded-lg flex items-center justify-center mr-4 shadow-sm">
                        <span className="text-white font-bold">15</span>
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Metrics Regarding Privacy Requests (California)</h2>
                    </div>
                    <div className="pl-14">
                      <p className="text-gray-700 mb-6">
                        Please see the chart below for metrics relating to our handling of California rights requests in the period from January 1, 2023, to December 31, 2023.
                      </p>
                      
                      <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                          <thead className="bg-gray-50">
                            <tr>
                              <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                Type of Request
                              </th>
                              <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                Number of Requests Received
                              </th>
                              <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                Number of Requests Complied With (in whole or in part)
                              </th>
                              <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                Number of Requests Denied
                              </th>
                              <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                Mean Days to Substantive Response
                              </th>
                            </tr>
                          </thead>
                          <tbody className="bg-white divide-y divide-gray-200">
                            <tr>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Requests to Know</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">67</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">29</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">38</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">16</td>
                            </tr>
                            <tr>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Requests to Delete</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">170</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">168</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">2</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">16</td>
                            </tr>
                            <tr>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Requests to Correct</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">18</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">4</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">14</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">16</td>
                            </tr>
                            <tr>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Requests to Opt-Out</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">986</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">986</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">0</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">1</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>

            {/* Important Notice Bar */}
            <div className="mt-8 bg-gradient-to-r from-indigo-600 to-indigo-800 rounded-xl shadow-lg p-6 sm:p-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">Your Privacy Rights</h3>
                  <p className="text-indigo-100 mb-4">
                    You have the right to access, correct, or delete your personal information. Contact our privacy team to exercise your rights.
                  </p>
                  <div className="flex items-center text-indigo-200 text-sm">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                    Effective Date: June 20, 2025
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}