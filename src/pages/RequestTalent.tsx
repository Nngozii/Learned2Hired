import SplitPageLayout from '../components/layout/SplitPageLayout'
import { Input } from '../components/ui/Input'
import { Select } from '../components/ui/Select'
import { Textarea } from '../components/ui/Textarea'
import { Button } from '../components/ui/Button'
import { Shield } from 'lucide-react'

function RequestTalent() {
  const mobileHeader = (
    <div className="bg-[#244299] text-white p-6 md:p-8 rounded-2xl">
      <h4 className="text-[14px] font-bold mb-4 tracking-wide">Request Talent</h4>
      <h2 className="text-[26px] font-medium mb-4 leading-[1.1]">Hire Qualified <br /> Data Professionals</h2>
      <p className="text-[16px] leading-[1.3] text-white opacity-90">
        Need skilled data talent for your team? Submit your hiring request and our team will carefully review your requirement before connecting you with qualified candidates.
      </p>
    </div>
  )

  const desktopHeader = (
    <>
      <h2 className="text-brand-dark text-3xl font-bold mb-4">Request for Talents</h2>
      <p className="text-brand-dark text-[15px] font-bold leading-[1.4] max-w-lg">
        Need skilled data talent for your team? Submit your hiring request and our team will carefully review your requirement before connecting you with qualified candidates.
      </p>
    </>
  )

  return (
    <SplitPageLayout mobileHeader={mobileHeader} desktopHeader={desktopHeader}>
      <div className="md:bg-[#F8FBFF] md:p-8 md:rounded-2xl">
        <form className="flex flex-col gap-4">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input placeholder="Company Name" className="order-1" />
            <Select className="order-2 text-gray-500">
              <option value="">Company Size</option>
              <option value="1-10">1-10</option>
              <option value="11-50">11-50</option>
              <option value="51-200">51-200</option>
              <option value="201+">201+</option>
            </Select>

            <Input placeholder="Contact Person" className="order-3" />
            <Select className="order-4 text-gray-500">
              <option value="">Employment type</option>
              <option value="full-time">Full-time</option>
              <option value="part-time">Part-time</option>
              <option value="contract">Contract</option>
              <option value="internship">Internship</option>
            </Select>

            <Input type="email" placeholder="Work Email" className="order-5" />
            <Select className="order-6 text-gray-500">
              <option value="">Experience Level</option>
              <option value="junior">Junior</option>
              <option value="mid">Mid-level</option>
              <option value="senior">Senior</option>
            </Select>

            <Input type="tel" placeholder="Phone Number" className="order-7" />
            <Select className="order-8 text-gray-500">
              <option value="">Number of Position</option>
              <option value="1">1</option>
              <option value="2-5">2-5</option>
              <option value="5+">5+</option>
            </Select>

            <Input placeholder="Company's Website/ LinkedIn" className="order-9" />
            <Select className="order-10 text-gray-500">
              <option value="">Company Size</option>
              <option value="1-10">1-10</option>
              <option value="11-50">11-50</option>
              <option value="51-200">51-200</option>
              <option value="201+">201+</option>
            </Select>

            <Input placeholder="Role You're Hiring For" className="order-11 md:col-span-1" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
            <Textarea placeholder="Additional Notes (Optional)" className="order-2 md:order-1" />
            <Textarea placeholder="Required Skills" className="order-1 md:order-2" />
          </div>
          
        </form>
      </div>
      
      <div className="mt-6 bg-[#F4F7FC] rounded-lg p-4 flex items-center gap-3 md:mx-0">
        <Shield className="text-brand-dark shrink-0" size={20} strokeWidth={2} />
        <p className="text-brand-dark text-[13px] font-medium leading-snug">
          Your company's information will only be used to process your hiring request.
        </p>
      </div>

      <Button className="w-full md:w-[220px] md:self-center mt-6 font-medium py-3 px-8 rounded-lg text-[14px]">
        Submit Request
      </Button>

    </SplitPageLayout>
  )
}

export default RequestTalent
