import Image from "next/image";
import Link from "next/link";

export default function RadioPage() {
  return (
    <div className="px-4 py-12">
      <div className="max-w-2xl mx-auto space-y-6">
        <h1 className="text-4xl font-bold text-center">Radio</h1>

        {/* Circular image centered below the title */}
        <div className="flex justify-center">
          <Image
            src="/images/wartRadio.png"
            alt="WART Radio Logo"
            width={160}
            height={160}
            className="rounded-full shadow-lg"
          />
        </div>

        <div className="flex flex-col items-center text-lg text-[#C3CCD6] leading-relaxed space-y-4">
          <p>
            Volunteer DJ and host of the “Wednesday Wakeup” (Wed 8am–9am ET)
          </p>

          <p className="text-center">
            The show broadcasts on <strong>WART 95.5FM</strong> – The Voice of
            Madison County. <br />
            Tune in locally, stream online at{" "}
            <a
              href="https://wartfm.org"
              className="underline text-indigo-400 hover:text-indigo-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              wartfm.org
            </a>
            , or listen via the mobile app.
          </p>

          <p className="font-semibold text-[#E4E7EA] text-center">
            Listen on your device:
          </p>

          <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 w-full justify-center">
            <a
              href="https://play.google.com/store/apps/details?id=com.nobexinc.wls_4425973405.rc"
              className="bg-white text-black font-medium px-6 py-2 rounded hover:bg-gray-200 transition text-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Play
            </a>
            <a
              href="https://itunes.apple.com/us/app/wart-fm-955/id1483025647?mt=8"
              className="bg-white text-black font-medium px-6 py-2 rounded hover:bg-gray-200 transition text-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              Apple App Store
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
