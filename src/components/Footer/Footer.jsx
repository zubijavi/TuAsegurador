const Footer2 = () => {
  return (
    <footer className="bg-[#0d141b] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-10">

        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16">

          {/* Brand */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="flex items-center gap-3 text-primary">
              <span className="material-symbols-outlined text-4xl">verified_user</span>
              <span className="text-2xl font-bold tracking-tight">InsuranceCo</span>
            </div>

            <p className="text-slate-400 text-base leading-relaxed max-w-xs">
              Securing your future with comprehensive coverage and personalized care since 1998. Your peace of mind is our priority.
            </p>

            <div className="flex gap-4">
              {["public", "share", "thumb_up"].map(icon => (
                <a
                  key={icon}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-primary transition group"
                >
                  <span className="material-symbols-outlined text-xl group-hover:text-white">
                    {icon}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h3 className="font-bold mb-6 uppercase tracking-wider text-sm">Our Services</h3>
            <ul className="flex flex-col gap-4 text-slate-400">
              {["Auto Insurance", "Home Insurance", "Life Insurance", "Business Insurance"].map(item => (
                <li key={item}>
                  <a href="#" className="hover:text-primary transition">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="lg:col-span-2">
            <h3 className="font-bold mb-6 uppercase tracking-wider text-sm">Resources</h3>
            <ul className="flex flex-col gap-4 text-slate-400">
              {["Claim Center", "Blog & News", "Insurance FAQ", "Policy Documents"].map(item => (
                <li key={item}>
                  <a href="#" className="hover:text-primary transition">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <h3 className="font-bold mb-6 uppercase tracking-wider text-sm">Company</h3>
            <ul className="flex flex-col gap-4 text-slate-400">
              {["About Us", "Careers", "Newsroom", "Contact"].map(item => (
                <li key={item}>
                  <a href="#" className="hover:text-primary transition">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            <div>
              <h3 className="font-bold mb-6 uppercase tracking-wider text-sm">Contact Support</h3>

              <div className="flex items-center gap-2">
                <span className="text-xl font-bold">1-800-INSURE</span>
                <span className="bg-primary text-[10px] font-bold px-2 py-0.5 rounded uppercase">
                  24/7
                </span>
              </div>

              <p className="text-slate-400 text-sm">Always available for claims.</p>
            </div>

            <div>
              <h3 className="font-bold mb-4 uppercase tracking-wider text-sm">Office</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                123 Insurance Plaza,<br />
                New York, NY 10001
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">

          <div className="text-slate-500 text-sm">
            © 2024 InsuranceCo. All rights reserved.
          </div>

          <div className="flex gap-8 text-sm text-slate-500">
            {["Privacy Policy", "Terms of Service", "Cookie Settings"].map(item => (
              <a key={item} href="#" className="hover:text-slate-300 transition">
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2 text-slate-500 text-sm">
            <span className="material-symbols-outlined text-sm">language</span>
            <span>English (US)</span>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer2;