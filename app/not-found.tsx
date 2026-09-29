import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Sparkles } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center py-32 px-6 bg-clinical-surface">
      <div className="max-w-lg w-full text-center">
        
        {/* Brand Icon */}
        <div className="relative w-16 h-16 mx-auto mb-6 opacity-90">
          <Image
            src="/logo-icon.png"
            alt="BIBI JAN Aesthetic"
            fill
            className="object-contain"
          />
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-semibold uppercase tracking-widest mb-4">
          <Sparkles className="w-3.5 h-3.5 text-brand-500" />
          <span>Error 404</span>
        </div>

        <h1 className="font-serif text-3xl sm:text-4xl font-medium text-clinical-dark mb-4">
          Looks like this page needs a little care.
        </h1>

        <p className="text-sm text-clinical-slate font-light leading-relaxed mb-8">
          The sanctuary page or treatment path you are looking for may have been relocated or updated. Allow us to guide you back to our clinic home.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-brand-500 hover:bg-brand-600 text-white font-semibold text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all shadow-md"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>

          <Link
            href="/treatments"
            className="w-full sm:w-auto px-6 py-3.5 rounded-full border border-clinical-border hover:border-brand-400 text-clinical-charcoal text-xs font-medium uppercase tracking-widest flex items-center justify-center transition-colors"
          >
            <span>Explore Treatments</span>
          </Link>
        </div>

      </div>
    </div>
  );
}
