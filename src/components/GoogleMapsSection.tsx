import React, { useState } from 'react';
import { BRANCHES_DATA } from '../data/coachingData';
import { MapPin, Navigation, ExternalLink, Phone, MessageCircle, Clock, Train, Compass, Copy, Check, Car, Building2, Sparkles } from 'lucide-react';

export const GoogleMapsSection: React.FC = () => {
  const [selectedBranchId, setSelectedBranchId] = useState<string>('shastri-nagar');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [mapType, setMapType] = useState<'m' | 'k'>('m'); // m = standard roadmap, k = satellite

  const currentBranch = BRANCHES_DATA.find((b) => b.id === selectedBranchId) || BRANCHES_DATA[0];

  const handleCopyAddress = (branch: typeof BRANCHES_DATA[0]) => {
    const fullText = `${branch.name}, ${branch.address}, ${branch.landmark}, ${branch.city} - ${branch.pincode}`;
    navigator.clipboard.writeText(fullText);
    setCopiedId(branch.id);
    setTimeout(() => {
      setCopiedId(null);
    }, 2000);
  };

  return (
    <section id="google-maps-location" className="py-16 sm:py-24 bg-white border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-sky-700 font-extrabold text-xs uppercase tracking-widest bg-sky-50 border border-sky-200 px-3.5 py-1.5 rounded-full inline-flex items-center shadow-xs">
            <Compass className="w-3.5 h-3.5 mr-1.5 text-sky-600 animate-spin" style={{ animationDuration: '10s' }} />
            Official Google Maps Navigation
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            Find Classes of Academia on Google Maps
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Visit our two coaching institutes located in Shastri Nagar and Vivekanand Nagar, Ghaziabad. Use Google Maps for live driving directions, bus routes, or metro transit.
          </p>
        </div>

        {/* Campus Selection Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          {BRANCHES_DATA.map((branch) => {
            const isSelected = selectedBranchId === branch.id;
            return (
              <button
                key={branch.id}
                onClick={() => setSelectedBranchId(branch.id)}
                className={`flex items-center px-5 py-3.5 rounded-2xl font-bold text-sm transition-all cursor-pointer shadow-sm ${
                  isSelected
                    ? 'bg-slate-900 text-white shadow-md shadow-slate-900/20 scale-[1.02]'
                    : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                <MapPin className={`w-4 h-4 mr-2.5 ${isSelected ? 'text-amber-400' : 'text-slate-500'}`} />
                <div className="text-left">
                  <div className="leading-tight">{branch.name}</div>
                  <div className={`text-[10px] font-medium ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>
                    {branch.type} • {branch.pincode}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Main Map Card */}
        <div className="bg-slate-50 rounded-3xl border border-slate-200 overflow-hidden shadow-xl">
          {/* Map Utility Toolbar */}
          <div className="bg-slate-900 text-white px-5 sm:px-8 py-4 flex flex-wrap items-center justify-between gap-4 border-b border-slate-800">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center border border-sky-400/30">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <h3 className="font-heading font-bold text-base sm:text-lg text-white">
                    {currentBranch.name}
                  </h3>
                  <span className="bg-amber-400/20 text-amber-300 text-[10px] font-bold px-2.5 py-0.5 rounded-full border border-amber-400/30 uppercase">
                    {currentBranch.type}
                  </span>
                </div>
                <p className="text-xs text-slate-400">
                  {currentBranch.address}, {currentBranch.city}
                </p>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex items-center flex-wrap gap-2 text-xs">
              {/* Toggle Map / Satellite */}
              <div className="flex bg-slate-800 p-1 rounded-xl border border-slate-700">
                <button
                  onClick={() => setMapType('m')}
                  className={`px-3 py-1.5 rounded-lg font-semibold transition ${
                    mapType === 'm' ? 'bg-sky-600 text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Map View
                </button>
                <button
                  onClick={() => setMapType('k')}
                  className={`px-3 py-1.5 rounded-lg font-semibold transition ${
                    mapType === 'k' ? 'bg-sky-600 text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Satellite
                </button>
              </div>

              {/* Get Directions Button */}
              <a
                href={currentBranch.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-3.5 py-2 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold transition shadow-sm"
              >
                <Navigation className="w-3.5 h-3.5 mr-1.5" />
                <span>Get Directions</span>
              </a>

              {/* Open in Google Maps */}
              <a
                href={currentBranch.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-slate-200 font-bold transition border border-white/20"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
              </a>
            </div>
          </div>

          {/* Grid: Google Maps Embed + Location Detail Cards */}
          <div className="grid lg:grid-cols-12 gap-0">
            {/* Embedded Live Google Map */}
            <div className="lg:col-span-8 relative h-[360px] sm:h-[440px] lg:h-[480px] bg-slate-200">
              <iframe
                title={`${currentBranch.name} Google Map Location`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://maps.google.com/maps?q=${encodeURIComponent(
                  currentBranch.mapEmbedQuery
                )}&t=${mapType}&z=16&ie=UTF8&iwloc=&output=embed`}
                className="w-full h-full"
              />

              {/* Floating Verified Coaching Card over map */}
              <div className="absolute top-3 left-3 right-3 sm:right-auto sm:max-w-sm bg-white/95 backdrop-blur-md p-3 rounded-2xl shadow-xl border border-slate-200/90 flex flex-col space-y-1.5 text-xs z-10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="font-extrabold text-slate-900 tracking-tight text-xs sm:text-sm">
                      Classes of Academia
                    </span>
                  </div>
                  <span className="bg-sky-100 text-sky-800 text-[10px] font-bold px-2 py-0.5 rounded-full">
                    Coaching Institute
                  </span>
                </div>
                <div className="flex items-center space-x-2 text-[11px] text-slate-600">
                  <span className="text-amber-500 font-bold flex items-center">
                    ★ 4.9
                  </span>
                  <span>(120+ Student Reviews)</span>
                  <span>•</span>
                  <span className="font-semibold text-slate-800">{currentBranch.type}</span>
                </div>
                <p className="text-[11px] text-slate-500 line-clamp-1">
                  {currentBranch.address}, {currentBranch.city}
                </p>
                <div className="flex items-center space-x-2 pt-1">
                  <a
                    href={currentBranch.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[11px] font-bold text-white bg-sky-600 hover:bg-sky-700 px-2.5 py-1 rounded-lg shadow-xs transition"
                  >
                    <Navigation className="w-3 h-3 mr-1" />
                    Directions
                  </a>
                  <a
                    href={currentBranch.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[11px] font-semibold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 px-2.5 py-1 rounded-lg border border-slate-200 transition"
                  >
                    <span>Open in Maps</span>
                    <ExternalLink className="w-2.5 h-2.5 ml-1" />
                  </a>
                </div>
              </div>
            </div>

            {/* Location Details Sidebar */}
            <div className="lg:col-span-4 p-6 sm:p-7 bg-white flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-slate-200 space-y-6">
              <div className="space-y-5">
                <div>
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-sky-700 bg-sky-50 px-2.5 py-1 rounded-md border border-sky-200 inline-block mb-2">
                    Verified Institute Address
                  </span>
                  <h4 className="font-heading font-bold text-lg text-slate-900">
                    {currentBranch.address}
                  </h4>
                  <p className="text-xs text-slate-500 mt-1">
                    {currentBranch.landmark}
                  </p>
                  <p className="text-xs text-slate-600 font-semibold">
                    {currentBranch.city} – Pin: {currentBranch.pincode}
                  </p>
                </div>

                {/* Transit & Commute Information */}
                <div className="space-y-3 pt-3 border-t border-slate-100 text-xs">
                  <div className="flex items-start">
                    <Train className="w-4 h-4 text-sky-600 mr-2.5 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-slate-900">Nearest Metro:</span>
                      <p className="text-slate-600 text-[11px]">{currentBranch.metroStation}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Clock className="w-4 h-4 text-amber-500 mr-2.5 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-slate-900">Visiting Hours:</span>
                      <p className="text-slate-800 font-semibold text-[11px]">4:00 PM – 7:30 PM (Monday – Saturday)</p>
                      <p className="text-amber-800 text-[10px] bg-amber-50 border border-amber-200/70 rounded px-1.5 py-0.5 mt-1 inline-block">
                        <strong>Sunday Note:</strong> Closed on Sundays (Classes will be held on Sundays during exam periods)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Car className="w-4 h-4 text-emerald-600 mr-2.5 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-slate-900">Student & Visitor Parking:</span>
                      <p className="text-slate-600 text-[11px]">Dedicated two-wheeler and four-wheeler parking space outside center premises.</p>
                    </div>
                  </div>
                </div>

                {/* Campus Facilities List */}
                <div className="pt-3 border-t border-slate-100">
                  <span className="text-[11px] font-bold uppercase text-slate-400 tracking-wider block mb-2">
                    Campus Highlights:
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    {currentBranch.features.map((feat, i) => (
                      <li key={i} className="flex items-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-600 mr-2 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 pt-4 border-t border-slate-100">
                <button
                  onClick={() => handleCopyAddress(currentBranch)}
                  className="w-full py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs transition flex items-center justify-center space-x-1.5 cursor-pointer"
                >
                  {copiedId === currentBranch.id ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700">Address Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-600" />
                      <span>Copy Full Campus Address</span>
                    </>
                  )}
                </button>

                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={`tel:${currentBranch.primaryPhone.replace(/[^0-9]/g, '')}`}
                    className="py-2.5 px-2 rounded-xl bg-sky-50 hover:bg-sky-100 text-sky-800 border border-sky-200 font-bold text-xs transition flex items-center justify-center space-x-1"
                  >
                    <Phone className="w-3.5 h-3.5 text-sky-600" />
                    <span>Call Center</span>
                  </a>

                  <a
                    href={currentBranch.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition flex items-center justify-center space-x-1"
                  >
                    <Navigation className="w-3.5 h-3.5 text-amber-400" />
                    <span>Navigate</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Both Campuses Quick Summary Grid */}
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          {BRANCHES_DATA.map((branch) => (
            <div
              key={branch.id}
              className="bg-white p-6 rounded-3xl border border-slate-200/90 shadow-sm flex flex-col justify-between hover:shadow-md transition"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-sky-700 bg-sky-50 px-2.5 py-0.5 rounded-full border border-sky-100">
                    {branch.type}
                  </span>
                  <a
                    href={branch.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-sky-600 hover:text-sky-800 inline-flex items-center"
                  >
                    <span>Google Maps</span>
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </div>
                <h4 className="font-heading font-bold text-base text-slate-900">{branch.name}</h4>
                <p className="text-xs text-slate-600 mt-1">{branch.address}, {branch.landmark}</p>
                <p className="text-xs text-slate-500 font-medium">{branch.city} – {branch.pincode}</p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <div className="flex items-center space-x-1.5">
                  <a
                    href={`tel:${branch.primaryPhone.replace(/[^0-9]/g, '')}`}
                    className="p-2 rounded-xl bg-sky-50 hover:bg-sky-100 text-sky-700 font-bold transition flex items-center space-x-1"
                    title="Call Campus Helpline"
                  >
                    <Phone className="w-3.5 h-3.5 text-sky-600" />
                    <span className="text-[11px]">Call</span>
                  </a>
                  <a
                    href="https://wa.me/918800020688?text=Hello%20Classes%20of%20Academia%2C%20I%20would%20like%20to%20inquire%20about%20admissions."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 font-bold transition flex items-center space-x-1"
                    title="WhatsApp Campus"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-[11px]">WhatsApp</span>
                  </a>
                </div>
                <a
                  href={branch.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-sky-700 hover:text-sky-900 inline-flex items-center"
                >
                  <Navigation className="w-3 h-3 mr-1 text-sky-600" />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
