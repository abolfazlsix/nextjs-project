"use client";
import React, { useEffect, useRef, useState } from "react";
import "./Carddor.css";
import "./Doretaraf.css";

export default function Doretaraf() {
  const [list] = useState([
    /* ...همون آرایه دوره‌ها (تمام آیتم‌ها) ... */
    {
      name: "آموزش جامع و پروژه محور n8n",
      img: "https://sabzlearn.ir/wp-content/uploads/2025/11/n8n-768x432.webp",
      secription:
        "در این دوره یاد می‌گیرید بدون کدنویسی، کارهای تکراری را خودکار کنید و بین سرویس‌ها اتوماسیون‌های حرفه‌ای بسازید...",
      stad: "مهرشاد براتی",
      pric: "4,000,000",
      pric1: "3,200,000 تومان",
      esli: "20%",
      viwe: "81",
    },
    // بقیه آیتم‌ها رو اضافه کن...
  ]);

  const viewportRef = useRef(null);
  const cardRef = useRef(null);
  const autoTimerRef = useRef(null);
  const isPointerDownRef = useRef(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoDelay = 3000;

  // compute step based on measured card width + gap
  const getStep = () => {
    if (!cardRef.current || !viewportRef.current) return 300;
    const w = Math.round(cardRef.current.getBoundingClientRect().width);
    const gap = parseInt(getComputedStyle(viewportRef.current).getPropertyValue("--gap")) || 16;
    return w + gap;
  };

  // autoplay with wrapping
  useEffect(() => {
    const startAuto = () => {
      stopAuto();
      autoTimerRef.current = setInterval(() => {
        if (!viewportRef.current) return;
        const maxScroll = viewportRef.current.scrollWidth - viewportRef.current.clientWidth;
        if (viewportRef.current.scrollLeft + 5 >= maxScroll) {
          viewportRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          viewportRef.current.scrollBy({ left: getStep(), behavior: "smooth" });
        }
      }, autoDelay);
    };
    if (isAutoPlaying) startAuto();
    return () => stopAuto();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAutoPlaying, list]);

  const stopAuto = () => {
    if (autoTimerRef.current) {
      clearInterval(autoTimerRef.current);
      autoTimerRef.current = null;
    }
  };

  // Pause autoplay on user interaction
  const handlePointerDown = () => {
    isPointerDownRef.current = true;
    setIsAutoPlaying(false);
    stopAuto();
  };
  const handlePointerUp = () => {
    isPointerDownRef.current = false;
    // resume after small delay
    setTimeout(() => setIsAutoPlaying(true), 1500);
  };

  // simple drag is handled by native scrolling (touch), but add better touch-action
  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;
    // add class while dragging (for cursor)
    const onDown = () => el.classList.add("is-dragging");
    const onUp = () => el.classList.remove("is-dragging");
    el.addEventListener("pointerdown", onDown);
    window.addEventListener("pointerup", onUp);
    return () => {
      el.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
    };
  }, []);

  // Arrow buttons: scroll by one card
  const handleNext = () => {
    if (!viewportRef.current) return;
    viewportRef.current.scrollBy({ left: getStep(), behavior: "smooth" });
    setIsAutoPlaying(false);
    clearTimeout(autoTimerRef.current);
    setTimeout(() => setIsAutoPlaying(true), 1500);
  };
  const handlePrev = () => {
    if (!viewportRef.current) return;
    viewportRef.current.scrollBy({ left: -getStep(), behavior: "smooth" });
    setIsAutoPlaying(false);
    clearTimeout(autoTimerRef.current);
    setTimeout(() => setIsAutoPlaying(true), 1500);
  };

  return (
    <section className="popularSection" dir="rtl" aria-label="پرطرفدارترین دوره‌ها">
      <div className="popularTop">
        <div className="popularTitles">
          <h2 className="popularTitle">پرطرفدار ترین دوره ها</h2>
          <p className="popularSubtitle">دوره های محبوب و پروژه محور سبزلرن</p>
        </div>

        <div className="popularActions desktopOnly">
          <button className="navBtn" onClick={handlePrev} aria-label="قبلی">
            ◀
          </button>
          <button className="navBtn" onClick={handleNext} aria-label="بعدی">
            ▶
          </button>
        </div>
      </div>

      <div
        className="carouselViewport"
        ref={viewportRef}
        onPointerDown={() => handlePointerDown()}
        onPointerUp={() => handlePointerUp()}
        onTouchStart={() => handlePointerDown()}
        onTouchEnd={() => handlePointerUp()}
      >
        <div className="carouselTrack">
          {list.map((item, i) => (
            <article
              className="courseCard"
              key={`${item.name}-${i}`}
              ref={i === 0 ? cardRef : null}
              role="group"
              aria-label={item.name}
            >
              <div className="courseImgWrap">
                <img className="courseImg" src={item.img} alt={item.name} />
                {item.esli ? <span className="badge">{item.esli}</span> : null}
              </div>

              <div className="courseBody">
                <h3 className="courseName">{item.name}</h3>
                <p className="courseDesc">{item.secription}</p>

                <div className="courseMeta">
                  <span className="metaItem">مدرس: {item.stad}</span>
                  <span className="metaItem">بازدید: {item.viwe}</span>
                </div>

                <div className="coursePriceRow">
                  {item.pric ? <span className="oldPrice">{item.pric}</span> : <span />}
                  <span className="newPrice">{item.pric1}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* موبایل: دکمه‌ها پایین کارت‌ها */}
      <div className="popularActions mobileOnly mobileNavBottom">
        <button className="navBtn big" onClick={handlePrev} aria-label="قبلی موبایل">
          ◀
        </button>
        <button className="navBtn big" onClick={handleNext} aria-label="بعدی موبایل">
          ▶
        </button>
      </div>
    </section>
  );
}
