import React from "react";

export const Loader = () => {
  return (
    <div className="flex gap-10">
      <div className="flex items-center justify-center">
        <div
          className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        >
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
      </div>
      <div className="relative snap-y snap-mandatory overflow-y-auto scroll-smooth">
        <div className="group flex  w-full snap-start items-center justify-center">
          <div>
            <div className="overflow-hidden font-clash text-2xl font-medium">
              <div className="group-hover/wrap:translate-y-full group-hover:animate-reveal">
                Loading
              </div>
            </div>
            <div className="overflow-hidden font-clash text-4xl font-medium">
              <div className="group-hover/wrap:translate-y-full group-hover:animate-reveal group-hover:animation-delay-300">
                Please Wait
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
