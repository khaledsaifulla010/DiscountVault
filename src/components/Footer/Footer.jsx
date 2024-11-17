import logo from "../../assets/logo1.png";

const Footer = () => {
  return (
    <div>
      <footer className="footer bg-black text-white p-10 rounded-xl">
        <aside>
          <div className="flex gap-2">
            <img className="w-7" src={logo} />
            <h1 className="text-3xl font-bold">DiscountVault</h1>
          </div>
          <p className="font-semibold text-base">
            DiscountVault Industries Ltd.
            <br />
            Unlock Savings, Secure Your Deals!
          </p>
        </aside>
        <nav>
          <h6 className="font-bold text-lg text-slate-300">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="font-bold text-lg text-slate-300">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="font-bold text-lg text-slate-300">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
