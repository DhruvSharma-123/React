import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-white">

      {/* HERO SECTION */}
      <section className="min-h-screen flex items-center justify-between px-8 md:px-16 lg:px-24">

        {/* LEFT CONTENT */}
        <div className="w-full md:w-1/2 pr-8">
          <p className="text-sm font-semibold text-orange-500 mb-4">
            FROM INBOX TO INVOICE
          </p>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight text-black">
            AI Workforce.
            <br />
            Built for Freight Teams.
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-xl">
            They read, write and act across TMS, email and chat so your staff
            don't have to.
          </p>

          <button className="mt-8 px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg">
            CONTACT US
          </button>
        </div>

        {/* RIGHT VIDEO */}
        <div className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0">
          <div className="w-full max-w-[600px] aspect-video overflow-hidden rounded-3xl shadow-xl bg-black">

           <video
  src="/right.mp4"
  autoPlay
  muted
  loop
  playsInline
  controls
  className="w-full h-full object-cover"
/>

          </div>
        </div>

      </section>

    </div>
  );
}

export default App;