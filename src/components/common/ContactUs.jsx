import React, { useState, useEffect, useRef } from 'react';
import { useIntersectionObserver } from '../../lib/hooks/useIntersetionObserver';
import { MailIcon, PhoneIcon } from '../../assets/icons';
import contactData from '../../data/contactUs.json';

export const ContactUs = () => {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-8 lg:px-16">
        <div className="text-center">
          <p className="text-gray-500">{contactData.section.label}</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2">
            <span className="bg-gradient-to-r from-purple-600 to-teal-400 bg-clip-text text-transparent">
              {contactData.section.heading}
            </span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto mt-12">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">{contactData.section.subheading}</h3>
          <form className="space-y-4">
            {contactData.form.fields.map((field) => {
              const baseClassName = "w-full p-3 bg-gray-200 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400";
              const gridClassName = field.gridColumn === "half" ? "grid-cols-1 md:grid-cols-2 gap-4" : "";
              
              if (field.type === "textarea") {
                return (
                  <textarea
                    key={field.name}
                    name={field.name}
                    placeholder={field.placeholder}
                    rows={field.rows}
                    required={field.required}
                    className={baseClassName}
                  />
                );
              }
              
              if (field.gridColumn === "half") {
                // Find the pair for this half-width field
                const fieldIndex = contactData.form.fields.indexOf(field);
                const nextField = contactData.form.fields[fieldIndex + 1];
                
                if (nextField && nextField.gridColumn === "half" && fieldIndex % 2 === 0) {
                  return (
                    <div key={`${field.name}-${nextField.name}`} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input
                        type={field.type}
                        name={field.name}
                        placeholder={field.placeholder}
                        required={field.required}
                        className={baseClassName}
                      />
                      <input
                        type={nextField.type}
                        name={nextField.name}
                        placeholder={nextField.placeholder}
                        required={nextField.required}
                        className={baseClassName}
                      />
                    </div>
                  );
                }
                return null; // Skip the second field in the pair
              }
              
              return (
                <input
                  key={field.name}
                  type={field.type}
                  name={field.name}
                  placeholder={field.placeholder}
                  required={field.required}
                  className={baseClassName}
                />
              );
            })}
            <button type="submit" className="w-full bg-black text-white font-semibold py-3 px-6 rounded-md hover:bg-gray-800 transition-colors">
              {contactData.form.submitButton.text}
            </button>
          </form>

          <div className="mt-12 border-t border-gray-200 pt-8 space-y-4 text-sm text-gray-600">
            {contactData.contactInfo.map((info) => (
              <div key={info.type} className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                {info.type === 'email' ? <MailIcon /> : <PhoneIcon />}
                <div className="flex flex-col sm:flex-row sm:flex-wrap gap-x-2">
                  <span>{info.label}: <a href={info.link} className="font-semibold text-purple-700">{info.value}</a></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
