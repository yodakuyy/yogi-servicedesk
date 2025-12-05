import React from 'react';

const HeroImage: React.FC = () => {
  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Background Image - Using a high quality office/desk setup similar to the reference */}
      <img
        src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop"
        alt="Modern Office Desk"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Dark Overlay gradient for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      <div className="absolute inset-0 bg-indigo-900/10 mix-blend-multiply" />

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl transform translate-y-10">
           <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight drop-shadow-lg font-sans">
            MODENA <span className="font-light opacity-90">Servicedesk</span>
          </h2>
          <div className="mt-4 flex justify-center">
             <div className="h-1 w-20 bg-indigo-500 rounded-full"></div>
          </div>
        </div>
      </div>
      
      {/* Decorative blurred shapes to match the 'modern' vibe */}
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-indigo-600/30 rounded-full blur-3xl"></div>
      <div className="absolute top-20 right-20 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl"></div>
    </div>
  );
};

export default HeroImage;