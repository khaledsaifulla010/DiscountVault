import logo from "../../assets/logo1.png";

const Footer = () => {
  return (
    <div className="">
      <div className="bg-black text-white p-10 rounded-xl lg:ml-0 ml-12 lg:w-full md:w-[768px] w-[640px] ">
        <footer className="footer grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <aside className="flex flex-col items-start lg:ml-0 ml-28">
            <div className="flex gap-2">
              <img className="w-7" src={logo} alt="DiscountVault logo" />
              <h1 className="text-3xl font-bold">DiscountVault</h1>
            </div>
            <p className="font-semibold text-base">
              DiscountVault Industries Ltd.
              <br />
              Unlock Savings, Secure Your Deals!
            </p>
          </aside>

          <nav className="flex flex-col items-start lg:ml-0 ml-52">
            <h6 className="font-bold text-lg text-slate-300">Services</h6>
            <a className="link link-hover text-base">Branding</a>
            <a className="link link-hover text-base">Design</a>
            <a className="link link-hover text-base">Marketing</a>
            <a className="link link-hover text-base">Advertisement</a>
          </nav>

          {/* Third Section: Company */}
          <nav className="flex flex-col items-start lg:ml-0 ml-52">
            <h6 className="font-bold text-lg text-slate-300">Company</h6>
            <a className="link link-hover text-base">About us</a>
            <a className="link link-hover text-base">Contact</a>
            <a className="link link-hover text-base">Jobs</a>
            <a className="link link-hover text-base">Press kit</a>
          </nav>

          {/* Fourth Section: Legal */}
          <nav className="flex flex-col items-start lg:ml-0 ml-52">
            <h6 className="font-bold text-lg text-slate-300">Legal</h6>
            <a className="link link-hover text-base">Terms of use</a>
            <a className="link link-hover text-base">Privacy policy</a>
            <a className="link link-hover text-base">Cookie policy</a>
          </nav>

          {/* Social Links */}
          <nav className="flex flex-col items-start lg:ml-0 ml-52">
            <h6 className="font-bold text-lg text-slate-300">Social</h6>
            <div className="grid grid-flow-col gap-4">
              <a href="#" aria-label="Twitter">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </a>
              <a href="#" aria-label="YouTube">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </a>
            </div>
          </nav>
        </footer>

        {/* Divider */}
        <div className="divider divider-neutral"></div>

        {/* Copyright Text */}
        <div>
          <p className="text-center text-base">
            &copy; All Rights Reserved DiscountVault Industries Ltd.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
