import React from 'react';
import '../../css/toggle.css';


const Navbar = () => {
  const SetDarkMode = () => {
    document.querySelector("body").setAttribute('data-theme', 'dark');
  };
  
  const SetLightMode = () => {
    document.querySelector("body").setAttribute('data-theme', 'light');
  };

  SetLightMode();

  const toggleTheme = (e) => {
    if (e.target.checked) SetDarkMode();
    else SetLightMode();
  };

  const selectedTheme = localStorage.getItem("selectedTheme");

  if (selectedTheme === "light") {
    SetLightMode();
  }

  return (
    <div className='Navbar text-white relative'>
      <header className='header relative z-10'>
        <div className='header-content flex w-100 mt-12 mb-12 pl-4 pr-6'>
          <div className="logo-container flex flex-row-reverse items-center">
            <a href='#home' className='logo text-white sm:text-base md:text-lg lg:text-xl xl:text-3xl text-[--text]'>MASI</a>
            <svg width="40" height="23" viewBox="0 0 90 71" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white ml-2">
              <rect x="6" y="10" width="35" height="52" fill="#000000"></rect>
              <path d="M0 0V70.338H89.521V0H0ZM19.184 53.481L12.79 47.085L19.184 40.691L25.578 34.2971C25.578 34.2971 21.681 30.4 19.184 27.903C16.687 25.406 12.79 21.509 12.79 21.509L15.987 18.3115L19.184 15.114L28.7755 24.7055L38.367 34.2971L28.7755 43.889L19.184 53.481Z" fill="aliceblue"></path>
              <rect className="blinkit" x="45" y="44" width="29" height="8" fill="#000000"></rect>
            </svg>
          </div>
          <nav className="navbar flex-end ml-auto z-10">
            <ul className='nav-list'>
              <li className='nav-item flex items-center'>
                <button href='#' className='text-black pt-2 pb-2 pl-5 border-[--text] text-[--text] pr-5 bg-white border-2 rounded-md'>
                  Contact
                </button>
                <label className="switch ml-4">
                  <input
                    className='dark_mode'
                    type="checkbox"
                    id='darkmodetoggle'
                    onChange={toggleTheme}
                  />
                  <span className="slider"></span>
                </label>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
