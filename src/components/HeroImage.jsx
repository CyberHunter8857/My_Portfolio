import React from 'react';

const HeroImage = ({
  src,
  alt = 'Profile Image',
  className = '',
  sizeClass = 'h-40 w-40 sm:h-60 sm:w-60 md:h-72 md:w-72 lg:h-80 lg:w-80',
}) => {
  return (
    <div className={`inline-block ${className}`}>
      <div className="group relative inline-block">
        {/* Outer glow effect - responsive blur */}
        <div className="absolute -inset-0.5 animate-pulse rounded-full bg-gradient-to-r from-purple-600 to-blue-500 opacity-75 blur-sm transition duration-1000 group-hover:opacity-100 group-hover:duration-200 sm:-inset-1 sm:blur-md"></div>

        {/* Main frame container - responsive padding */}
        <div className="relative rounded-full bg-gradient-to-r from-purple-500 to-blue-500 p-0.5 sm:p-1">
          <div className="rounded-full bg-gray-900/90 p-1.5 backdrop-blur-sm sm:p-2 md:p-3">
            {/* Image container */}
            <div
              className={`relative overflow-hidden rounded-full ${sizeClass}`}
            >
              {src ? (
                <img
                  src={src}
                  alt={alt}
                  className={`transform object-cover transition-transform duration-500 group-hover:scale-105 ${sizeClass}`}
                />
              ) : (
                <div
                  className={`flex items-center justify-center bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 ${sizeClass}`}
                >
                  <div className="text-center">
                    {/* Responsive icon size */}
                    <div className="mx-auto mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-blue-500 sm:mb-3 sm:h-12 sm:w-12 md:mb-4 md:h-16 md:w-16">
                      <svg
                        className="h-4 w-4 text-white sm:h-6 sm:w-6 md:h-8 md:w-8"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        ></path>
                      </svg>
                    </div>
                    {/* Responsive text */}
                    <p className="px-1 text-xs text-gray-400 sm:text-sm">
                      Your Photo Here
                    </p>
                  </div>
                </div>
              )}

              {/* Scanning line effect */}
              <div className="absolute inset-0 h-0.5 animate-pulse bg-gradient-to-b from-transparent via-blue-400/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:h-1"></div>
            </div>
          </div>
        </div>

        {/* Floating particles effect - responsive positioning and size */}
        <div className="absolute -top-1 -right-1 h-2 w-2 animate-ping rounded-full bg-blue-400 opacity-75 sm:-top-2 sm:-right-2 sm:h-3 sm:w-3"></div>
        <div className="absolute -bottom-1 -left-1 h-1.5 w-1.5 animate-ping rounded-full bg-purple-400 opacity-75 delay-300 sm:-bottom-2 sm:-left-2 sm:h-2 sm:w-2"></div>
      </div>
    </div>
  );
};

export default HeroImage;
