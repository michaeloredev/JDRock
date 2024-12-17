
import ContactForm from "@/components/ContactForm.jsx";

export default function Home() {
 
  return (
    <>
      <div className="flex justify-center md:flex-row md:justify-around mt-8 mb-6">

        <div className="bg-gray-500 bg-opacity-80 rounded-lg text-white arvo text-lg p-8 w-11/12 md:text-xl md:w-3/6 md:p-6 shadow-lg">

          <div className="mb-3">
            J.D. Rock Custom Home Improvements is your best choice in Frederick
            and surrounding counties for all your remodeling and repair needs.
            We pride ourselves on being able to handle your smallest to largest
            project or repair. Our clients appreciate the fact that they only
            have to call one number to handle all their needs. That's why we
            have adopted the motto, "If it's in or on your home, we do it".
          </div>
          <div className="mb-3">
            We pride ourselves on using the highest quality materials,
            outstanding workmanship, at an affordable price.
          </div>
          <div className="mb-3">
            We look forward to the privilege of serving you now and in the
            future with all your home improvement needs. Sincerely Christopher
            Ore - Owner Please contact us directly with any questions you may
            have while we finish reloading our website.
          </div>
          <div className="">Sincerely Christopher Ore - Owner</div>
        </div>

        <div className="bg-gray-500 bg-opacity-80 w-2/6 p-6 rounded-lg text-white arvo text-xl hidden md:inline shadow-lg">
          <ContactForm />
        </div>
      </div>
    </>
  );
}
