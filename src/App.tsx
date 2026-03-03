import { useState } from "react";
import { motion } from "motion/react";
import {
  Share2,
  FileText,
  Mail,
  MapPin,
  Briefcase,
  User,
  Phone,
  Building2,
  CalendarDays,
  ShieldCheck,
  ChevronRight,
  Car,
  Camera,
  Coffee,
  Music,
  CheckCircle,
  X,
  Loader2
} from "lucide-react";

// REPLACE THIS URL with your deployed Google Apps Script Web App URL
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbypIOr6zIyFG96IuQPBZTZT8p1XzYVbYEwflwf3hNSjS_tWwYCrDf_Ywpk65PexUD_c/exec";

export default function App() {
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  
  // Form State
  const [formData, setFormData] = useState({
    fullName: "",
    contactNumber: "",
    email: "",
    workEmail: "",
    areaOfResidence: "",
    companyName: "",
    profession: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [hasSubmitted, setHasSubmitted] = useState(() => {
    return localStorage.getItem('hasSubmittedGiveaway') === 'true';
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    if (GOOGLE_SCRIPT_URL === "YOUR_GOOGLE_SCRIPT_WEB_APP_URL_HERE") {
      alert("Please replace the GOOGLE_SCRIPT_URL in the code with your actual Google Apps Script URL.");
      setIsSubmitting(false);
      return;
    }

    try {
      // We use no-cors because Google Apps Script doesn't return proper CORS headers for POST requests
      // This means the browser won't let us read the response, but the request still goes through
      fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(formData),
      });

      // Since we can't read the response due to no-cors, we wait a moment and assume success
      // if no network error was thrown immediately
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitStatus('success');
      setHasSubmitted(true);
      localStorage.setItem('hasSubmittedGiveaway', 'true');
      setFormData({
        fullName: "",
        contactNumber: "",
        email: "",
        workEmail: "",
        areaOfResidence: "",
        companyName: "",
        profession: ""
      });
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen font-sans selection:bg-[#D4AF37] selection:text-white scroll-smooth bg-[#F8F8EC] text-[#1A1A1A]">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-50 py-8 px-6 md:px-12 border-b border-black/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col items-center md:items-start">
            {/* Logo placeholder - upload your logo as logo.png in the public folder */}
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="Emirates Tours & Safari LLC" className="h-12 w-auto object-contain" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextElementSibling?.classList.remove('hidden'); }} />
              <h1 className="hidden font-serif text-2xl md:text-3xl tracking-widest uppercase text-[#1A1A1A]">
                Emirates <span className="text-[#D4AF37]">Tours & Safari</span> LLC
              </h1>
            </div>
            <p className="font-serif italic text-[#D4AF37] text-sm tracking-widest mt-1">
              Different Experience through an adventure
            </p>
          </div>
          <div className="hidden md:flex items-center gap-6 text-xs uppercase tracking-[0.2em] text-[#1A1A1A]/60">
            <a href="#inclusions" className="hover:text-[#1A1A1A] transition-colors">The Experience</a>
            <a href="#how-it-works" className="hover:text-[#1A1A1A] transition-colors">How to Enter</a>
            <a href="#claim-form" className="border border-[#1A1A1A]/30 rounded-full px-6 py-2 hover:bg-[#1A1A1A] hover:text-white transition-all">
              Enter Draw
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-32 pb-20 px-6 md:px-12 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/hero2.jpg?q=80&w=2000&auto=format&fit=crop"
            alt="Luxury Desert Safari"
            className="w-full h-full object-cover opacity-75"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#F8F8EC]/80 via-transparent to-[#F8F8EC]"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#F8F8EC] via-[#F8F8EC]/50 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="h-[1px] w-12 bg-[#D4AF37]"></div>
              <span className="text-xs uppercase tracking-[0.3em] text-[#D4AF37]">Win A Free Desert Safari</span>
            </div>
            <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light leading-[0.9] mb-8 text-[#1A1A1A]">
              The Ultimate <br />
              <span className="italic text-[#1A1A1A]/80">Desert</span> Experience.
            </h2>
            <p className="text-lg md:text-xl text-[#1A1A1A]/60 font-light max-w-xl leading-relaxed mb-12">
              Experience the true essence of Abu Dhabi. We invite Abu Dhabi residents to win a premium desert safari, valued at AED 305 Per Person. Two exclusive winners selected every month.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <a href="#claim-form" className="group flex items-center justify-center gap-4 bg-[#D4AF37] text-white px-8 py-4 rounded-full text-sm uppercase tracking-[0.15em] font-medium hover:bg-[#1A1A1A] transition-all">
                Enter the Draw
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Inclusions Section */}
      <section id="inclusions" className="py-24 px-6 md:px-12 bg-[#F8F8EC]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 border-b border-black/10 pb-8">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl font-light text-[#1A1A1A] mb-4">The Experience</h2>
              <p className="text-[#D4AF37] text-sm uppercase tracking-[0.1em]">Valued at AED 305 Per Person</p>
            </div>
            <p className="max-w-md text-[#1A1A1A]/60 font-light leading-relaxed">
              A fully curated adventure designed for you to unwind and experience the true essence of Abu Dhabi.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Transportation */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border border-black/10 p-8 rounded-2xl hover:bg-black/5 transition-colors bg-white/50"
            >
              <Car className="w-8 h-8 text-[#D4AF37] mb-6" />
              <h3 className="font-serif text-2xl mb-4 text-[#1A1A1A]">Transportation</h3>
              <ul className="space-y-3 text-[#1A1A1A]/60 text-sm font-light">
                <li className="flex gap-2"><span className="text-[#D4AF37]">•</span> Pick up & drop off by 4x4 vehicles (Land Cruiser, Toyota Sequoia, or Nissan Patrol)</li>
                <li className="flex gap-2"><span className="text-[#D4AF37]">•</span> 45 minutes of dune bashing</li>
                <li className="flex gap-2"><span className="text-[#D4AF37]">•</span> Visit to a camel farm</li>
                <li className="flex gap-2"><span className="text-[#D4AF37]">•</span> Photo stop in the dunes</li>
                <li className="flex gap-2"><span className="text-[#D4AF37]">•</span> Desert Camp </li>
              </ul>
            </motion.div>

            {/* Activities */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="border border-black/10 p-8 rounded-2xl hover:bg-black/5 transition-colors bg-white/50"
            >
              <Camera className="w-8 h-8 text-[#D4AF37] mb-6" />
              <h3 className="font-serif text-2xl mb-4 text-[#1A1A1A]">Activities</h3>
              <ul className="space-y-3 text-[#1A1A1A]/60 text-sm font-light">
                <li className="flex gap-2"><span className="text-[#D4AF37]">•</span> Camel riding</li>
                <li className="flex gap-2"><span className="text-[#D4AF37]">•</span> Sandboarding</li>
                <li className="flex gap-2"><span className="text-[#D4AF37]">•</span> Henna painting</li>
                <li className="flex gap-2"><span className="text-[#D4AF37]">•</span> Photo opportunity with a falcon</li>
                <li className="flex gap-2"><span className="text-[#D4AF37]">•</span> Try out traditional Arabian attire</li>
		<li className="flex gap-2"><span className="text-[#D4AF37]">•</span> Shisha Experience</li>
              </ul>
            </motion.div>

            {/* Dinner */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="border border-black/10 p-8 rounded-2xl hover:bg-black/5 transition-colors bg-white/50"
            >
              <Coffee className="w-8 h-8 text-[#D4AF37] mb-6" />
              <h3 className="font-serif text-2xl mb-4 text-[#1A1A1A]">Refreshments</h3>
              <ul className="space-y-3 text-[#1A1A1A]/60 text-sm font-light">
		<li className="flex gap-2"><span className="text-[#D4AF37]">•</span> Traditional welcome snack(falafel and tahini sauce)</li>
                <li className="flex gap-2"><span className="text-[#D4AF37]">•</span> BBQ buffet dinner</li>
                <li className="flex gap-2"><span className="text-[#D4AF37]">•</span> Assorted soft drinks</li>
                <li className="flex gap-2"><span className="text-[#D4AF37]">•</span> Bottled water</li>
                <li className="flex gap-2"><span className="text-[#D4AF37]">•</span> Arabic coffee, Dates & Tea</li>
              </ul>
            </motion.div>

            {/* Entertainment */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="border border-black/10 p-8 rounded-2xl hover:bg-black/5 transition-colors bg-white/50"
            >
              <Music className="w-8 h-8 text-[#D4AF37] mb-6" />
              <h3 className="font-serif text-2xl mb-4 text-[#1A1A1A]">Entertainment</h3>
              <ul className="space-y-3 text-[#1A1A1A]/60 text-sm font-light">
                <li className="flex gap-2"><span className="text-[#D4AF37]">•</span> Belly dancing show (Sufi Dance during Ramadan)</li>
                <li className="flex gap-2"><span className="text-[#D4AF37]">•</span> Tanoura dance performance</li>
                <li className="flex gap-2"><span className="text-[#D4AF37]">•</span> Fire Show</li>
                <li className="flex gap-2"><span className="text-[#D4AF37]">•</span> Star gazing</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How to Win Section */}
      <section id="how-it-works" className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-light text-[#1A1A1A] mb-4">How to Enter</h2>
            <p className="text-[#D4AF37] text-sm uppercase tracking-[0.1em]">Three Simple Steps</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-1/2 left-[10%] right-[10%] h-[1px] bg-black/10 -translate-y-1/2 z-0"></div>

            {[
              {
                icon: Share2,
                title: "Like & Repost",
                desc: "Engage with our latest social media post about the giveaway.",
              },
              {
                icon: FileText,
                title: "Fill the Form",
                desc: "Complete the official entry form below with your details.",
              },
              {
                icon: Mail,
                title: "Check Your Email",
                desc: "We announce 2 lucky winners at the end of every month via email.",
              }
            ].map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                className="relative z-10 flex flex-col items-center text-center bg-white p-8"
              >
                <div className="w-16 h-16 rounded-full border border-black/10 flex items-center justify-center mb-6 bg-[#F8F8EC]">
                  <step.icon className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <h3 className="font-serif text-2xl text-[#1A1A1A] mb-3">{step.title}</h3>
                <p className="text-[#1A1A1A]/60 font-light text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Capture Form */}
      <section id="claim-form" className="py-24 px-6 md:px-12 bg-[#F8F8EC] relative">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-light text-[#1A1A1A] mb-4">Official Entry Form</h2>
            <p className="text-[#D4AF37] text-sm uppercase tracking-[0.1em]">Abu Dhabi Resident Giveaway</p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white border border-black/10 rounded-3xl p-8 md:p-12 shadow-xl shadow-black/5"
          >
            {hasSubmitted ? (
              <div className="text-center py-16 space-y-6">
                <div className="w-20 h-20 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-[#D4AF37]" />
                </div>
                <h3 className="font-serif text-3xl text-[#1A1A1A]">You're already entered!</h3>
                <p className="text-[#1A1A1A]/60 font-light max-w-md mx-auto leading-relaxed">
                  Thank you for participating. We have already received your entry for the giveaway. Winners will be contacted directly.
                </p>
              </div>
            ) : (
              <form className="space-y-8" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Full Name */}
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-[0.1em] text-[#1A1A1A]/60 flex items-center gap-2">
                      <User className="w-3 h-3 text-[#D4AF37]" /> Full Name *
                    </label>
                    <input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} required className="w-full bg-transparent border-b border-black/20 py-3 text-[#1A1A1A] focus:border-[#D4AF37] focus:outline-none transition-colors font-light" placeholder="John Doe" disabled={isSubmitting} />
                  </div>

                  {/* Contact Number */}
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-[0.1em] text-[#1A1A1A]/60 flex items-center gap-2">
                      <Phone className="w-3 h-3 text-[#D4AF37]" /> Contact Number *
                    </label>
                    <input type="tel" name="contactNumber" value={formData.contactNumber} onChange={handleInputChange} required className="w-full bg-transparent border-b border-black/20 py-3 text-[#1A1A1A] focus:border-[#D4AF37] focus:outline-none transition-colors font-light" placeholder="+971 50 123 4567" disabled={isSubmitting} />
                  </div>

                  {/* Email Address */}
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-[0.1em] text-[#1A1A1A]/60 flex items-center gap-2">
                      <Mail className="w-3 h-3 text-[#D4AF37]" /> Personal Email *
                    </label>
                    <input type="email" name="email" value={formData.email} onChange={handleInputChange} required className="w-full bg-transparent border-b border-black/20 py-3 text-[#1A1A1A] focus:border-[#D4AF37] focus:outline-none transition-colors font-light" placeholder="john.doe@gmail.com" disabled={isSubmitting} />
                  </div>

                  {/* Work Email */}
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-[0.1em] text-[#1A1A1A]/60 flex items-center gap-2">
                      <Briefcase className="w-3 h-3 text-[#D4AF37]" /> Work Email (Optional)
                    </label>
                    <input type="email" name="workEmail" value={formData.workEmail} onChange={handleInputChange} className="w-full bg-transparent border-b border-black/20 py-3 text-[#1A1A1A] focus:border-[#D4AF37] focus:outline-none transition-colors font-light" placeholder="john@company.com" disabled={isSubmitting} />
                  </div>

                  {/* Area of Residence */}
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-[0.1em] text-[#1A1A1A]/60 flex items-center gap-2">
                      <MapPin className="w-3 h-3 text-[#D4AF37]" /> Area of Residence *
                    </label>
                    <input type="text" name="areaOfResidence" value={formData.areaOfResidence} onChange={handleInputChange} required className="w-full bg-transparent border-b border-black/20 py-3 text-[#1A1A1A] focus:border-[#D4AF37] focus:outline-none transition-colors font-light" placeholder="e.g., Al Reem Island, Abu Dhabi" disabled={isSubmitting} />
                  </div>

                  {/* Company/Firm Name (Optional) */}
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-[0.1em] text-[#1A1A1A]/60 flex items-center gap-2">
                      <Building2 className="w-3 h-3 text-[#D4AF37]" /> Company Name (Optional)
                    </label>
                    <input type="text" name="companyName" value={formData.companyName} onChange={handleInputChange} className="w-full bg-transparent border-b border-black/20 py-3 text-[#1A1A1A] focus:border-[#D4AF37] focus:outline-none transition-colors font-light" placeholder="Acme Corp LLC" disabled={isSubmitting} />
                  </div>

                  {/* Designation/Job Title (Optional) */}
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-xs uppercase tracking-[0.1em] text-[#1A1A1A]/60 flex items-center gap-2">
                      <Briefcase className="w-3 h-3 text-[#D4AF37]" /> Profession / Job Title (Optional)
                    </label>
                    <input type="text" name="profession" value={formData.profession} onChange={handleInputChange} className="w-full bg-transparent border-b border-black/20 py-3 text-[#1A1A1A] focus:border-[#D4AF37] focus:outline-none transition-colors font-light" placeholder="Marketing Manager" disabled={isSubmitting} />
                  </div>
                </div>

                {/* Checkbox */}
                <div className="flex items-start gap-4 pt-4">
                  <div className="relative flex items-center justify-center mt-1">
                    <input type="checkbox" id="terms" required className="peer appearance-none w-5 h-5 border border-black/30 rounded-sm checked:bg-[#D4AF37] checked:border-[#D4AF37] transition-colors cursor-pointer bg-white" />
                    <CheckCircle className="w-3 h-3 text-white absolute opacity-0 peer-checked:opacity-100 pointer-events-none" />
                  </div>
                  <label htmlFor="terms" className="text-sm text-[#1A1A1A]/60 font-light leading-relaxed cursor-pointer">
                    I confirm that I have liked/reposted the social media post. I agree to receive occasional updates about exclusive safari offers and promotions from Emirates Tours & Safari LLC.
                  </label>
                </div>

                {/* Submit Button */}
                <button 
                  type="submit" 
                  disabled={isSubmitting || submitStatus === 'success'}
                  className="w-full bg-[#1A1A1A] text-white font-medium text-sm uppercase tracking-[0.15em] py-5 rounded-full hover:bg-[#D4AF37] transition-colors flex justify-center items-center gap-3 mt-8 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Submitting...
                    </>
                  ) : submitStatus === 'success' ? (
                    <>
                      <CheckCircle className="w-4 h-4" />
                      Entry Submitted Successfully!
                    </>
                  ) : (
                    <>
                      Submit Entry
                      <ChevronRight className="w-4 h-4" />
                    </>
                  )}
                </button>
                
                {submitStatus === 'error' && (
                  <div className="text-center text-red-500 text-sm mt-4">
                    There was an error submitting your entry. Please try again.
                  </div>
                )}

                <div className="text-center pt-6 flex items-center justify-center gap-2 text-xs text-[#1A1A1A]/40 uppercase tracking-widest">
                  <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                  Secure & Confidential
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-16 border-t border-black/10 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <img src="/logo.png" alt="Emirates Tours & Safari LLC" className="h-12 w-auto object-contain" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextElementSibling?.classList.remove('hidden'); }} />
                <h2 className="hidden font-serif text-2xl tracking-widest uppercase text-[#1A1A1A]">
                  Emirates <span className="text-[#D4AF37]">Tours & Safari</span> LLC
                </h2>
              </div>
              <p className="font-serif italic text-[#D4AF37] text-sm tracking-widest mb-6">
                Different Experience through an adventure
              </p>
              <p className="text-[#1A1A1A]/50 text-sm font-light max-w-md leading-relaxed">
                The premier provider of authentic desert experiences in the UAE. Specializing in unforgettable desert safaris, corporate events, and VIP bookings.
              </p>
            </div>
            <div className="md:text-right">
              <div className="inline-flex items-center gap-3 text-[#1A1A1A] mb-4">
                <CalendarDays className="w-5 h-5 text-[#D4AF37]" />
                <span className="text-sm uppercase tracking-[0.1em]">Winners Announced Monthly</span>
              </div>
              <p className="text-[#1A1A1A]/40 text-sm font-light">
                Next draw will be conducted on the 1st of next month. Winners will be contacted via their provided Email Address.
              </p>
            </div>
          </div>
          <div className="pt-8 border-t border-black/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[#1A1A1A]/30 text-xs uppercase tracking-widest">
            <p>&copy; {new Date().getFullYear()} Emirates Tours & Safari LLC. All rights reserved.</p>
            <div className="flex gap-6">
              <button onClick={() => setIsPrivacyOpen(true)} className="hover:text-[#1A1A1A] transition-colors uppercase tracking-widest">Privacy Policy</button>
              <button onClick={() => setIsTermsOpen(true)} className="hover:text-[#1A1A1A] transition-colors uppercase tracking-widest">Terms & Conditions</button>
            </div>
          </div>
        </div>
      </footer>

      {/* Modals */}
      {isTermsOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto relative shadow-2xl"
          >
            <button onClick={() => setIsTermsOpen(false)} className="absolute top-6 right-6 text-[#1A1A1A]/50 hover:text-[#1A1A1A] transition-colors">
              <X className="w-6 h-6" />
            </button>
            <h2 className="font-serif text-3xl mb-6 text-[#1A1A1A]">Terms & Conditions</h2>
            <div className="space-y-4 text-[#1A1A1A]/70 font-light text-sm leading-relaxed">
              <p><strong>Main terms related to the product:</strong></p>
              <ul className="list-disc pl-5 space-y-3">
                <li>Pick up for the experience from Abu Dhabi hotels / major malls only.</li>
                <li>Transportation will be on sharing 4x4 land cruisers or similar (there will be 6 people in total in each vehicle).</li>
                <li>Winners need to book the desert safari at least 24 hours prior to the date of travel.</li>
                <li>No shows will be counted and lapsed the opportunity.</li>
                <li>Modifications or date changes must be submitted 24 hours prior.</li>
                <li>ATV / quad bike, Buggy ride, alcohol is not included in the package or not part of winners package.</li>
                <li>Booking will be subject to availability.</li>
              </ul>
            </div>
          </motion.div>
        </div>
      )}

      {isPrivacyOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto relative shadow-2xl"
          >
            <button onClick={() => setIsPrivacyOpen(false)} className="absolute top-6 right-6 text-[#1A1A1A]/50 hover:text-[#1A1A1A] transition-colors">
              <X className="w-6 h-6" />
            </button>
            <h2 className="font-serif text-3xl mb-6 text-[#1A1A1A]">Privacy Policy</h2>
            <div className="space-y-4 text-[#1A1A1A]/70 font-light text-sm leading-relaxed">
              <p>At Emirates Tours & Safari LLC, we are committed to protecting your privacy and ensuring the security of your personal information.</p>
              
              <h3 className="font-medium text-[#1A1A1A] mt-6">Information Collection</h3>
              <p>We collect personal information such as your name, email address, phone number, and area of residence when you enter our giveaway. This information is used solely for the purpose of administering the draw and contacting winners.</p>
              
              <h3 className="font-medium text-[#1A1A1A] mt-6">Use of Information</h3>
              <p>By entering the giveaway, you consent to receiving occasional updates about exclusive safari offers and promotions from Emirates Tours & Safari LLC. You may opt-out of these communications at any time.</p>
              
              <h3 className="font-medium text-[#1A1A1A] mt-6">Data Security</h3>
              <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
              
              <h3 className="font-medium text-[#1A1A1A] mt-6">Third-Party Disclosure</h3>
              <p>We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties.</p>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
