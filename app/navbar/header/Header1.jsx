"use client";
import React, { useState } from "react";
import "./hedaer.css";

export function Header1() {
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const [activeCourseId, setActiveCourseId] = useState(null);

  // موبایل (Drawer)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false);
  const [mobileActiveCourseId, setMobileActiveCourseId] = useState(null);

  const courses = [
    {
      id: 1,
      name: "فرانت اند",
      children: [
        { id: 101, name: "HTML/CSS" },
        { id: 102, name: "JavaScript" },
        { id: 103, name: "React" },
        { id: 104, name: "Next.js" },
      ],
    },
    {
      id: 2,
      name: "بک اند",
      children: [
        { id: 201, name: "Node.js" },
        { id: 202, name: "Express" },
        { id: 203, name: "MongoDB" },
      ],
    },
  ];

  // دسکتاپ dropdown
  const toggleCourses = () => {
    setIsCoursesOpen((prev) => {
      const next = !prev;
      if (!next) setActiveCourseId(null);
      return next;
    });
  };

  const toggleSubmenu = (id) => {
    setActiveCourseId((prev) => (prev === id ? null : id));
  };

  // موبایل drawer
  const openMobileMenu = () => setIsMobileMenuOpen(true);
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setMobileCoursesOpen(false);
    setMobileActiveCourseId(null);
  };

  const toggleMobileCourses = () => {
    setMobileCoursesOpen((prev) => {
      const next = !prev;
      if (!next) setMobileActiveCourseId(null);
      return next;
    });
  };

  const toggleMobileSubmenu = (id) => {
    setMobileActiveCourseId((prev) => (prev === id ? null : id));
  };

  return (
    <>
      <div className="header1">
        {/* دسکتاپ: دکمه‌ها سمت چپ */}
        <div className="div1 desktopOnly">
          <button className="but">ورود | عضویت</button>
          <button className="but">سبد خرید</button>
          <button className="but">شب | روز</button>
        </div>

        <div className="div2" />

        {/* دسکتاپ: لینک‌ها سمت راست + لوگو */}
        <div className="div3 desktopOnly">
          <p className="linkText">مشاوره برنامه نویسی</p>
          <p className="linkText">مقالات</p>
          <p className="linkText">همه دوره ها</p>

          <nav className="nav">
            <ul className="menu">
              <li className="menuItem dropdown">
         
                  <p className="dropdownBtn linkText" onClick={toggleCourses} >دوره های آموزشی</p>
            

                {isCoursesOpen && (
                  <div className="dropdownMenu">
                    {courses.map((course) => (
                      <div className="dropdownItem" key={course.id}>
                        <button
                          className="dropdownItemBtn"
                          onClick={() => toggleSubmenu(course.id)}
                          type="button"
                        >
                          {course.name}
                        </button>

                        {activeCourseId === course.id && (
                          <div className="subMenu">
                            {course.children.map((child) => (
                              <div className="subMenuItem" key={child.id}>
                                {child.name}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </li>
            </ul>
          </nav>

          <img
            className="img"
            alt="logo"
            src="https://sabzlearn.ir/wp-content/uploads/2025/07/erasebg-transformed-1024x1024.png"
          />
        </div>

        {/* موبایل: هدر سه‌تایی (راست همبرگر - وسط لوگو - چپ سبد خرید) */}
        <div className="mobileBar mobileOnly">
          <button className="iconBtn" onClick={openMobileMenu} type="button" aria-label="menu">
            <span className="hamburger">
              <span />
              <span />
              <span />
            </span>
          </button>

          <img
            className="img mobileLogo"
            alt="logo"
            src="https://sabzlearn.ir/wp-content/uploads/2025/07/erasebg-transformed-1024x1024.png"
          />

          <button className="iconBtn" type="button" aria-label="cart">
            🛒
          </button>
        </div>
      </div>

      {/* Drawer موبایل */}
      {isMobileMenuOpen && (
        <>
          <div className="drawerOverlay" onClick={closeMobileMenu} />
          <aside className="drawer" dir="rtl">
            <div className="drawerHeader">
              <span className="drawerTitle">منو</span>
              <button className="iconBtn" onClick={closeMobileMenu} type="button" aria-label="close">
                ✕
              </button>
            </div>

            <div className="drawerBody">
              <button className="drawerItem" type="button">ورود | عضویت</button>

              <button className="drawerItem" onClick={toggleMobileCourses}>
                دوره ها
                <span className="chev">{mobileCoursesOpen ? "▲" : "▼"}</span>
              </button>

              {mobileCoursesOpen && (
                <div className="drawerSub">
                  {courses.map((course) => (
                    <div key={course.id} className="drawerSubGroup">
                      <button
                        type="button"
                        className="drawerSubItem"
                        onClick={() => toggleMobileSubmenu(course.id)}
                      >
                        {course.name}
                        <span className="chev">{mobileActiveCourseId === course.id ? "▲" : "▼"}</span>
                      </button>

                      {mobileActiveCourseId === course.id && (
                        <div className="drawerSubSub">
                          {course.children.map((child) => (
                            <button  key={child.id} type="button" className="drawerSubSubItem drawerSubSub">
                              {child.name}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              <button className="drawerItem" type="button">مقالات</button>
              <button className="drawerItem" type="button">مشاوره برنامه نویسی</button>
              <button className="drawerItem" type="button">شب | روز</button>
              <button className="drawerItem" type="button">سبد خرید</button>
            </div>
          </aside>
        </>
      )}
    </>
  );
}

export default Header1;
