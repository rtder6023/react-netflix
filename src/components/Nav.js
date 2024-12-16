import React, { useEffect, useState } from "react";
import "./Nav.css";
import SearchPage from "../pages/SearchPage";
import { useNavigate } from "react-router-dom";

export default function Nav() {
  const [show, setShow] = useState(false);
  const [searchValue, setsearchValue] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  const handleChange = (e) => {
    setsearchValue(e.target.value);
    navigate(`/search?q=${e.target.value}`);
  };
  return (
    <nav className={`nav ${show && "nav__black"}`}>
      <img
        alt="Netflix logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/200px-Netflix_2015_logo.svg.png"
        className="nav__logo"
        onClick={() => window.location.reload()}
      />

      <input
        value={searchValue}
        onChange={handleChange}
        className="nav__input"
        type="text"
        placeholder="영화를 검색해주세요."
      />
      <img
        alt="User logged"
        src="data:image/png;base64,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"
        className="nav__avatar"
      />
    </nav>
  );
}
