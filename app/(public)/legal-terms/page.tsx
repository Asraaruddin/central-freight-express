// components/LegalTerms.tsx
"use client";

import { useState, useEffect } from 'react';

interface Section {
  id: string;
  title: string;
  page: number;
}

interface ContactDetail {
  icon: string;
  text: string;
}

interface ContentItem {
  type: string;
  title?: string;
  content?: string;
  list?: string[];
  note?: string;
  details?: ContactDetail[];
}

interface Page {
  id: number;
  title: string;
  lastUpdated: string;
  content: ContentItem[];
}

export default function LegalTerms() {
  const [activeSection, setActiveSection] = useState<string>('terms-conditions');
  const [activePage, setActivePage] = useState<number>(1);
  
  const sections: Section[] = [
    { id: 'terms-conditions', title: 'Terms & Conditions', page: 1 },
    { id: 'privacy-policy', title: 'Privacy Policy', page: 2 },
    { id: 'terms-of-use', title: 'Terms of Use', page: 3 },
    { id: 'refund-policy', title: 'Refund Policy', page: 4 },
    { id: 'cancellation-policy', title: 'Cancellation Policy', page: 5 },
    { id: 'shipping-policy', title: 'Shipping Policy', page: 5 },
    { id: 'liability-policy', title: 'Limitation of Liability', page: 5 },
    { id: 'force-majeure', title: 'Force Majeure Policy', page: 5 },
    { id: 'indemnification', title: 'Indemnification Policy', page: 5 },
    { id: 'compliance-policy', title: 'Compliance Policy', page: 5 },
    { id: 'contact', title: 'Contact Information', page: 5 },
  ];

  const pages: Page[] = [
    {
      id: 1,
      title: "Terms & Conditions",
      lastUpdated: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
      content: [
        {
          type: "heading",
          content: "Welcome to Central Freight Express. These Terms & Conditions (\"Terms\") govern your access to and use of our website, services, and any freight transportation or logistics solutions provided by the Company. By using our services, you acknowledge that you have read, understood, and agreed to these Terms."
        },
        {
          type: "section",
          title: "1. Company Overview & Acceptance of Terms",
          content: "Central Freight Express is a domestic road freight transportation provider operating across the United States. These Terms constitute a legally binding agreement between the Company and the customer. If you do not agree to these Terms, you must not use our services."
        },
        {
          type: "section",
          title: "2. Scope of Services",
          content: "Our services include, but are not limited to:",
          list: [
            "Domestic road freight transportation",
            "Pickup and delivery coordination",
            "Load scheduling and dispatch",
            "Freight documentation support",
            "Logistics and shipment tracking assistance"
          ],
          note: "Service offerings may change without prior notice and are subject to availability, regulatory restrictions, and operational feasibility."
        },
        {
          type: "section",
          title: "3. Customer Responsibilities",
          content: "Customers agree to:",
          list: [
            "Provide accurate, complete, and truthful shipment information",
            "Ensure goods are legally transportable within the United States",
            "Properly package, label, and secure cargo",
            "Comply with all federal, state, and local transportation laws"
          ],
          note: "The Company shall not be liable for issues arising from incorrect or misleading information provided by the customer."
        },
        {
          type: "section",
          title: "4. Freight Classification & Inspection",
          list: [
            "Shipments may be inspected at any time for safety, compliance, or legal reasons.",
            "Misdeclared or improperly classified freight may result in additional charges, delays, or refusal of service.",
            "The Company reserves the right to re-weigh or re-measure shipments."
          ]
        },
        {
          type: "section",
          title: "5. Pricing, Charges & Billing",
          list: [
            "Rates are based on shipment weight, dimensions, distance, fuel costs, and service type.",
            "Quotes are estimates unless otherwise stated.",
            "Additional charges may apply for detention, re-delivery, address correction, or special handling.",
            "Invoices must be paid as per agreed payment terms.",
            "Failure to make timely payment may result in service suspension or legal recovery action."
          ]
        },
        {
          type: "section",
          title: "6. Transit Times & Delivery",
          list: [
            "Transit times are estimated and not guaranteed.",
            "Delays may occur due to weather, traffic, mechanical issues, regulatory inspections, labor shortages, or force majeure events.",
            "The Company is not responsible for missed appointments caused by such delays."
          ]
        },
        {
          type: "section",
          title: "7. Loss, Damage & Claims",
          list: [
            "Claims for loss or damage must be reported in writing within the timeframe required by applicable transportation laws.",
            "Liability is limited as per federal motor carrier regulations.",
            "The Company is not liable for concealed damage or improper packaging."
          ]
        },
        {
          type: "section",
          title: "8. Prohibited & Restricted Cargo",
          content: "The following items are prohibited unless explicitly approved:",
          list: [
            "Hazardous materials",
            "Illegal or stolen goods",
            "Explosives, firearms, or controlled substances",
            "Perishable items without proper arrangements"
          ]
        },
        {
          type: "section",
          title: "9. Insurance",
          list: [
            "Customers are responsible for obtaining adequate cargo insurance.",
            "Carrier liability does not replace cargo insurance coverage."
          ]
        },
        {
          type: "section",
          title: "10. Termination of Service",
          content: "The Company reserves the right to refuse, suspend, or terminate service without notice if:",
          list: [
            "Terms are violated",
            "Safety risks are identified",
            "Payment obligations are unmet"
          ]
        },
        {
          type: "section",
          title: "11. Governing Law & Jurisdiction",
          content: "These Terms are governed by applicable U.S. federal laws and the laws of the state in which the Company operates."
        }
      ]
    },
    {
      id: 2,
      title: "Privacy Policy",
      lastUpdated: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
      content: [
        {
          type: "heading",
          content: "Central Freight Express is committed to protecting the privacy and confidentiality of customer information."
        },
        {
          type: "section",
          title: "1. Information Collected",
          content: "We may collect:",
          list: [
            "Personal identification information",
            "Business and billing details",
            "Shipment and delivery addresses",
            "Payment and transaction data",
            "Website usage analytics and cookies"
          ]
        },
        {
          type: "section",
          title: "2. Purpose of Data Collection",
          content: "Information is collected to:",
          list: [
            "Execute freight services",
            "Manage billing and payments",
            "Communicate shipment updates",
            "Improve operational efficiency",
            "Comply with legal obligations"
          ]
        },
        {
          type: "section",
          title: "3. Data Sharing & Disclosure",
          content: "We may share information with:",
          list: [
            "Transportation partners and carriers",
            "Payment gateways and financial institutions",
            "Legal or regulatory authorities"
          ],
          note: "We do not sell or rent personal information."
        },
        {
          type: "section",
          title: "4. Data Security Measures",
          content: "We implement commercially reasonable safeguards to protect information from unauthorized access, loss, or misuse. However, no system is entirely secure."
        },
        {
          type: "section",
          title: "5. Data Retention",
          content: "Information is retained only as long as necessary to fulfill service obligations and legal requirements."
        },
        {
          type: "section",
          title: "6. User Rights",
          content: "Users may request:",
          list: [
            "Access to personal data",
            "Corrections to inaccurate data",
            "Deletion where legally permissible"
          ]
        }
      ]
    },
    {
      id: 3,
      title: "Terms of Use",
      lastUpdated: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
      content: [
        {
          type: "section",
          title: "1. Website Usage Rules",
          content: "You agree not to:",
          list: [
            "Use the website for unlawful purposes",
            "Introduce malicious software",
            "Interfere with site functionality",
            "Attempt unauthorized access"
          ]
        },
        {
          type: "section",
          title: "2. Intellectual Property",
          content: "All website content, logos, trademarks, and materials are the exclusive property of Central Freight Express and are protected under intellectual property laws."
        },
        {
          type: "section",
          title: "3. Disclaimer",
          content: "Website content is provided \"as is\" without warranties of any kind. The Company does not guarantee uninterrupted or error-free access."
        },
        {
          type: "section",
          title: "4. Modifications",
          content: "We reserve the right to update website content and Terms of Use without prior notice."
        }
      ]
    },
    {
      id: 4,
      title: "Refund Policy",
      lastUpdated: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
      content: [
        {
          type: "section",
          title: "1. Refund Eligibility",
          content: "Refunds may be considered if:",
          list: [
            "Shipment is cancelled prior to dispatch",
            "Duplicate or incorrect charges occur",
            "Service is not rendered due to Company fault"
          ]
        },
        {
          type: "section",
          title: "2. Non-Refundable Charges",
          content: "Refunds will not be issued for:",
          list: [
            "Delays beyond Company control",
            "Incorrect shipment details provided by customer",
            "Services already performed"
          ]
        },
        {
          type: "section",
          title: "3. Refund Processing",
          content: "Approved refunds are processed within 7–14 business days using the original payment method."
        }
      ]
    },
    {
      id: 5,
      title: "Cancellation & Other Policies",
      lastUpdated: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
      content: [
        {
          type: "section",
          title: "Cancellation Policy",
          content: "1. Customer Cancellation",
          list: [
            "Cancellation requests must be submitted in writing.",
            "Charges may apply based on shipment status.",
            "No cancellation is guaranteed after dispatch."
          ]
        },
        {
          type: "section",
          title: "Company Cancellation",
          content: "We may cancel services due to safety risks, regulatory issues, non-payment, or incorrect shipment details."
        },
        {
          type: "section",
          title: "Shipping Policy",
          content: "Our shipping policies include:",
          list: [
            "Services are limited to domestic U.S. road transportation.",
            "Delivery windows are estimates.",
            "Proof of delivery may be electronic or physical."
          ]
        },
        {
          type: "section",
          title: "Limitation of Liability Policy",
          content: "The Company's liability is limited to the maximum extent permitted under applicable transportation laws. Under no circumstances shall the Company be liable for indirect, incidental, or consequential damages."
        },
        {
          type: "section",
          title: "Force Majeure Policy",
          content: "We are not liable for service failure caused by events beyond reasonable control, including natural disasters, strikes, government actions, accidents, or infrastructure failures."
        },
        {
          type: "section",
          title: "Indemnification Policy",
          content: "Customers agree to indemnify and hold harmless the Company against any claims, damages, penalties, or losses arising from shipment content, improper packaging, or legal violations."
        },
        {
          type: "section",
          title: "Compliance Policy",
          content: "Customers agree to comply with all U.S. DOT, FMCSA, and state transportation regulations."
        },
      ]
    }
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
            setActivePage(section.page);
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

  const currentPage = pages.find(page => page.id === activePage) || pages[0];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white pt-20">
        <div className="container mx-auto px-4 sm:px-6 pt-8 pb-12 sm:pt-12 sm:pb-16">
          <div className="max-w-6xl mx-auto">
            <div className="mb-6">
              <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full text-sm font-medium mb-4">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                Legal Documentation
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Legal Terms & Policies
            </h1>
            <p className="text-blue-100 text-lg sm:text-xl mb-8 max-w-3xl">
              Complete legal documentation for Central Freight Express customers and partners
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
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
                <span className="text-sm">5 Complete Policy Pages</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Table of Contents - Sidebar */}
<div className="lg:w-1/4">
  <div className="sticky top-8 bg-white rounded-xl shadow-sm border p-6 space-y-8">

    {/* Header */}
    <div>
      <h2 className="text-lg font-semibold text-gray-900 mb-2">
        Table of Contents
      </h2>
      <p className="text-sm text-gray-600">
        Navigate through all legal documents
      </p>
    </div>

    {/* Sections */}
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
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center space-x-3 min-w-0">
              <div
                className={`w-6 h-6 shrink-0 rounded-full flex items-center justify-center text-xs font-semibold ${
                  activeSection === section.id
                    ? 'bg-blue-100 text-blue-700'
                    : 'bg-gray-100 text-gray-600'
                }`}
              >
                {section.page}
              </div>

              <span className="font-medium text-sm truncate">
                {section.title}
              </span>
            </div>

            {activeSection === section.id && (
              <svg
                className="w-4 h-4 text-blue-500 shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </div>
        </button>
      ))}
    </nav>

    {/* Page Navigation */}
    <div className="pt-6 border-t border-gray-200 space-y-4">
      <h3 className="text-sm font-semibold text-gray-900">
        Current Page
      </h3>

      <div className="bg-gray-50 rounded-lg p-4 space-y-4">

        {/* Page Info */}
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
            <span className="text-blue-700 font-bold text-sm">
              {activePage}
            </span>
          </div>

          <div className="min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate">
              {currentPage.title}
            </p>
            <p className="text-xs text-gray-600">
              {sections.filter(s => s.page === activePage).length} sections
            </p>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex flex-wrap items-center gap-2">
          {pages.map((page) => (
            <button
              key={page.id}
              onClick={() => {
                const firstSection = sections.find(
                  s => s.page === page.id
                );
                if (firstSection) scrollToSection(firstSection.id);
              }}
              className={`w-8 h-8 rounded-md text-xs font-medium flex items-center justify-center transition ${
                activePage === page.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {page.id}
            </button>
          ))}
        </div>

      </div>
    </div>

  </div>
</div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            <div className="space-y-8">
              {/* Page 1: Terms & Conditions */}
              <div id="terms-conditions" className="scroll-mt-8">
                <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
                  {/* Page Header */}
                  <div className="bg-gradient-to-r from-blue-50 to-blue-100 border-b border-blue-200 p-8">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center mr-4 shadow-sm">
                            <span className="text-white font-bold text-xl">1</span>
                          </div>
                          <div>
                            <h2 className="text-3xl font-bold text-gray-900">Terms & Conditions</h2>
                            <p className="text-gray-600 mt-1">Last Updated: {pages[0].lastUpdated}</p>
                          </div>
                        </div>
                        <p className="text-gray-700">
                          These Terms & Conditions govern your access to and use of our freight transportation services.
                        </p>
                      </div>
                      
                    </div>
                  </div>

                  {/* Page Content */}
                  <div className="p-8">
                    <div className="space-y-8">
                      {pages[0].content.map((item, index) => (
                        <div key={index} className="border-l-4 border-blue-200 pl-6">
                          {item.type === "heading" ? (
                            <p className="text-lg text-gray-700 mb-6">{item.content}</p>
                          ) : item.type === "section" ? (
                            <div className="mb-8">
                              <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                              {item.content && <p className="text-gray-700 mb-4">{item.content}</p>}
                              {item.list && (
                                <ul className="space-y-3 mb-4">
                                  {item.list.map((listItem, listIndex) => (
                                    <li key={listIndex} className="flex items-start">
                                      <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1">
                                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                                      </div>
                                      <span className="text-gray-700">{listItem}</span>
                                    </li>
                                  ))}
                                </ul>
                              )}
                              {item.note && (
                                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r">
                                  <p className="text-sm text-yellow-800">{item.note}</p>
                                </div>
                              )}
                            </div>
                          ) : null}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Page 2: Privacy Policy */}
              <div id="privacy-policy" className="scroll-mt-8">
                <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
                  <div className="bg-gradient-to-r from-green-50 to-green-100 border-b border-green-200 p-8">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-800 rounded-lg flex items-center justify-center mr-4 shadow-sm">
                            <span className="text-white font-bold text-xl">2</span>
                          </div>
                          <div>
                            <h2 className="text-3xl font-bold text-gray-900">Privacy Policy</h2>
                            <p className="text-gray-600 mt-1">Last Updated: {pages[1].lastUpdated}</p>
                          </div>
                        </div>
                        <p className="text-gray-700">
                          How we collect, use, and protect your personal information.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="space-y-8">
                      {pages[1].content.map((item, index) => (
                        <div key={index} className="border-l-4 border-green-200 pl-6">
                          {item.type === "heading" ? (
                            <p className="text-lg text-gray-700 mb-6">{item.content}</p>
                          ) : item.type === "section" ? (
                            <div className="mb-8">
                              <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                              {item.content && <p className="text-gray-700 mb-4">{item.content}</p>}
                              {item.list && (
                                <ul className="space-y-3 mb-4">
                                  {item.list.map((listItem, listIndex) => (
                                    <li key={listIndex} className="flex items-start">
                                      <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1">
                                        <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                                      </div>
                                      <span className="text-gray-700">{listItem}</span>
                                    </li>
                                  ))}
                                </ul>
                              )}
                              {item.note && (
                                <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-r">
                                  <p className="text-sm text-green-800">{item.note}</p>
                                </div>
                              )}
                            </div>
                          ) : null}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Page 3: Terms of Use */}
              <div id="terms-of-use" className="scroll-mt-8">
                <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
                  <div className="bg-gradient-to-r from-purple-50 to-purple-100 border-b border-purple-200 p-8">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg flex items-center justify-center mr-4 shadow-sm">
                            <span className="text-white font-bold text-xl">3</span>
                          </div>
                          <div>
                            <h2 className="text-3xl font-bold text-gray-900">Terms of Use</h2>
                            <p className="text-gray-600 mt-1">Last Updated: {pages[2].lastUpdated}</p>
                          </div>
                        </div>
                        <p className="text-gray-700">
                          Rules and guidelines for using our website and digital services.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="space-y-8">
                      {pages[2].content.map((item, index) => (
                        <div key={index} className="border-l-4 border-purple-200 pl-6">
                          {item.type === "section" && (
                            <div className="mb-8">
                              <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                              {item.content && <p className="text-gray-700 mb-4">{item.content}</p>}
                              {item.list && (
                                <ul className="space-y-3 mb-4">
                                  {item.list.map((listItem, listIndex) => (
                                    <li key={listIndex} className="flex items-start">
                                      <div className="flex-shrink-0 w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mr-3 mt-1">
                                        <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                                      </div>
                                      <span className="text-gray-700">{listItem}</span>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Page 4: Refund Policy */}
              <div id="refund-policy" className="scroll-mt-8">
                <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
                  <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 border-b border-yellow-200 p-8">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-yellow-600 to-yellow-800 rounded-lg flex items-center justify-center mr-4 shadow-sm">
                            <span className="text-white font-bold text-xl">4</span>
                          </div>
                          <div>
                            <h2 className="text-3xl font-bold text-gray-900">Refund Policy</h2>
                            <p className="text-gray-600 mt-1">Last Updated: {pages[3].lastUpdated}</p>
                          </div>
                        </div>
                        <p className="text-gray-700">
                          Guidelines for refund requests and processing.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="space-y-8">
                      {pages[3].content.map((item, index) => (
                        <div key={index} className="border-l-4 border-yellow-200 pl-6">
                          {item.type === "section" && (
                            <div className="mb-8">
                              <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                              {item.content && <p className="text-gray-700 mb-4">{item.content}</p>}
                              {item.list && (
                                <ul className="space-y-3 mb-4">
                                  {item.list.map((listItem, listIndex) => (
                                    <li key={listIndex} className="flex items-start">
                                      <div className="flex-shrink-0 w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center mr-3 mt-1">
                                        <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
                                      </div>
                                      <span className="text-gray-700">{listItem}</span>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Page 5: Cancellation & Other Policies */}
              <div id="cancellation-policy" className="scroll-mt-8">
                <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
                  <div className="bg-gradient-to-r from-red-50 to-red-100 border-b border-red-200 p-8">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-800 rounded-lg flex items-center justify-center mr-4 shadow-sm">
                            <span className="text-white font-bold text-xl">5</span>
                          </div>
                          <div>
                            <h2 className="text-3xl font-bold text-gray-900">Cancellation & Other Policies</h2>
                            <p className="text-gray-600 mt-1">Last Updated: {pages[4].lastUpdated}</p>
                          </div>
                        </div>
                        <p className="text-gray-700">
                          Additional policies including shipping, liability, and compliance.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="space-y-8">
                      {pages[4].content.map((item, index) => (
                        <div key={index} className={`border-l-4 ${item.type === "contact" ? 'border-blue-200' : 'border-red-200'} pl-6`}>
                          {item.type === "section" && (
                            <div className="mb-8">
                              <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                              {item.content && <p className="text-gray-700 mb-4">{item.content}</p>}
                              {item.list && (
                                <ul className="space-y-3 mb-4">
                                  {item.list.map((listItem, listIndex) => (
                                    <li key={listIndex} className="flex items-start">
                                      <div className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-3 mt-1">
                                        <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                                      </div>
                                      <span className="text-gray-700">{listItem}</span>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          )}
                          {item.type === "contact" && (
                            <div className="mt-8 pt-8 border-t border-gray-200">
                              <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">{item.title}</h3>
                                <p className="text-gray-700 text-lg mb-6 text-center">{item.content}</p>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                  {item.details && item.details.map((detail, detailIndex) => (
                                    <div key={detailIndex} className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                                      <div className="text-3xl mb-3">{detail.icon}</div>
                                      <p className="text-gray-700 font-medium">{detail.text}</p>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Sections for Page 5 */}
              {['shipping-policy', 'liability-policy', 'force-majeure', 'indemnification', 'compliance-policy', 'contact'].map((sectionId, index) => (
                <div key={sectionId} id={sectionId} className="scroll-mt-8">
                  {/* These sections are already included in Page 5 content */}
                </div>
              ))}
            </div>

            {/* Legal Notice */}
            <div className="mt-12 bg-gray-900 rounded-xl shadow-lg p-8 text-white">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-3">Legal Notice</h3>
                  <p className="text-gray-300 mb-4">
                    These legal documents constitute the complete terms and conditions for using Central Freight Express services. 
                    By accessing our services, you agree to be bound by all terms contained herein.
                  </p>
                  <div className="flex items-center text-gray-400 text-sm">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    Last reviewed: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
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