import React from 'react'
import { FileUp, UserSearch, ClipboardList, Users } from 'lucide-react'

function HowItWorks() {
  return (
    <section className="py-5 md:py-10 px-4 md:px-20 max-w-7xl mx-auto">
      {/* How It Works Header */}
      <h2 className="text-center text-brand-dark font-bold text-[20px] mb-8">
        How It Works
      </h2>

      {/* For Candidates Section */}
      <div className="mb-8">
        <div className="inline-block bg-[#F4F7FF] text-brand-dark px-3 py-1 rounded-md text-[10px] font-bold mb-3">
          For Candidates
        </div>
        
        <div className="grid grid-cols-2 gap-3">
          {/* Card 1 */}
          <div className="bg-[#F8FBFF] rounded-xl p-3 shadow-sm flex flex-col justify-start">
            <div className="flex items-start gap-1.5 mb-2">
              <FileUp className="text-brand-dark shrink-0" size={14} strokeWidth={2.5} />
              <h4 className="text-brand-dark font-bold text-[11px] leading-tight mt-[1px]">Submit your CV</h4>
            </div>
            <p className="text-brand-primary text-[9.5px] leading-[1.4]">
              Fill out the form and upload your CV to join our taent pool.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#F8FBFF] rounded-xl p-3 shadow-sm flex flex-col justify-start">
            <div className="flex items-start gap-1.5 mb-2">
              <UserSearch className="text-brand-dark shrink-0" size={14} strokeWidth={2.5} />
              <h4 className="text-brand-dark font-bold text-[11px] leading-tight mt-[1px]">We Review You...</h4>
            </div>
            <p className="text-brand-primary text-[9.5px] leading-[1.4]">
              Our team reviews your experience and skills to understand your strengths
            </p>
          </div>
        </div>
      </div>

      {/* For Companies Section */}
      <div className="mb-12">
        <div className="inline-block bg-[#F4F7FF] text-brand-dark px-3 py-1 rounded-md text-[10px] font-bold mb-3">
          For Companies
        </div>
        
        <div className="grid grid-cols-2 gap-3">
          {/* Card 1 */}
          <div className="bg-[#F8FBFF] rounded-xl p-3 shadow-sm flex flex-col justify-start">
            <div className="flex items-start gap-1.5 mb-2">
              <ClipboardList className="text-brand-dark shrink-0" size={14} strokeWidth={2.5} />
              <h4 className="text-brand-dark font-bold text-[11px] leading-tight mt-[1px]">Tell Us Your Need</h4>
            </div>
            <p className="text-brand-primary text-[9.5px] leading-[1.4]">
              Share your requirements and the type of Data Analyst you're looking for
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#F8FBFF] rounded-xl p-3 shadow-sm flex flex-col justify-start">
            <div className="flex items-start gap-1.5 mb-2">
              <Users className="text-brand-dark shrink-0" size={14} strokeWidth={2.5} />
              <h4 className="text-brand-dark font-bold text-[11px] leading-tight mt-[1px]">We Shortlist Q...</h4>
            </div>
            <p className="text-brand-primary text-[9.5px] leading-[1.4]">
              Our team reviews your experience and skills to understand your strengths
            </p>
          </div>
        </div>
      </div>

      {/* Why Work With Us Section */}
      <div className="mb-5">
        <h2 className="text-center text-brand-dark font-bold text-[20px] mb-6">
          Why Work With Us?
        </h2>
        
        <div className="grid grid-cols-2 gap-3">
          {/* Card 1 */}
          <div className="bg-[#F8FBFF] rounded-xl p-3 shadow-sm flex flex-col justify-start">
            <h4 className="text-brand-dark font-bold text-[11px] mb-2 leading-tight">1. Submit your CV</h4>
            <p className="text-brand-primary text-[9.5px] leading-[1.4]">
              Fill out the form and upload your CV to join our taent pool.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#F8FBFF] rounded-xl p-3 shadow-sm flex flex-col justify-start">
            <h4 className="text-brand-dark font-bold text-[11px] mb-2 leading-tight">2. We Review You...</h4>
            <p className="text-brand-primary text-[9.5px] leading-[1.4]">
              Our team reviews your experience and skills to understand your strengths
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
