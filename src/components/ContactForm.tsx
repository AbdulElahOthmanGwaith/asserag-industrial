import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Send, Phone, Mail, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';
import { useState } from 'react';

const ContactForm = () => {
  const { t } = useTranslation();
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const formSchema = z.object({
    name: z.string().min(2, { message: t('contact.form.errors.name_min') }),
    email: z.string().email({ message: t('contact.form.errors.email_invalid') }),
    phone: z.string().min(9, { message: t('contact.form.errors.phone_min') }),
    subject: z.string().min(5, { message: t('contact.form.errors.subject_min') }),
    message: z.string().min(10, { message: t('contact.form.errors.message_min') }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      // NOTE: Replace these with your actual EmailJS Service ID, Template ID, and Public Key
      // Sign up at https://www.emailjs.com/ to get these.
      const serviceId = 'YOUR_SERVICE_ID';
      const templateId = 'YOUR_TEMPLATE_ID';
      const publicKey = 'YOUR_PUBLIC_KEY';

      // Check if keys are placeholders
      if (serviceId === 'YOUR_SERVICE_ID') {
         console.warn('EmailJS keys are missing. Simulating submission.');
         await new Promise((resolve) => setTimeout(resolve, 1000));
      } else {
         await emailjs.send(serviceId, templateId, data, publicKey);
      }
      
      setSubmitStatus('success');
      reset();
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('Failed to send email:', error);
      setSubmitStatus('error');
    }
  };

  return (
    <section id="contact-form" className="py-24 bg-white scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Contact Info */}
          <div className="lg:w-1/3">
            <h2 className="text-3xl font-bold text-dark mb-8 font-cairo">{t('contact.title')}</h2>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg text-primary">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-dark font-cairo">{t('contact.phone')}</h4>
                  <p className="text-text-light dir-ltr text-right">+967 777 603 050</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg text-primary">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-dark font-cairo">{t('contact.email')}</h4>
                  <p className="text-text-light">info@al-seraj.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg text-primary">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-dark font-cairo">{t('contact.location')}</h4>
                  <p className="text-text-light font-cairo">{t('contact.location_value')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:w-2/3 bg-gray-50 p-8 md:p-12 rounded-3xl border border-gray-100 shadow-sm">
            {submitStatus === 'success' && (
               <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4" role="alert">
                  <span className="block sm:inline">{t('contact.form.success')}</span>
               </div>
            )}
            {submitStatus === 'error' && (
               <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
                  <span className="block sm:inline">Something went wrong. Please try again later.</span>
               </div>
            )}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-dark mb-2 font-cairo">{t('contact.form.name_label')}</label>
                  <input
                    {...register('name')}
                    className={`w-full px-4 py-3 rounded-xl border outline-none transition-all font-cairo ${
                      errors.name ? 'border-accent' : 'border-gray-200 focus:border-primary'
                    }`}
                    placeholder={t('contact.form.name_placeholder')}
                  />
                  {errors.name && <p className="text-accent text-xs mt-1 font-cairo">{errors.name.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-bold text-dark mb-2 font-cairo">{t('contact.form.email_label')}</label>
                  <input
                    {...register('email')}
                    className={`w-full px-4 py-3 rounded-xl border outline-none transition-all font-cairo ${
                      errors.email ? 'border-accent' : 'border-gray-200 focus:border-primary'
                    }`}
                    placeholder={t('contact.form.email_placeholder')}
                  />
                  {errors.email && <p className="text-accent text-xs mt-1 font-cairo">{errors.email.message}</p>}
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-dark mb-2 font-cairo">{t('contact.form.phone_label')}</label>
                  <input
                    {...register('phone')}
                    className={`w-full px-4 py-3 rounded-xl border outline-none transition-all font-cairo ${
                      errors.phone ? 'border-accent' : 'border-gray-200 focus:border-primary'
                    }`}
                    placeholder={t('contact.form.phone_placeholder')}
                  />
                  {errors.phone && <p className="text-accent text-xs mt-1 font-cairo">{errors.phone.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-bold text-dark mb-2 font-cairo">{t('contact.form.subject_label')}</label>
                  <input
                    {...register('subject')}
                    className={`w-full px-4 py-3 rounded-xl border outline-none transition-all font-cairo ${
                      errors.subject ? 'border-accent' : 'border-gray-200 focus:border-primary'
                    }`}
                    placeholder={t('contact.form.subject_placeholder')}
                  />
                  {errors.subject && <p className="text-accent text-xs mt-1 font-cairo">{errors.subject.message}</p>}
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-dark mb-2 font-cairo">{t('contact.form.message_label')}</label>
                <textarea
                  {...register('message')}
                  rows={4}
                  className={`w-full px-4 py-3 rounded-xl border outline-none transition-all font-cairo ${
                    errors.message ? 'border-accent' : 'border-gray-200 focus:border-primary'
                  }`}
                  placeholder={t('contact.form.message_placeholder')}
                ></textarea>
                {errors.message && <p className="text-accent text-xs mt-1 font-cairo">{errors.message.message}</p>}
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 font-cairo disabled:opacity-50"
              >
                {isSubmitting ? t('contact.form.submitting') : (
                  <>
                    <span>{t('contact.form.submit')}</span>
                    <Send className="w-5 h-5 rotate-180" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
