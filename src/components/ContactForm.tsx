import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Send, Phone, Mail, MapPin } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, { message: 'الاسم يجب أن يكون أكثر من حرفين' }),
  email: z.string().email({ message: 'البريد الإلكتروني غير صحيح' }),
  phone: z.string().min(9, { message: 'رقم الهاتف غير صحيح' }),
  subject: z.string().min(5, { message: 'الموضوع يجب أن يكون أكثر من 5 أحرف' }),
  message: z.string().min(10, { message: 'الرسالة يجب أن تكون أكثر من 10 أحرف' }),
});

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    // محاكاة إرسال البيانات
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log('Form Data:', data);
    alert('شكراً لتواصلك معنا. سيقوم فريقنا بالرد عليك في أقرب وقت ممكن.');
    reset();
  };

  return (
    <section id="contact-form" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Contact Info */}
          <div className="lg:w-1/3">
            <h2 className="text-3xl font-bold text-dark mb-8 font-cairo">معلومات التواصل</h2>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg text-primary">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-dark font-cairo">الهاتف</h4>
                  <p className="text-text-light dir-ltr text-right">+967 777 603 050</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg text-primary">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-dark font-cairo">البريد الإلكتروني</h4>
                  <p className="text-text-light">info@al-seraj.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg text-primary">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-dark font-cairo">الموقع</h4>
                  <p className="text-text-light font-cairo">اليمن - صنعاء / جنوب أفريقيا</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:w-2/3 bg-gray-50 p-8 md:p-12 rounded-3xl border border-gray-100 shadow-sm">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-dark mb-2 font-cairo">الاسم الكامل</label>
                  <input
                    {...register('name')}
                    className={`w-full px-4 py-3 rounded-xl border outline-none transition-all font-cairo ${
                      errors.name ? 'border-accent' : 'border-gray-200 focus:border-primary'
                    }`}
                    placeholder="أدخل اسمك"
                  />
                  {errors.name && <p className="text-accent text-xs mt-1 font-cairo">{errors.name.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-bold text-dark mb-2 font-cairo">البريد الإلكتروني</label>
                  <input
                    {...register('email')}
                    className={`w-full px-4 py-3 rounded-xl border outline-none transition-all font-cairo ${
                      errors.email ? 'border-accent' : 'border-gray-200 focus:border-primary'
                    }`}
                    placeholder="example@mail.com"
                  />
                  {errors.email && <p className="text-accent text-xs mt-1 font-cairo">{errors.email.message}</p>}
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-dark mb-2 font-cairo">رقم الهاتف</label>
                  <input
                    {...register('phone')}
                    className={`w-full px-4 py-3 rounded-xl border outline-none transition-all font-cairo ${
                      errors.phone ? 'border-accent' : 'border-gray-200 focus:border-primary'
                    }`}
                    placeholder="+967..."
                  />
                  {errors.phone && <p className="text-accent text-xs mt-1 font-cairo">{errors.phone.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-bold text-dark mb-2 font-cairo">الموضوع</label>
                  <input
                    {...register('subject')}
                    className={`w-full px-4 py-3 rounded-xl border outline-none transition-all font-cairo ${
                      errors.subject ? 'border-accent' : 'border-gray-200 focus:border-primary'
                    }`}
                    placeholder="عن ماذا تود الاستفسار؟"
                  />
                  {errors.subject && <p className="text-accent text-xs mt-1 font-cairo">{errors.subject.message}</p>}
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-dark mb-2 font-cairo">الرسالة</label>
                <textarea
                  {...register('message')}
                  rows={4}
                  className={`w-full px-4 py-3 rounded-xl border outline-none transition-all font-cairo ${
                    errors.message ? 'border-accent' : 'border-gray-200 focus:border-primary'
                  }`}
                  placeholder="اكتب رسالتك هنا..."
                ></textarea>
                {errors.message && <p className="text-accent text-xs mt-1 font-cairo">{errors.message.message}</p>}
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 font-cairo disabled:opacity-50"
              >
                {isSubmitting ? 'جاري الإرسال...' : (
                  <>
                    <span>إرسال الرسالة</span>
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
