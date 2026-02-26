"use client";

import React, { useState } from "react";
import "./Header1.css"

export default function Header1(){
  const [menuOpen, setMenuOpen] = useState(false);
  
  const navbar=[
    {name:"دوره های آموزشی" , path:""},
    {name:"شروع برنامه نویسی" , path:""},
    {name:"مقالات" , path:""},
    {name:"درباره ما" , path:""},
  ]
  
  return(
    <div>
      <header className="header">
        {/* دسکتاپ ویو - سمت چپ */}
        <div className="div1 desktop-only">
          <button className="login-btn">ورود/ثبت نام</button>
          <img width="48" height="48" src="https://img.icons8.com/pulsar-line/48/shopping-cart.png" alt="shopping-cart"/>
        </div>

        {/* دسکتاپ ویو - لوگو سمت راست */}
        <div className="div3 desktop-only">
          <img width="150" height="150" src="https://sabzlearn.ir/sabzlearn-logo.svg" alt="logo" />
        </div>

        {/* منوی دسکتاپ - وسط */}
        <div className="div2 desktop-menu">
          {navbar.map((n, index) => {
            return(
              <p key={index}>{n.name}</p>
            )  
          })}
        </div>

        {/* موبایل هدر */}
        <div className="mobile-header">
          {/* منوی همبرگر سمت چپ */}
          <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </button>

          {/* لوگو وسط */}
          <div className="mobile-logo">
            <img width="100" height="100" src="https://sabzlearn.ir/sabzlearn-logo.svg" alt="logo" />
          </div>

          {/* سبد خرید سمت راست */}
          <img className="mobile-cart" width="40" height="40" src="https://img.icons8.com/pulsar-line/48/shopping-cart.png" alt="shopping-cart"/>
        </div>
      </header>

      {/* منوی موبایل */}
      <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
        <button className="close-menu" onClick={() => setMenuOpen(false)}>×</button>
        <button className="login-btn mobile-login">ورود/ثبت نام</button>
        {navbar.map((n, index) => {
          return(
            <a key={index} className="mobile-menu-item">{n.name}</a>
          )  
        })}
      </div>
    </div>
  )
}