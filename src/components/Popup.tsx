import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, Plus, Minus } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

const floorplans = ['1 BHK', '2 BHK', '3 BHK', '3+ BHK'] as const;
const purposes   = ['Move In', 'Rent Out', 'Renovate'] as const;

interface Requirements {
  kitchen: boolean;
  wardrobe: number;
  entertainment: number;
  study: number;
  crockery: number;
}

const initialReq: Requirements = {
  kitchen: true,
  wardrobe: 1,
  entertainment: 1,
  study: 1,
  crockery: 1,
};



interface Props {
  open: boolean;
  onClose: () => void;
}

const Popup: React.FC<Props> = ({ open, onClose }) => {
  const [step, setStep]                   = useState<1 | 2 | 3>(1);
  const [floorplan, setFloorplan]         = useState<typeof floorplans[number] | ''>('');
  const [purpose,   setPurpose]           = useState<typeof purposes[number]   | ''>('');
  const [req,       setReq]               = useState<Requirements>(initialReq);
  const [name,      setName]              = useState('');
  const [mobile,    setMobile]            = useState('');

  

  /* ─── Lock / unlock scroll ─── */
  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden';
    else      document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  /* ─── helpers ─── */
  const inc  = (k: keyof Requirements) => setReq(r => ({ ...r, [k]: (r[k] as number) + 1 }));
  const dec  = (k: keyof Requirements) => setReq(r => ({ ...r, [k]: Math.max(0, (r[k] as number) - 1) }));
  const next = () => setStep(s => (s + 1) as 1 | 2 | 3);
  const prev = () => setStep(s => (s - 1) as 1 | 2 | 3);

  const cannotProceed =
    (step === 1 && (!floorplan || !purpose)) ||
    (step === 3 && (!name.trim() || mobile.trim().length < 8));

    const [isSubmitting, setIsSubmitting] = useState(false);

    const formatRequirements = () => {
      const parts = [];
    
      if (req.kitchen) parts.push("Modular Kitchen: Yes");
    
      if (req.wardrobe > 0) parts.push(`Wardrobes: ${req.wardrobe}`);
      if (req.entertainment > 0) parts.push(`Entertainment Units: ${req.entertainment}`);
      if (req.study > 0) parts.push(`Study Units: ${req.study}`);
      if (req.crockery > 0) parts.push(`Crockery Units: ${req.crockery}`);
    
      return parts.join('\n');
    };
    

  const sendEmail = async () => {
    if (isSubmitting) return;        
    setIsSubmitting(true); 
    try {
      await emailjs.send(
        'service_8a9bndk',
        'template_n4df8s9',
        {
          name,
          mobile,
          floorplan,
          purpose,
          requirements: formatRequirements(),
        },
        'AOW1QKkjg-CxZJcYO'
      );
      toast.success('Quote requested! We’ll call you soon.');
      onClose();
    } catch {
      toast.error('Could not send. Please try again.');
    }
    finally {
      setIsSubmitting(false);    
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[90] bg-black/70 backdrop-blur-sm flex items-center justify-center px-2"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        >
          <motion.div
            className="relative w-full max-w-xl bg-[#1C1C1C] text-white rounded-lg shadow-2xl overflow-hidden"
            initial={{ y: -40, scale: 0.9 }} animate={{ y: 0, scale: 1 }} exit={{ y: -40, scale: 0.9, opacity: 0 }}
          >
            {/* close */}
            <button onClick={onClose} className="absolute top-3 right-3 text-gray-400 hover:text-white">
              <X size={20} />
            </button>

            {/* header */}
            <header className="px-6 pt-6 pb-4 border-b border-gray-700 text-center">
              <h2 className="text-lg font-semibold">
                {step === 1 && 'Personalized Interior Design Quote in Minutes'}
                {step === 2 && 'Tell Us What You Need'}
                {step === 3 && 'Almost Done!'}
              </h2>
              <p className="text-xs text-gray-400 mt-1">STEP {step} OF 3</p>
            </header>

            {/* body */}
            <div className="p-6 space-y-6">
              {step === 1 && (
                <>
                  <section>
                    <h3 className=" font-medium">Your floorplan</h3>
                    <p className='font-thin text-xs mb-3 text-red-600'>Required*</p>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {floorplans.map(f => (
                        <button
                          key={f}
                          onClick={() => setFloorplan(f)}
                          className={`py-2 rounded-md border transition ${
                            floorplan === f
                              ? 'bg-[#D4AF37] text-black border-[#D4AF37]'
                              : 'border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10'
                          }`}
                        >
                          {f}
                        </button>
                      ))}
                    </div>
                  </section>

                  <section>
                    <h3 className=" font-medium">Purpose</h3>
                    <p className='font-thin text-xs mb-3 text-red-600'>Required*</p>
                    <div className="grid grid-cols-3 gap-2">
                      {purposes.map(p => (
                        <button
                          key={p}
                          onClick={() => setPurpose(p)}
                          className={`py-2 text-sm rounded-md border transition ${
                            purpose === p
                              ? 'bg-[#D4AF37] text-black border-[#D4AF37]'
                              : 'border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10'
                          }`}
                        >
                          {p}
                        </button>
                      ))}
                    </div>
                  </section>
                </>
              )}

              {step === 2 && (
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-5">
                    <h3 className="font-medium">Your requirements for {floorplan}</h3>

                    {(
                      [
                        ['Kitchen',        'kitchen'],
                        ['Wardrobe',       'wardrobe'],
                        ['Entertainment',  'entertainment'],
                        ['Study unit',     'study'],
                        ['Crockery unit',  'crockery'],
                      ] as const
                    ).map(([label, key]) => (
                      <div key={key} className="flex justify-between items-center border-b border-gray-700 pb-2">
                        <span>{label}</span>
                        {key === 'kitchen' ? (
                          <input
                            type="checkbox"
                            checked={req.kitchen}
                            onChange={e => setReq(r => ({ ...r, kitchen: e.target.checked }))}
                            className="h-5 w-5 accent-[#D4AF37]"
                          />
                        ) : (
                          <div className="flex items-center space-x-3">
                            <button onClick={() => dec(key)}
                              className="p-1 border border-[#D4AF37] rounded text-[#D4AF37] hover:bg-[#D4AF37]/10">
                              <Minus size={14} />
                            </button>
                            <span>{req[key as keyof Requirements]}</span>
                            <button onClick={() => inc(key)}
                              className="p-1 border border-[#D4AF37] rounded text-[#D4AF37] hover:bg-[#D4AF37]/10">
                              <Plus size={14} />
                            </button>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="hidden md:flex flex-col items-center justify-center text-center">
                    <img src="/assets/otherProducts.svg" alt="" className="h-40 mb-4" />
                    <h4 className="font-semibold">Other Interior Products</h4>
                    <p className="text-xs text-gray-400 mt-1">
                      Get interiors done for living, study & foyer areas along with
                      false ceilings, painting and modular furniture.
                    </p>
                  </div>
                </div>
              )}

              {step === 3 && (
                <form onSubmit={e => { e.preventDefault(); sendEmail(); }} className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    className="w-full bg-transparent border-b border-[#D4AF37] py-2 placeholder-gray-400 focus:outline-none"
                    required
                  />
                  {name.trim() === '' && (
                    <p className="text-red-500 text-xs mt-1">This field is required.</p>
                  )}
                </div>
              
                <div>
                  <input
                    type="tel"
                    placeholder="Mobile Number"
                    value={mobile}
                    onChange={e => setMobile(e.target.value)}
                    className="w-full bg-transparent border-b border-[#D4AF37] py-2 placeholder-gray-400 focus:outline-none"
                    required
                  />
                  {mobile.trim() === '' && (
                    <p className="text-red-500 text-xs mt-1">This field is required.</p>
                  )}
                </div>
              
                <p className="text-xs text-gray-500">
                  We’ll contact you only about this quote.
                </p>
              </form>
              
              )}
            </div>

            <footer className="flex justify-between items-center px-6 py-4 border-t border-gray-700">
              {step > 1 ? (
                <button onClick={prev}
                  className="px-6 py-2 rounded-md border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10">
                  Back
                </button>
              ) : <span />}

              {step < 3 ? (
                <button onClick={next} disabled={cannotProceed}
                  className={`px-6 py-2 rounded-md font-semibold transition ${
                    cannotProceed
                      ? 'bg-gray-500 text-gray-300 cursor-not-allowed'
                      : 'bg-[#D4AF37] text-black hover:bg-[#cfa12e]'
                  }`}>
                  {step === 1 ? 'Proceed' : 'Next'}
                </button>
              ) : (
                <button
  onClick={sendEmail}
  disabled={cannotProceed || isSubmitting}
  className={`px-6 py-2 rounded-md font-semibold transition ${
    cannotProceed || isSubmitting
      ? 'bg-gray-500 text-gray-300 cursor-not-allowed'
      : 'bg-[#D4AF37] text-black hover:bg-[#cfa12e]'
  }`}
>
  {isSubmitting ? 'Sending…' : 'Submit'}
</button>
              )}
            </footer>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Popup;
