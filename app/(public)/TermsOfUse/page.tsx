// components/TermsOfUse.tsx
"use client";

import { useState, useEffect } from 'react';

interface Section {
  id: string;
  title: string;
}

export default function TermsOfUse() {
  const [activeSection, setActiveSection] = useState<string>('overview');
  
  const sections: Section[] = [
    { id: 'overview', title: '1. Overview' },
    { id: 'user-eligibility', title: '2. User Eligibility' },
    { id: 'scope', title: '3. Scope of Terms of Use' },
    { id: 'modifications', title: '4. Modifications' },
    { id: 'service-terms', title: '5. CFX Service Terms and Conditions' },
    { id: 'information-submitted', title: '6. Information Submitted through the Website and the Services' },
    { id: 'license-ownership', title: '7. License and Ownership' },
    { id: 'restrictions', title: '8. Restrictions on Use of the Website' },
    { id: 'shipping-access', title: '9. Access to Shipping Related Systems and Information through the Website' },
    { id: 'links', title: '10. Links' },
    { id: 'submissions', title: '11. Submissions' },
    { id: 'termination', title: '12. Termination' },
    { id: 'disclaimer', title: '13. Disclaimer of Warranties' },
    { id: 'liability', title: '14. Limitation of Liability' },
    { id: 'compliance-law', title: '15. Compliance with Law Including Export Control' },
    { id: 'forward-looking', title: '16. Forward-Looking Statements' },
    { id: 'jurisdiction', title: '17. Jurisdiction' },
    { id: 'governing-law', title: '18. Governing Law and Language' },
    { id: 'general', title: '19. General' },
    { id: 'written-document', title: '20. Written Document' },
    { id: 'complete-agreement', title: '21. Complete Agreement' },
    { id: 'quebec-residents', title: '22. For Residents of Quebec' },
    { id: 'customer-service', title: '23. Customer Service' },
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
      {/* Hero Section - Extended to cover navbar area */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white pt-20">
        <div className="container mx-auto px-4 sm:px-6 pt-8 pb-12 sm:pt-12 sm:pb-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full text-sm font-medium mb-4">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                Legal Documentation
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Website Terms of Use
            </h1>
            <p className="text-blue-100 text-lg sm:text-xl mb-8 max-w-2xl mx-auto">
              Understanding the terms that govern your use of Central Freight Express services
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <svg className="w-5 h-5 text-blue-300 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
                <span className="text-sm">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <svg className="w-5 h-5 text-blue-300 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
                </svg>
                <span className="text-sm">23 Legal Sections</span>
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
                <h2 className="text-lg font-semibold text-gray-900 mb-3">Table of Contents</h2>
                <div className="text-sm text-gray-600 mb-4">
                  Navigate through the 23 sections of our terms
                </div>
              </div>
              <nav className="space-y-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`block w-full text-left px-4 py-3 rounded-lg transition-all ${
                      activeSection === section.id
                        ? 'bg-blue-50 text-blue-700 border-l-4 border-blue-600 shadow-sm'
                        : 'text-gray-700 hover:bg-gray-50 hover:border-l-4 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-sm">{section.title}</span>
                      {activeSection === section.id && (
                        <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                  </button>
                ))}
              </nav>

              {/* Help Section */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="text-sm font-semibold text-gray-900 mb-3">Need Help?</h3>
                <div className="space-y-3">
                  <a href="/contact-us" className="flex items-center space-x-2 text-sm text-gray-600 hover:text-blue-600 transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>Contact Legal Team</span>
                  </a>
                  <a href="/legal-terms" className="flex items-center space-x-2 text-sm text-gray-600 hover:text-blue-600 transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span>View All Legal Terms</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
              {/* Important Notice */}
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 border-b border-blue-200 p-6 sm:p-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 sm:w-7 sm:h-7 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4 flex-1">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Important Notice</h3>
                    <p className="text-gray-700 mb-4">
                      Please read these Website Terms of Use carefully before using this Website ("The Website").
                      By accessing or using the website, you and the entity you are authorized to represent 
                      ("you" or "your") signify your agreement to be bound by the Terms of Use.
                    </p>
                    <div className="flex items-center text-sm text-gray-700">
                      <svg className="w-5 h-5 mr-2 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>These terms are legally binding. Please review them thoroughly.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Terms Content */}
              <div className="p-6 sm:p-8">
                <div className="space-y-10">
                  {/* Overview Section */}
                  <section id="overview" className="scroll-mt-8">
                    <div className="flex items-center mb-6">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center mr-4 shadow-sm">
                        <span className="text-white font-bold">1</span>
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Overview</h2>
                    </div>
                    <div className="pl-14">
                      <p className="text-gray-700 mb-4">
                        These website Terms of Use (the "Terms of Use") govern your access to and use of the website. 
                        The website is available for your use only on the condition that you agree to the Terms of Use set forth below. 
                        If you do not agree to all of the Terms of Use, do not access or use the website. By accessing or using the website, 
                        you and the entity you are authorized to represent ("you" or "your") signify your agreement to be bound by the Terms of Use.
                      </p>
                    </div>
                  </section>

                  {/* User Eligibility Section */}
                  <section id="user-eligibility" className="scroll-mt-8">
                    <div className="flex items-center mb-6">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center mr-4 shadow-sm">
                        <span className="text-white font-bold">2</span>
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">User Eligibility</h2>
                    </div>
                    <div className="pl-14">
                      <p className="text-gray-700">
                        The Website is provided by Central Freight Express and available only to entities and persons over the age of legal majority 
                        who can form legally binding agreement(s) under applicable law. If You do not qualify, You are not permitted to use the Website.
                      </p>
                    </div>
                  </section>

                  {/* Scope Section */}
                  <section id="scope" className="scroll-mt-8">
                    <div className="flex items-center mb-6">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center mr-4 shadow-sm">
                        <span className="text-white font-bold">3</span>
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Scope of Terms of Use</h2>
                    </div>
                    <div className="pl-14">
                      <p className="text-gray-700">
                        These Terms of Use govern Your use of the Website and all applications, software, and services 
                        (collectively, "Services") available on the Website, except to the extent such Services are the subject of a separate agreement. 
                        Specific terms or agreements may apply to the use of certain Services and other items provided to You on the Website 
                        ("Service Agreement(s)"). Any such Service Agreements accompany the applicable Services or are listed in association with 
                        or through a hyperlink associated with the applicable Services.
                      </p>
                    </div>
                  </section>

                  {/* Modifications Section */}
                  <section id="modifications" className="scroll-mt-8">
                    <div className="flex items-center mb-6">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center mr-4 shadow-sm">
                        <span className="text-white font-bold">4</span>
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Modifications</h2>
                    </div>
                    <div className="pl-14">
                      <p className="text-gray-700 mb-4">
                        Central Freight Express may revise and update these Terms of Use at any time. Your continued usage of the Website after any changes to 
                        these Terms of Use will mean You accept those changes. Any aspect of the Website may be changed, supplemented, 
                        deleted or updated without notice at the sole discretion of Central Freight Express.
                      </p>
                      <p className="text-gray-700">
                        Central Freight Express may also change or impose fees for products and services provided through the Website at any time in its sole discretion. 
                        Central Freight Express may establish or change, at any time, general practices and limits concerning other Central Freight Express products and services in its sole discretion.
                      </p>
                    </div>
                  </section>

                  {/* Continue with other sections... */}
                  <section id="service-terms" className="mb-10 scroll-mt-32">
                    <div className="flex items-center mb-6">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center mr-4 shadow-sm">
                        <span className="text-white font-bold">5</span>
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">CFX Service Terms and Conditions</h2>
                    </div>
                    <div className="pl-14">
                      <p className="text-gray-700">
                        The service terms and conditions of Central Freight Express (the "CFX Service Terms and Conditions") applicable to the transportation 
                        and related services provided by Central Freight Express govern Your use of such Central Freight Express transportation and related services obtained through 
                        this Website, in addition to any other terms and conditions that may be applicable to such transaction as provided 
                        in these Website Terms of Use and the Service Agreement(s). The CFX Service Terms and Conditions are hereby incorporated 
                        into these Terms of Use, such that all references herein to the Terms of Use shall be deemed to include, to the extent applicable, 
                        the CFX Service Terms and Conditions.
                      </p>
                    </div>
                  </section>

                  <section id="information-submitted" className="mb-10 scroll-mt-32">
                    <div className="flex items-center mb-6">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center mr-4 shadow-sm">
                        <span className="text-white font-bold">6</span>
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Information Submitted through the Website and the Services</h2>
                    </div>
                    <div className="pl-14">
                      <p className="text-gray-700 mb-4">
                        Your submission of information through the Website and the Services is governed by these Terms of Use. 
                        You represent and warrant that any information You provide through the Website or the Services is and will remain accurate 
                        and complete, and that You will maintain and update such information as needed.
                      </p>
                      <p className="text-gray-700">
                        With respect to any individual whose personal information is provided by You to Central Freight Express through the Website and the Services, 
                        You represent to Central Freight Express that You have the authority to provide such information and that You have provided all necessary 
                        notice and obtained all necessary consents for the processing of such information contemplated by the Services You are using.
                      </p>
                    </div>
                  </section>

                  <section id="license-ownership" className="mb-10 scroll-mt-32">
                    <div className="flex items-center mb-6">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center mr-4 shadow-sm">
                        <span className="text-white font-bold">7</span>
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">License and Ownership</h2>
                    </div>
                    <div className="pl-14">
                      <p className="text-gray-700 mb-4">
                        Any and all intellectual property rights ("Intellectual Property") associated with the Website and its contents 
                        (the "Content") are the sole property of Central Freight Express, its affiliates or third parties. The Content is protected by copyright 
                        and other laws in both the United States and other countries.
                      </p>
                      <p className="text-gray-700">
                        Central Freight Express grants You a limited, personal, nontransferable, nonsublicensable, revocable license to (a) access and use only 
                        the Website, Content and Services only in the manner presented by Central Freight Express, and (b) access and use the CFX computer and 
                        network services offered within the Website (the "CFX Systems") only in the manner expressly permitted by Central Freight Express.
                      </p>
                    </div>
                  </section>

                  <section id="restrictions" className="mb-10 scroll-mt-32">
                    <div className="flex items-center mb-6">
                       <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center mr-4 shadow-sm">
                        <span className="text-white font-bold">8</span>
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Restrictions on Use of the Website</h2>
                    </div>
                    <div className="pl-14">
                      <p className="text-gray-700 mb-4">
                        In addition to other restrictions set forth in these Terms of Use, You agree that:
                      </p>
                      <ul className="list-disc pl-6 text-gray-700 space-y-3">
                        <li>You shall not disguise the origin of information transmitted through the Website.</li>
                        <li>You will not place false or misleading information on the Website.</li>
                        <li>You will not use or access any service, information, application or software available via the Website in a manner not expressly permitted by Central Freight Express.</li>
                        <li>You will not input or upload to the Website any information which contains viruses, Trojan horses, worms, time bombs or other computer programming routines that are intended to damage, interfere with, intercept or expropriate any system.</li>
                        <li>Certain areas of the Website are restricted to customers of Central Freight Express.</li>
                        <li>You may not use or access the Website or the CFX Systems or Services in any way that, in Central Freight Express's judgment, adversely affects the performance or function of the CFX Systems.</li>
                      </ul>
                    </div>
                  </section>

                  <section id="shipping-access" className="mb-10 scroll-mt-32">
                    <div className="flex items-center mb-6">
                       <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center mr-4 shadow-sm">
                        <span className="text-white font-bold">9</span>
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Access to Shipping Related Systems and Information through the Website</h2>
                    </div>
                    <div className="pl-14">
                      <p className="text-gray-700 mb-4">
                        Your use and access of the Shipping Related Systems and Information are subject to the following terms:
                      </p>
                      <p className="text-gray-700 mb-4">
                        The "Shipping Related Systems" are comprised of the CFX Systems which are used to provide tracking, time in transit, 
                        CFX locations, address validation and other functions and information related to the shipment of packages via Central Freight Express.
                      </p>
                      <p className="text-gray-700">
                        The Shipping Related Systems and Information gained from such systems ("Shipping Information") are to be used by You 
                        solely in connection with packages shipped by or to You or on Your behalf and for no other purpose.
                      </p>
                    </div>
                  </section>

                  <section id="links" className="mb-10 scroll-mt-32">
                    <div className="flex items-center mb-6">
                       <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center mr-4 shadow-sm">
                        <span className="text-white font-bold">10</span>
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Links</h2>
                    </div>
                    <div className="pl-14">
                      <p className="text-gray-700 mb-4">
                        <strong>Outbound Links:</strong> The Website may contain links to third-party Websites and resources (collectively, "Linked Sites"). 
                        These Linked Sites are provided solely as a convenience to You and not as an endorsement by Central Freight Express.
                      </p>
                      <p className="text-gray-700">
                        <strong>Inbound Links:</strong> Linking to any page of the Website other than to http://www.centralfreightexpress.com through a plain text link 
                        is strictly prohibited in the absence of a separate linking agreement with Central Freight Express.
                      </p>
                    </div>
                  </section>

                  <section id="submissions" className="mb-10 scroll-mt-32">
                    <div className="flex items-center mb-6">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center mr-4 shadow-sm">
                        <span className="text-white font-bold">11</span>
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Submissions</h2>
                    </div>
                    <div className="pl-14">
                      <p className="text-gray-700">
                        Central Freight Express does not accept ideas, concepts, or techniques for new services or products through the Website ("Comments"). 
                        If such Comments are received, You acknowledge that (a) they will not be considered confidential or proprietary, 
                        (b) Central Freight Express and its affiliates are under no obligation to keep such information confidential, and (c) Central Freight Express will have an unrestricted, 
                        irrevocable, world-wide, royalty-free right to use, communicate, reproduce, publish, display, distribute, and exploit 
                        such Comments in any manner it chooses.
                      </p>
                    </div>
                  </section>

                  <section id="termination" className="mb-10 scroll-mt-32">
                    <div className="flex items-center mb-6">
                       <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center mr-4 shadow-sm">
                        <span className="text-white font-bold">12</span>
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Termination</h2>
                    </div>
                    <div className="pl-14">
                      <p className="text-gray-700">
                        You agree that Central Freight Express, in its sole discretion, may terminate or suspend Your use of the Website, the CFX Systems, 
                        Information, Services and Content at any time and for any or no reason in its sole discretion, even if access and 
                        use continues to be allowed to others. Upon such suspension or termination, You must immediately (a) discontinue use 
                        of the Website, and (b) destroy any copies You have made of any portion of the Content.
                      </p>
                    </div>
                  </section>

                  <section id="disclaimer" className="mb-10 scroll-mt-32">
                    <div className="flex items-center mb-6">
                       <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center mr-4 shadow-sm">
                        <span className="text-white font-bold">13</span>
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Disclaimer of Warranties</h2>
                    </div>
                    <div className="pl-14">
                      <p className="text-gray-700 mb-4">
                        Central Freight Express makes no representations about the results to be obtained from using the website, the CFX systems, 
                        the services, the information or the content. The use of same is at your own risk.
                      </p>
                      <p className="text-gray-700">
                        The website, the CFX systems, the information, the services and the content are provided on an "as is" basis. 
                        Central Freight Express, its licensors, and its suppliers, to the fullest extent permitted by law, disclaim all warranties, either 
                        express or implied, statutory or otherwise, including but not limited to the implied warranties of merchantability, 
                        non-infringement of third parties' rights, and fitness for a particular purpose.
                      </p>
                    </div>
                  </section>

                  <section id="liability" className="mb-10 scroll-mt-32">
                    <div className="flex items-center mb-6">
                       <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center mr-4 shadow-sm">
                        <span className="text-white font-bold">14</span>
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Limitation of Liability</h2>
                    </div>
                    <div className="pl-14">
                      <p className="text-gray-700 mb-4">
                        To the extent permitted by applicable law and to the extent that Central Freight Express is otherwise found responsible for any damages, 
                        Central Freight Express is responsible for actual damages only.
                      </p>
                      <p className="text-gray-700">
                        To the extent permitted by law, in no event shall Central Freight Express, its affiliates, its licensors, its suppliers or any third parties 
                        mentioned at the website be liable for any incidental, indirect, exemplary, punitive and consequential damages, 
                        lost profits, or damages resulting from lost data or business interruption resulting from the use of or inability 
                        to use the website.
                      </p>
                    </div>
                  </section>

                  <section id="compliance-law" className="mb-10 scroll-mt-32">
                    <div className="flex items-center mb-6">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center mr-4 shadow-sm">
                        <span className="text-white font-bold">15</span>
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Compliance with Law Including Export Control</h2>
                    </div>
                    <div className="pl-14">
                      <p className="text-gray-700 mb-4">
                        You agree to use the Website in strict compliance with all applicable laws, rulings and regulations and in a fashion 
                        that does not, in the sole judgment of Central Freight Express, negatively reflect on the goodwill or reputation of Central Freight Express and shall take 
                        no actions which would cause Central Freight Express to be in violation of any laws, rulings or regulations applicable to Central Freight Express.
                      </p>
                      <p className="text-gray-700">
                        Central Freight Express and the Website are based in the United States. The United States and certain other jurisdictions control the export 
                        of products and information. You agree to comply with all such applicable restrictions and not to export or re-export 
                        the Content (including any software or the Services) to countries or persons prohibited under the United States or other 
                        applicable export control laws or regulations.
                      </p>
                    </div>
                  </section>

                  <section id="forward-looking" className="mb-10 scroll-mt-32">
                    <div className="flex items-center mb-6">
                       <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center mr-4 shadow-sm">
                        <span className="text-white font-bold">16</span>
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Forward-Looking Statements</h2>
                    </div>
                    <div className="pl-14">
                      <p className="text-gray-700">
                        Except for historical information contained herein, the statements made in this Website constitute forward-looking 
                        statements within the meaning of Section 27A of the Securities Act of 1933 and Section 21E of the Securities Exchange Act of 1934. 
                        Such forward-looking statements involve certain risks and uncertainties, including statements regarding the intent, 
                        belief or current expectations of Central Freight Express and its management regarding the company's strategic directions, prospects and future results.
                      </p>
                    </div>
                  </section>

                  <section id="jurisdiction" className="mb-10 scroll-mt-32">
                    <div className="flex items-center mb-6">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center mr-4 shadow-sm">
                        <span className="text-white font-bold">17</span>
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Jurisdiction</h2>
                    </div>
                    <div className="pl-14">
                      <p className="text-gray-700">
                        To the fullest extent permitted by law, you hereby expressly agree that any proceeding arising out of or relating 
                        to your use of the website, the CFX systems, information, services and content shall be instituted in a state or 
                        federal court sitting in the county of Fulton, state of Georgia, United States of America and you expressly waive 
                        any objection that you may have now or hereafter to the laying of the venue or to the jurisdiction of any such proceeding.
                      </p>
                    </div>
                  </section>

                  <section id="governing-law" className="mb-10 scroll-mt-32">
                    <div className="flex items-center mb-6">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center mr-4 shadow-sm">
                        <span className="text-white font-bold">18</span>
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Governing Law and Language</h2>
                    </div>
                    <div className="pl-14">
                      <p className="text-gray-700 mb-4">
                        To the fullest extent permitted by law, these Terms of Use are governed by the internal substantive laws of the State of Georgia, 
                        U.S.A. excluding (i) Georgia's conflicts of laws principles; (ii) the United Nations Convention on Contracts for the International 
                        Sale of Goods; (iii) the 1974 Convention on the Limitation Period in the International Sale of Goods; and (iv) the Protocol 
                        amending the 1974 Convention, done at Vienna April 11, 1980.
                      </p>
                      <p className="text-gray-700">
                        To the fullest extent permitted by law, the controlling language for these Terms of Use is English. Any translation has been 
                        provided for Your convenience, and You may view the English language version by (a) returning to the home page for the country 
                        that You have selected, (b) selecting the English link at the top of the page, and (c) then clicking on the link to the Website 
                        Terms of Use located at the bottom of the page.
                      </p>
                    </div>
                  </section>

                  <section id="general" className="mb-10 scroll-mt-32">
                    <div className="flex items-center mb-6">
                     <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center mr-4 shadow-sm">
                        <span className="text-white font-bold">19</span>
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">General</h2>
                    </div>
                    <div className="pl-14">
                      <p className="text-gray-700">
                        You may not assign these Terms of Use or any of Your interests, rights or obligations under these Terms of Use. 
                        If any provision of these Terms of Use is found to be invalid by any court having competent jurisdiction, the invalidity 
                        of such provision shall not affect the validity of the remaining provisions of these Terms of Use, which shall remain 
                        in full force and effect. No waiver of any of these Terms of Use shall be deemed a further or continuing waiver of such 
                        term or condition or any other term or condition.
                      </p>
                    </div>
                  </section>

                  <section id="written-document" className="mb-10 scroll-mt-32">
                    <div className="flex items-center mb-6">
                       <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center mr-4 shadow-sm">
                        <span className="text-white font-bold">20</span>
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Written Document</h2>
                    </div>
                    <div className="pl-14">
                      <p className="text-gray-700">
                        You may preserve these Terms of Use in written form by printing them for Your records, and You waive any other requirement 
                        that these Terms of Use be evidenced by a written document.
                      </p>
                    </div>
                  </section>

                  <section id="complete-agreement" className="mb-10 scroll-mt-32">
                    <div className="flex items-center mb-6">
                       <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center mr-4 shadow-sm">
                        <span className="text-white font-bold">21</span>
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Complete Agreement</h2>
                    </div>
                    <div className="pl-14">
                      <p className="text-gray-700">
                        Except as expressly provided in a separate license, service or other written agreement between you and Central Freight Express or in the 
                        applicable Central Freight Express rate and service guide or Central Freight Express tariff, these Terms of Use constitute the entire agreement between you 
                        and Central Freight Express with respect to the use of the website, the CFX systems, and any software or service, information and content 
                        contained therein, and supersede all discussions, communications, conversations and agreements concerning the subject matter hereof.
                      </p>
                    </div>
                  </section>

                  <section id="quebec-residents" className="mb-10 scroll-mt-32">
                    <div className="flex items-center mb-6">
                     <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center mr-4 shadow-sm">
                        <span className="text-white font-bold">22</span>
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">For Residents of Quebec</h2>
                    </div>
                    <div className="pl-14">
                      <p className="text-gray-700 mb-4">
                        The parties declare that they have required that these Terms of Use and all documents related hereto, either present or future, 
                        be drawn up in the English language only.
                      </p>
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                        <p className="text-gray-700 italic">
                          Les parties déclarent par les présentes qu'ils exigent que cette entente et tous les documents y afférents, 
                          soit pour le présent ou l'avenir, soient rédigés en langue anglaise seulement.
                        </p>
                      </div>
                    </div>
                  </section>
                  {/* Customer Service Section */}
                  <section id="customer-service" className="scroll-mt-8">
                    <div className="flex items-center mb-6">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center mr-4 shadow-sm">
                        <span className="text-white font-bold">23</span>
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Customer Service</h2>
                    </div>
                    <div className="pl-14">
                      <p className="text-gray-700">
                        Questions or comments regarding the Website may be submitted to Central Freight Express Customer Service.
                      </p>
                    </div>
                  </section>
                </div>
              </div>
            </div>
            {/* Navigation Links */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a href="/legal-terms" className="group bg-white rounded-xl shadow-sm border p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">All Legal Terms</h3>
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                <p className="text-gray-600 text-sm">Browse all our legal documents and agreements</p>
              </a>
              <a href="/contact-us" className="group bg-white rounded-xl shadow-sm border p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">Contact Legal Team</h3>
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                <p className="text-gray-600 text-sm">Get in touch with our legal department</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}