import { useClickAway } from "react-use";
import { useRef, useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import { HomeOutlined, UserOutlined, BulbOutlined, PhoneOutlined } from '@ant-design/icons';

export const NavMobile = () => {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);

  useClickAway(ref, () => setOpen(false));

  return (
    <div ref={ref} className="nav-mobile">
      <Hamburger toggled={isOpen} size={20} toggle={setOpen} />
      
      <div className={`nav-menu ${isOpen ? 'show' : ''}`}>
        <div className="nav-list">
          <a href="#home">Home</a>
          <hr />
          <a href="#about">About</a>
          <hr />
          <a href="#experience">Experience</a>
          <hr />
          <a href="#contact">Contact</a>  
        </div>
      </div>
    </div>
  );
};