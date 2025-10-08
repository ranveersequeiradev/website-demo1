import { ArrowRight } from '../../assets/icons';

export const ContactForm = () => (
  <div className="bg-white pb-16 md:pb-24">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-8"><p className="text-gray-600">To find out more about us, email <a href="mailto:biz@zimetrics.com" className="text-black font-semibold">biz@zimetrics.com</a> or complete the form below.</p></div>
      <form className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
          <div className="space-y-6">
            <input type="text" placeholder="Full Name" className="w-full p-4 bg-gray-100 rounded-md border border-transparent focus:outline-none focus:ring-2 focus:ring-[#8F48EB]" />
            <input type="email" placeholder="Business Email" className="w-full p-4 bg-gray-100 rounded-md border border-transparent focus:outline-none focus:ring-2 focus:ring-[#8F48EB]" />
          </div>
          <div><textarea placeholder="Write your message" rows="5" className="w-full p-4 bg-gray-100 rounded-md border border-transparent focus:outline-none focus:ring-2 focus:ring-[#8F48EB] h-full"></textarea></div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center mt-6">
          <div className="flex items-center mb-4 md:mb-0"><input type="checkbox" id="agreement" className="h-4 w-4 text-[#8F48EB] focus:ring-[#8F48EB] border-gray-300 rounded" /><label htmlFor="agreement" className="ml-2 block text-sm text-gray-600">By submitting this form, you agree to be contacted regarding your request</label></div>
          <button type="submit" className="bg-black text-white font-bold py-3 px-8 rounded-md flex items-center group transition-colors hover:bg-gray-800">Submit <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" /></button>
        </div>
      </form>
    </div>
  </div>
);
