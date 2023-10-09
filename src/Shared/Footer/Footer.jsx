import React from "react";

const Footer = () => {
  return (
    <footer className="bg-base-200">
      <div className="flex flex-col text-center pt-5">
        <p className="font-['olivera'] text-4xl">MOON</p>
        <p className="font-thin tracking-widest text-sm">Unlish The Beauty</p>
      </div>
      <div className="footer container mx-auto p-10 text-base-content">
        <nav>
          <header className="footer-title">Services</header>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <header className="footer-title">Company</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <header className="footer-title">Legal</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        <form>
          <header className="footer-title">Newsletter</header>
          <fieldset className="form-control w-80">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered w-full pr-16"
              />
              <button className="btn btn-neutral absolute top-0 right-0 rounded-l-none">
                Subscribe
              </button>
            </div>
          </fieldset>
        </form>
      </div>
      <div className="footer footer-center p-4 bg-gray-800 text-white">
        <aside>
          <p className="font-thin tracking-widest">Copyright © 2023 - All right reserved by Moon Jewelries Ltd</p>
        </aside>
      </div>
    </footer>
  );
};

export default Footer;
