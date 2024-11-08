import React from "react";
import Image from "next/image";
import ClinicReviews from "../_components/ClinicReviews";

const AboutUs = () => {
  return (
    <div className="flex flex-col items-center mx-6 lg:mx-20 my-10">
      <section className="flex items-center sm:w-4/5">
      <div className="flex sm:justify-around flex-col sm:flex-row gap-8">
        <div className="sm:w-1/2 text-neutralDark">
          <h3 className="text-2xl font-bold text-secondary mb-4">About us</h3>
          <p className="mb-4">
            As FindClinics, we believe that finding the right medical care
            should be simple, reliable, and personalized. Navigating the
            healthcare system can be overwhelming, but our mission is to make it
            easier for you to connect with trusted clinics and specialists, no
            matter your medical needs.
          </p>
          <p className="mb-4">
            Whether you&apos;re looking for routine care, advanced treatments,
            or specialized procedures, we&apos;re here to help guide you. Our
            platform offers a comprehensive database of clinics and healthcare
            providers, making it easy to compare services, read reviews, and
            make informed decisions about your care.
          </p>
          <button className="bg-secondary text-white py-2 px-4 rounded-lg mt-4 mb-4">
            View the clinics and treatments
          </button>
        </div>
        <div className="sm:w-1/2">
          <Image
            src="/frame 1.png"
            alt="About Us"
            width={500}
            height={400}
            className="rounded-lg"
          />
        </div>
        </div>
      </section>

      <section className="sm:w-4/6 p-6 mt-28 text-center w-full">
        <h3 className="text-2xl font-bold text-secondary mb-8">
          Why choose us
        </h3>
        <div className="flex flex-col sm:flex-row justify-around gap-8 w-full">
          <div className="flex flex-col items-center p-10 bg-white rounded-lg shadow-md sm:w-1/3">
            <Image
              src="/services/verified.gif"
              width="80"
              height="80"
              alt="car"
            />
            <h4 className="font-semibold mb-2">Verified Clinics</h4>
            <p className="text-neutralDark">
              We partner only with verified clinics to provide you with trusted
              healthcare options and peace of mind.
            </p>
          </div>
          <div className="flex flex-col items-center p-10 bg-white rounded-lg shadow-md sm:w-1/3">
            <Image
              src="/services/double-check.gif"
              width="80"
              height="80"
              alt="car"
            />
            <h4 className="font-semibold mb-2">Personalized Matches</h4>
            <p className="text-neutralDark">
              By understanding your unique needs, we help you find the right
              clinics that suit your treatment and care.
            </p>
          </div>
          <div className="flex flex-col items-center p-10 bg-white rounded-lg shadow-md sm:w-1/3">
            <Image
              src="/services/kindness.gif"
              width="80"
              height="80"
              alt="car"
            />
            <h4 className="font-semibold mb-2">Patient-Centric Approach</h4>
            <p className="text-neutralDark">
              Your health and well-being are our top priorities, and we make it
              easy to find quality care without the stress of booking an
              appointment.
            </p>
          </div>
        </div>
      </section>

      <section className="flex items-center sm:w-4/5 mt-28">
        <div className="flex sm:flex-row gap-8 sm:justify-around flex-col">
          <div className="sm:w-1/2">
            <Image
              src="/frame 2.png"
              alt="Our Vision"
              width={500}
              height={400}
              className="rounded-lg"
            />
          </div>
          <div className="sm:w-1/2 text-neutralDark">
            <h3 className="text-2xl font-bold text-secondary mb-6">
              Our vision
            </h3>
            <p className="mb-4">
              We aim to revolutionize the way patients connect with healthcare
              providers, creating a seamless experience that prioritizes trust,
              transparency, and quality care. By bridging the gap between
              patients and clinics, we’re making healthcare more accessible to
              everyone.
            </p>
            <p className="mb-4">
              Thank you for choosing FindClinics to support your journey in
              healthcare. We’re here to help you find the right clinic and
              treatment, so you can focus on what matters most: getting the care
              you deserve.
            </p>
          </div>
        </div>
      </section>

      <section className="sm:w-4/5 mt-28">
        <ClinicReviews />
      </section>
    </div>
  );
};

export default AboutUs;
