import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

function FAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const faqs = [
    {
      q: "Is Joining the talent pool free?",
      a: "Yes, it's completely free for data professionals to join our talent pool and access opportunities."
    },
    {
      q: "What level of experience is needed to qualify?",
      a: "We accept candidates across all levels. From entry-level to seniors as long as you demonstrate strong foundational data skills."
    },
    {
      q: "What is the application process?",
      a: "Submit your CV, go through our vetting process, and once approved, we match you with top opportunities."
    }
  ]

  return (
    <section className="w-full border-t border-[#D2DCF6]/60 mt-8 md:mt-12">
      <div className="py-16 md:py-20 px-4 md:px-1 max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-brand-dark text-[28px] md:text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-500 text-[15px] max-w-lg mx-auto">
            Everything you need to know about Learned2Hired and how we connect data talents with opportunities.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className="bg-[#F8FBFF] border border-[#D2DCF6] rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:border-brand-primary/40 transition-colors"
              onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
            >
              <div className="p-6 flex items-center justify-between">
                <h4 className="text-[16px] text-brand-dark font-semibold pr-8">{faq.q}</h4>
                <div className="shrink-0 text-brand-primary bg-white rounded-full p-1 shadow-sm">
                  {openFaq === idx ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </div>
              </div>
              
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                  openFaq === idx ? "max-h-40 pb-6 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-brand-primary/80 text-[15px] leading-relaxed border-t border-[#D2DCF6]/50 pt-4">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
