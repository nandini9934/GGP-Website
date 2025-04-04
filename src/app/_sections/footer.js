"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <div className="lg:bg-peach">
      <section className="container mx-auto">
        <div className="relative flex flex-col items-center justify-center h-[550px] bg-peach">
          <div className="text-center">
            <h1 className="text-5xl font-serif text-orange-500">
              Let’s Make this happen
            </h1>
            <h2 className="text-8xl text-orange-500 font-serif mt-4">
              Together
            </h2>
          </div>
          {/* <div className="absolute bottom-0 w-full bg-[#f27c21] h-[100px] rounded-t-full">
            <div className="absolute bottom-4 w-full flex justify-center">
              <ul>
                <li>
                  <Link
                    href={"/cancellation-refund"}
                    className="text-sm text-white font-bold"
                  >Refund Policy
                  </Link>
                </li>

                <li>
                  <Link
                    href={"/shipping-exchange"}
                    className="text-sm text-white font-bold"
                  >Exchange Policy
                  </Link>
                </li>

                <li>
                  <Link
                    href={"/terms"}
                    className="text-sm text-white font-bold"
                  >Terms & conditions
                  </Link>
                </li>
              </ul>

              <p className="text-sm text-white font-bold">©2024 Good Gut Project. All Rights Reserved.</p>
            </div>
          </div> */}

          <div className="absolute bottom-0 w-full bg-[#f27c21] h-[120px] rounded-t-full flex flex-col justify-center items-center">
            <ul className="flex flex-col md:flex-row items-center gap-x-6 gap-y-2 md:gap-y-0">
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-sm text-white font-bold  opacity-90 hover:opacity-100 underline transition-opacity"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/cancellation-refund"
                  className="text-sm text-white font-bold opacity-90 hover:opacity-100 underline "
                >
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/shipping-exchange"
                  className="text-sm text-white font-bold opacity-90 hover:opacity-100 underline "
                >
                  Exchange Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-white font-bold opacity-90 hover:opacity-100 underline "
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
            <p className="text-sm text-white font-bold mt-2 text-center">
              ©2024 Good Gut Project. All Rights Reserved.
            </p>
            <p className="text-sm text-white font-bold mt-2 text-center">
              TKSV FOOD HEALTH SOLUTIONS PRIVATE LIMITED
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
