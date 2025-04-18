import { useState } from 'react';
import Waitlist from '@/components/waitlist';
const faqs = [
  {
    question: 'What is Amandis?',
    answer:
      'Amandis is a decentralized dating app built on Nostr, using zero-knowledge proofs to ensure privacy and authenticity. No fees, no swipes—just meaningful matches.'
  },
  {
    question: 'How is Amandis different from traditional dating apps?',
    answer:
      'Amandis prioritizes privacy, self-sovereign identity, and real-life connection. Users control their own keys and data, and ZKPs prove compatibility without revealing personal info.'
  },
  {
    question: 'What is $AMA token?',
    answer:
      '$AMA is the native token of the Amandis ecosystem, used for governance, rewards, and funding love-related research and bounties. It has a total supply of 9 billion with a deflationary model (1.8% annual burn).'
  },
  {
    question: 'How can I earn $AMA tokens?',
    answer:
      'You can earn $AMA by participating in bounties, hackathons, community engagement, and by contributing to the Science of Love initiatives.'
  },
  {
    question: 'Is Amandis open source?',
    answer:
      'Yes! Amandis is fully open-source and welcomes contributions from developers, designers, and researchers worldwide.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index:any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <div className="max-w-3xl mx-auto py-10 px-4 bg-background text-foreground antialiased">
        <h1 className="text-4xl font-bold mb-8 text-center">Frequently Asked Questions</h1>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border rounded-xl p-4 bg-white dark:bg-[#111] shadow">
              <button
                className="w-full text-left text-xl font-medium focus:outline-none"
                onClick={() => toggle(index)}
              >
                {faq.question}
              </button>
              {openIndex === index && (
                <div className="mt-2 text-gray-700 dark:text-gray-300">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
        
      </div>
      <Waitlist/>
    </>
  );
}
