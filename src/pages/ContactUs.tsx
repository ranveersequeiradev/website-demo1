import { ContactUs as ContactUsComponent } from '../components/common/ContactUs';

export const ContactUsPage = () => {
  return (
    <main>
      <div className="pt-20"> {/* Add padding for fixed header */}
        <ContactUsComponent />
      </div>
    </main>
  );
};