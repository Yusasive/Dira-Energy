import React from "react";
import logoIcon from "../assets/dira-energy.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section>
      <div className="flex flex-row justify-between bg-PrefooterBg py-4 px-6 lg:px-16">
        <div>
          <a href="/" className="flex items-center">
            <img src={logoIcon} alt="Logo" className="mr-2 w-24" />
          </a>
        </div>

        <div className="flex mt-6 -mx-2">
          <a
            href="/"
            className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
            aria-label="LinkedIn">
            <svg
              width="20"
              height="23"
              viewBox="0 0 20 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M5.06892 19.1899H1.25447V6.92627H5.06892V19.1899ZM3.14119 5.28564C1.95173 5.28564 0.96736 4.26025 0.96736 3.02979C0.96736 1.84033 1.95173 0.855957 3.14119 0.855957C4.37166 0.855957 5.35603 1.84033 5.35603 3.02979C5.35603 4.26025 4.37166 5.28564 3.14119 5.28564ZM19.3013 19.1899H15.5279V13.2427C15.5279 11.8071 15.4869 10.0024 13.5181 10.0024C11.5494 10.0024 11.2623 11.52 11.2623 13.1196V19.1899H7.44783V6.92627H11.0982V8.60791H11.1392C11.6724 7.66455 12.9029 6.63916 14.7486 6.63916C18.6041 6.63916 19.3424 9.18213 19.3424 12.4634V19.1899H19.3013Z"
                fill="white"
              />
              <path
                d="M0.96736 21.2407H19.3424V22.2661H0.96736V21.2407Z"
                fill="white"
              />
            </svg>
          </a>
          <a
            href="/"
            className="mx-4 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
            aria-label="Facebook">
            <svg
              width="14"
              height="23"
              viewBox="0 0 14 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12.0611 12.6274H8.98495V21.8149H4.88339V12.6274H1.52011V8.854H4.88339V5.94189C4.88339 2.66064 6.85214 0.814941 9.84628 0.814941C11.2818 0.814941 12.7994 1.10205 12.7994 1.10205V4.34229H11.1178C9.47714 4.34229 8.98495 5.32666 8.98495 6.39307V8.854H12.6353L12.0611 12.6274Z"
                fill="white"
              />
              <path
                d="M0.617765 21.2407H13.7428V22.2661H0.617765V21.2407Z"
                fill="white"
              />
            </svg>
          </a>

          <a
            href="/"
            className="pl-8 mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
            aria-label="Instagram">
            <svg
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10.1549 4.59814C12.7388 4.59814 14.8717 6.73096 14.8717 9.31494C14.8717 11.9399 12.7388 14.0317 10.1549 14.0317C7.52986 14.0317 5.43806 11.9399 5.43806 9.31494C5.43806 6.73096 7.52986 4.59814 10.1549 4.59814ZM10.1549 12.3911C11.8365 12.3911 13.19 11.0376 13.19 9.31494C13.19 7.6333 11.8365 6.27979 10.1549 6.27979C8.4322 6.27979 7.07869 7.6333 7.07869 9.31494C7.07869 11.0376 8.47322 12.3911 10.1549 12.3911ZM16.1431 4.43408C16.1431 5.04932 15.651 5.5415 15.0357 5.5415C14.4205 5.5415 13.9283 5.04932 13.9283 4.43408C13.9283 3.81885 14.4205 3.32666 15.0357 3.32666C15.651 3.32666 16.1431 3.81885 16.1431 4.43408ZM19.2603 5.5415C19.3424 7.05908 19.3424 11.6118 19.2603 13.1294C19.1783 14.606 18.8502 15.8774 17.7838 16.9849C16.7174 18.0513 15.4049 18.3794 13.9283 18.4614C12.4107 18.5435 7.85798 18.5435 6.34041 18.4614C4.86384 18.3794 3.59236 18.0513 2.48494 16.9849C1.41853 15.8774 1.09041 14.606 1.00838 13.1294C0.926344 11.6118 0.926344 7.05908 1.00838 5.5415C1.09041 4.06494 1.41853 2.75244 2.48494 1.68604C3.59236 0.619629 4.86384 0.291504 6.34041 0.209473C7.85798 0.127441 12.4107 0.127441 13.9283 0.209473C15.4049 0.291504 16.7174 0.619629 17.7838 1.68604C18.8502 2.75244 19.1783 4.06494 19.2603 5.5415ZM17.2916 14.729C17.7838 13.5396 17.6607 10.6685 17.6607 9.31494C17.6607 8.00244 17.7838 5.13135 17.2916 3.90088C16.9635 3.12158 16.3482 2.46533 15.5689 2.17822C14.3385 1.68604 11.4674 1.80908 10.1549 1.80908C8.80134 1.80908 5.93025 1.68604 4.7408 2.17822C3.92048 2.50635 3.30525 3.12158 2.97713 3.90088C2.48494 5.13135 2.60798 8.00244 2.60798 9.31494C2.60798 10.6685 2.48494 13.5396 2.97713 14.729C3.30525 15.5493 3.92048 16.1646 4.7408 16.4927C5.93025 16.9849 8.80134 16.8618 10.1549 16.8618C11.4674 16.8618 14.3385 16.9849 15.5689 16.4927C16.3482 16.1646 17.0045 15.5493 17.2916 14.729Z"
                fill="white"
              />
              <path
                d="M0.96736 19.2407H19.3424V20.2661H0.96736V19.2407Z"
                fill="white"
              />
            </svg>
          </a>

          <a
            href="/"
            className="mx-4 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
            aria-label="Youtube">
            <svg
              width="24"
              height="20"
              viewBox="0 0 24 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M22.8802 2.94189C23.3724 4.66455 23.3724 8.35596 23.3724 8.35596C23.3724 8.35596 23.3724 12.0063 22.8802 13.77C22.6342 14.7544 21.8549 15.4927 20.9115 15.7388C19.1478 16.1899 12.1752 16.1899 12.1752 16.1899C12.1752 16.1899 5.1615 16.1899 3.39783 15.7388C2.45447 15.4927 1.67517 14.7544 1.42908 13.77C0.936891 12.0063 0.936891 8.35596 0.936891 8.35596C0.936891 8.35596 0.936891 4.66455 1.42908 2.94189C1.67517 1.95752 2.45447 1.17822 3.39783 0.932129C5.1615 0.439941 12.1752 0.439941 12.1752 0.439941C12.1752 0.439941 19.1478 0.439941 20.9115 0.932129C21.8549 1.17822 22.6342 1.95752 22.8802 2.94189ZM9.8783 11.6782L15.7025 8.35596L9.8783 5.03369V11.6782Z"
                fill="white"
              />
              <path
                d="M0.362672 18.2407H23.9877V19.2661H0.362672V18.2407Z"
                fill="white"
              />
            </svg>
          </a>
        </div>
      </div>

      <div className="bg-FooterBg">
        <div className="container px-6 pt-6 mx-auto ">
          <div className="lg:flex">
            <div className="mt-6 lg:mt-0 lg:flex-1">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <div>
                  <h3 className="text-white uppercase text-base font-bold mb-4">
                    ABOUT
                  </h3>
                  <Link
                    to="/"
                    className="block mt-2 text-sm text-white font-normal hover:underline">
                    Home
                  </Link>
                  <Link
                    to="/about"
                    className="block mt-2 text-sm text-white font-normal hover:underline">
                    About us
                  </Link>
                  <Link
                    to="/projects"
                    className="block mt-2 text-sm text-white font-normal hover:underline">
                    Projects
                  </Link>
                  <Link
                    to="/"
                    className="block mt-2 text-sm text-white font-normal hover:underline">
                    Contact us
                  </Link>
                  <Link
                    to="/"
                    className="block mt-2 text-sm text-white font-normal hover:underline">
                    Corperate Social Responsibility
                  </Link>
                </div>

                <div>
                  <h3 className="text-white uppercase text-base font-bold mb-4">
                    TECHNOLOGY
                  </h3>
                  <Link
                    to="/"
                    className="block mt-2 text-sm text-white font-normal hover:underline">
                    Residential Solar Solutions
                  </Link>
                  <Link
                    to="/"
                    className="block mt-2 text-sm text-white font-normal hover:underline">
                    Solar Powered Boreholes
                  </Link>
                  <Link
                    to="/"
                    className="block mt-2 text-sm text-white font-normal hover:underline">
                    Smart Grid Technology
                  </Link>
                  <Link
                    to="/"
                    className="block mt-2 text-sm text-white font-normal hover:underline">
                    Commercial and Industrial Solutions
                  </Link>
                  <Link
                    to="/"
                    className="block mt-2 text-sm text-white font-normal hover:underline">
                    Community Solar Projects
                  </Link>
                  <Link
                    to="/"
                    className="block mt-2 text-sm text-white font-normal hover:underline">
                    Solar Street light Solutions
                  </Link>
                </div>

                <div>
                  <h3 className="text-white uppercase text-base font-bold mb-4">
                    BUSINESS LINE
                  </h3>
                  <Link
                    to="/"
                    className="block mt-2 text-sm text-white font-normal hover:underline">
                    Grid-Scale Power
                  </Link>
                  <Link
                    to="/"
                    className="block mt-2 text-sm text-white font-normal hover:underline">
                    Distribution-Scale Power
                  </Link>
                  <Link
                    to="/"
                    className="block mt-2 text-sm text-white font-normal hover:underline">
                    Onsite Solution
                  </Link>
                  <Link
                    to="/"
                    className="block mt-2 text-sm text-white font-normal hover:underline">
                    Asset Optimization
                  </Link>
                </div>

                <div>
                  <h3 className="text-white uppercase text-base font-bold mb-4">
                    MORE
                  </h3>
                  <Link
                    to="/"
                    className="block mt-2 text-sm text-white font-normal hover:underline">
                    Landowners
                  </Link>
                  <Link
                    to="/"
                    className="block mt-2 text-sm text-white font-normal hover:underline">
                    Projects
                  </Link>
                  <Link
                    to="/"
                    className="block mt-2 text-sm text-white font-normal hover:underline">
                    Press Releases
                  </Link>
                  <Link
                    to="/"
                    className="block mt-2 text-sm text-white font-normal hover:underline">
                    Thought Leadership
                  </Link>
                  <Link
                    to="/"
                    className="block mt-2 text-sm text-white font-normal hover:underline">
                    Blog
                  </Link>
                  <Link
                    to="/"
                    className="block mt-2 text-sm text-white font-normal hover:underline">
                    Careers
                  </Link>
                  <Link
                    to="/"
                    className="block mt-2 text-sm text-white font-normal hover:underline">
                    Contact
                  </Link>
                </div>
              </div>
              <hr className="h-px my-6 mx-4 mt-28 bg-gray-200 border-none dark:bg-gray-700" />

              <div className="flex flex-row space-x-32">
                <p className="text-center text-gray-500 dark:text-gray-400">
                  © 2024 Dira Energy
                </p>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  Privacy Policy
                </p>
              </div>
            </div>

            <div className="w-full -mx-6 lg:w-1/3">
              <div className="hidden lg:block w-4/5">
                <svg
                  width="440"
                  height="400"
                  viewBox="0 0 500 400"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M311.59 79.559C313.527 63.4167 311.132 39.858 323.867 28.7647C327.589 11.5463 354.672 15.5639 350.457 4.61411C347.847 -2.25531 335.113 1.02694 329.947 2.26452C326.055 3.20615 288.901 14.9541 274.615 16.5952L256.482 11.5284C233.165 14.6671 219.714 33.2038 206.755 47.956C195.877 60.3138 181.17 90.5446 192.873 108.66C192.221 112.606 191.566 116.564 190.909 120.533L217.4 159.185C226.538 165.732 227.749 170.601 237.587 177.058C239.622 180.116 241.631 183.138 243.676 186.196C251.747 191.487 275.44 191.577 279.449 188.107C317.598 191.694 313.473 114.345 325.598 98.2032C324.064 90.8496 317.643 83.2896 311.59 79.559ZM146.984 311.693C155.055 309.586 168.901 308.51 176.13 304.914C187.653 299.138 227.291 271.427 214.692 248.864C210.799 201.334 153.441 241.51 129.021 224.839C104.314 221.664 76.5319 174.924 69.1065 154.889C66.2009 146.971 67.4026 149.688 63.4387 143.41C63.4387 142.765 60.9098 145.599 60.9367 144.935C53.7086 153.347 54.9641 160.692 53.8341 181.21L44.077 180.6C43.4493 188.035 42.7049 192.097 39.2254 195.909C38.5169 197.173 37.7726 198.393 37.0641 199.657C30.9211 197.595 33.9881 200.554 31.495 195.388C8.74345 196.518 10.4294 219.387 -0.0361328 232.408C0.475038 275.086 84.9707 327.782 146.984 311.693ZM427.679 182.053C390.803 187.622 368.258 199.37 354.331 209.011C344.619 215.79 341.776 220.346 339.686 223.198C337.597 226.05 336.153 232.372 337.202 239.035C338.251 245.699 340.951 252.676 346.699 256.586C391.978 253.232 470.582 250.371 485.872 288.422C486.697 293.713 487.881 296.887 487.989 298.161C502.974 294.457 492.024 295.775 514.094 299.246C519.161 300.026 531.618 297.228 539.895 295.201C542.301 294.512 544.383 292.99 545.769 290.906C545.403 289.07 545.238 287.199 545.276 285.328C545.276 285.328 553.024 285.893 556.208 283.453C577.13 280.046 566.126 270.217 576.018 259.132C570.045 188.035 497.118 171.516 427.67 182.053H427.679ZM346.861 336.678C336.35 344.704 331.947 342.722 325.777 355.143C325.149 355.143 326.728 357.017 326.073 357.017C332.351 369.51 346.699 374.558 357.254 383.338C360.546 386.109 369.451 401.543 373.675 402.673C378.419 408.341 381.531 424.016 384.616 424.016C387.862 428.429 384.364 438.805 387.521 442.849C387.754 461.431 385.154 462.758 381.925 466.318C381.925 467.609 383.719 470.99 383.719 472.246C384.616 473.143 392.05 478.479 395.296 477.824C405.394 478.147 446.88 510.503 450.171 516.736C479.927 518.969 477.765 509.884 498.293 501.185C503.844 498.8 508.247 501.06 511.888 497.257C515.7 493.365 516.022 485.68 519.681 481.707C520.175 408.493 420.595 339.216 346.861 336.678ZM229.65 353.394C225.507 357.806 214.136 359.439 210.952 364.461C206.073 372.092 194.908 389.472 186.147 397.749C157.978 424.492 97.6603 437.926 67.8958 412.367C65.9587 412.511 67.0887 413.623 69.4024 420.932C71.5726 434.787 82.7377 467.269 78.6304 475.573C81.3208 484.792 84.1008 481.42 89.1318 486.523C92.6114 489.984 94.0283 499.024 97.9832 501.463C102.533 501.176 107.068 500.86 111.587 500.513C112.404 503.042 113.247 505.571 114.072 508.162L131.532 506.889C134.805 507.633 144.697 512.754 147.603 513.534C154.06 513.059 160.534 512.637 166.991 512.18C181.797 516.117 194.702 509.938 207.185 501.508C214.153 496.836 221.785 497.571 227.964 492.289C236.932 484.595 249.128 469.573 254.868 459.189C268.894 433.72 264.15 372.747 251.433 357.663C246.438 352.237 240.564 352.139 229.65 353.394Z"
                    fill="#333333"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
