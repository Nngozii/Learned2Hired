import SplitPageLayout from '../components/layout/SplitPageLayout'
import { Input } from '../components/ui/Input'
import { Select } from '../components/ui/Select'
import { Button } from '../components/ui/Button'

function JoinTalentPool() {
  const mobileHeader = (
    <div className="bg-[#244299] text-white p-8 rounded-2xl">
      <h4 className="text-[14px] font-bold mb-4 tracking-wide">Join Talent Pool</h4>
      <h2 className="text-[26px] font-medium mb-4 leading-[1.1]">Get Discovered by <br /> Top Employers</h2>
      <p className="text-[16px] leading-[1.3] text-white opacity-90">
        Upload your CV to join our curated talent pool. When opportunities match your skills and experience, the team will connect you with hiring companies.
      </p>
    </div>
  )

  const desktopHeader = (
    <>
      <h2 className="text-brand-dark text-3xl font-bold mb-4">Join the Talent Pool</h2>
      <p className="text-brand-dark text-[15px] font-medium leading-relaxed max-w-md">
        Upload your CV to join our curated talent pool. When opportunities match your skills and experience, the team will connect you with hiring companies.
      </p>
    </>
  )

  return (
    <SplitPageLayout mobileHeader={mobileHeader} desktopHeader={desktopHeader}>
      <div className="md:bg-[#F8FBFF] md:p-8 md:rounded-2xl">
        <form className="flex flex-col gap-4">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input placeholder="Full Name" className="order-1" />
            <Input placeholder="Location" className="order-4 md:order-2" />
            <Input type="email" placeholder="Email Address" className="order-2 md:order-3" />
            <Input placeholder="LinkedIn Profile (Optional)" className="order-5 md:order-4" />
            <Input type="tel" placeholder="Phone Number" className="order-3 md:order-5" />
            
            <Select className="order-6 text-gray-500">
              <option value="">Employment Type</option>
              <option value="full-time">Full-time</option>
              <option value="part-time">Part-time</option>
              <option value="contract">Contract</option>
              <option value="internship">Internship</option>
            </Select>
          </div>

          <label className="mt-2 border border-gray-300 rounded-xl p-8 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors bg-white">
            <input type="file" className="hidden" accept=".pdf,.doc,.docx" />
            <span className="text-brand-primary font-bold text-[13px] md:text-sm mb-1">Upload Your CV</span>
            <span className="text-brand-dark text-[10px] md:text-[11px]">PDF, DOC, DOCX (Max. 5MB)</span>
          </label>
        </form>
      </div>
      
      <Button className="w-full md:w-[220px] md:self-center mt-6 font-medium py-3 px-8 rounded-lg text-[14px]">
        Submit Application
      </Button>
    </SplitPageLayout>
  )
}

export default JoinTalentPool