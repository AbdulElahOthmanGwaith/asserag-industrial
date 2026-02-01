import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const phoneNumber = '967777603050'; // الرقم المذكور في الموقع
  const message = encodeURIComponent('مرحباً شركة السراج للتجهيزات الصناعية، أود الاستفسار عن خدماتكم.');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 left-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 group flex items-center gap-2"
      aria-label="Contact on WhatsApp"
    >
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap font-cairo font-bold">
        تواصل معنا عبر واتساب
      </span>
      <MessageCircle className="w-8 h-8" />
    </a>
  );
};

export default WhatsAppButton;
