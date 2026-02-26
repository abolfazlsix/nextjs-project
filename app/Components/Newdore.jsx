"use client";
import React, { useMemo, useState,useRef,useEffect } from "react";
import "./Carddor.css";
import "./Doretaraf.css"
export default function Newdore() {
   const [list] = useState([
    /* ...همون آرایه دوره‌ها مثلِ شما... */
 {name:"آموزش جامع زبان سی شارپ",img:"https://teh-1.s3.poshtiban.com/wordpress-uploads/2025/11/c-sharp.webp",
   secription:"در این دوره جامع C#، برنامه‌نویسی را از پایه تا سطح حرفه‌ای یاد می‌گیرید و با مفاهیم مهمی مثل",
   stad:"مهرشاد براتی",
   pric:"4,000,000",
   pric1:"3,200,000 تومان",
   esli:"20%",
   viwe:"81"
},
    {name:"آموزش جامع فریمورک Alpine.js",img:"https://teh-1.s3.poshtiban.com/wordpress-uploads/2025/11/AlpineJS8-1.webp",
   secription:"دوره آموزش پروژه‌محور Alpine.js سبزلرن، روشی سریع و ساده برای یادگیری تعاملی‌سازی صفحات وب.",
   stad:"مهرشاد براتی",
   pric:"5,000,000",
   pric1:"4,000,000  تومان",
   esli:"20%",
   viwe:"81"
},
    {name:"آموزش جامع NuxtJs",img:"https://teh-1.s3.poshtiban.com/wordpress-uploads/2025/11/NuxtJs3.webp",
   secription:"ر دوره آموزش جامع Nuxt.js به صورت پروژه‌محور، از صفر تا سطح حرفه‌ای SSR، سئو، مدیریت داده، API و",
   stad:"مهرشاد براتی",
   pric:"6,000,000",
   pric1:"4,800,000 تومان",
   esli:"20%",
   viwe:"81"
},
    {name:"آموزش جامع PHP از صفر + پروژه محور",
  img:"https://teh-1.s3.poshtiban.com/wordpress-uploads/2025/07/4-2.webp",
   secription:"دوره آموزش PHP یک برنامه جامع و کاربردیست و برای افرادی طراحی شده که میخواهند مهارت‌های خود",
   stad:"مهرشاد براتی",
   pric:"1,000,000",
   pric1:"رایگان",
   esli:"100%",
   viwe:"81"
},
    {name:"پیاده سازی داشبورد های حرفه ای با CSS و JS",img:"https://teh-1.s3.poshtiban.com/wordpress-uploads/2025/07/19-1.webp",
   secription:"این دوره فرصتی فوق‌العاده برای ارتقاء مهارت‌های فرانت اند شماست. با یادگیری از جدیدترین تکنیک‌ها،",
   stad:"مهرشاد براتی",
  //  pric:"",
   pric1:"2,000,000",
  //  esli:"100%",
   viwe:"81"
},
    {name:"آموزش جامع فریمورک Flutter",img:"https://teh-1.s3.poshtiban.com/wordpress-uploads/2025/07/6.webp",
   secription:"دوره آموزش جامع فلاتر سبزلرن، یادگیری Flutter از صفر تا ساخت اپلیکیشن‌های واقعی. آموزش",
   stad:"مهرشاد براتی",
   pric:"",
   pric1:"1,200,000 تومان",
  //  esli:"20%",
   viwe:"81"
},


   
    // ... بقیه آیتم‌ها رو دقیقاً همونطور که داری اضافه کن ...
  ]);

  const viewportRef = useRef(null);
  const cardRef = useRef(null); // برای اندازه‌گیری دقیق کارت
  const autoTimerRef = useRef(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoDelay = 3000; // هر چند میلی‌ثانیه یک کارت جلو بره (قابل تغییر)

  // helper: محاسبه عرض اسکرول برای یک کارت (cardWidth + gap)
  const scrollStep = () => {
    const cardW = getComputedCardWidth();
    const gap = getComputedGap();
    return Math.round(cardW + gap);
  };

  const getComputedCardWidth = () => {
    if (!cardRef.current) return 300;
    return Math.ceil(cardRef.current.getBoundingClientRect().width);
  };

  const getComputedGap = () => {
    // از CSS variable یا فاصله در DOM استفاده کن
    // اینجا fallback 16px میذاریم
    const computedStyle = window.getComputedStyle(viewportRef.current);
    const gap = computedStyle.getPropertyValue("--gap") || "16px";
    return parseInt(gap, 10) || 16;
  };

  // دکمه‌های چپ/راست
  const handleNext = () => {
    if (!viewportRef.current) return;
    viewportRef.current.scrollBy({
      left: scrollStep(),
      behavior: "smooth",
    });
  };
  const handlePrev = () => {
    if (!viewportRef.current) return;
    viewportRef.current.scrollBy({
      left: -scrollStep(),
      behavior: "smooth",
    });
  };

  // autoplay
  useEffect(() => {
    const start = () => {
      stopAuto();
      autoTimerRef.current = setInterval(() => {
        if (!viewportRef.current) return;
        // اگر به انتها رسید، برگرد به اول
        const maxScroll =
          viewportRef.current.scrollWidth - viewportRef.current.clientWidth;
        if (viewportRef.current.scrollLeft + 5 >= maxScroll) {
          viewportRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          viewportRef.current.scrollBy({ left: scrollStep(), behavior: "smooth" });
        }
      }, autoDelay);
    };

    if (isAutoPlaying) start();

    return () => stopAuto();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAutoPlaying, list]);

  const stopAuto = () => {
    if (autoTimerRef.current) {
      clearInterval(autoTimerRef.current);
      autoTimerRef.current = null;
    }
  };

  // pause on hover / touch start
  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
    stopAuto();
  };
  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
  };

  // enable pointer drag (desktop & touch)
  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;

    let isDown = false;
    let startX;
    let scrollLeft;

    const onPointerDown = (e) => {
      isDown = true;
      el.classList.add("is-dragging");
      startX = e.pageX ?? (e.touches && e.touches[0].pageX);
      scrollLeft = el.scrollLeft;
      setIsAutoPlaying(false);
      stopAuto();
      e.preventDefault();
    };

    const onPointerMove = (e) => {
      if (!isDown) return;
      const x = e.pageX ?? (e.touches && e.touches[0].pageX);
      const walk = startX - x;
      el.scrollLeft = scrollLeft + walk;
    };

    const onPointerUp = () => {
      isDown = false;
      el.classList.remove("is-dragging");
      setIsAutoPlaying(true);
    };

    // mouse
    el.addEventListener("mousedown", onPointerDown);
    window.addEventListener("mousemove", onPointerMove);
    window.addEventListener("mouseup", onPointerUp);

    // touch
    el.addEventListener("touchstart", onPointerDown, { passive: false });
    el.addEventListener("touchmove", onPointerMove, { passive: false });
    el.addEventListener("touchend", onPointerUp);

    return () => {
      el.removeEventListener("mousedown", onPointerDown);
      window.removeEventListener("mousemove", onPointerMove);
      window.removeEventListener("mouseup", onPointerUp);
      el.removeEventListener("touchstart", onPointerDown);
      el.removeEventListener("touchmove", onPointerMove);
      el.removeEventListener("touchend", onPointerUp);
    };
  }, []);

  return (
    <section className="popularSection" dir="rtl">
      <div className="popularTop">
        <div className="popularTitles">
          <h2 className="popularTitle">پرطرفدار ترین دوره ها</h2>
          <p className="popularSubtitle">دوره های محبوب و پروژه محور سبزلرن</p>
        </div>

        <div className="popularActions">
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
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleMouseEnter}
        onTouchEnd={handleMouseLeave}
      >
        <div className="carouselTrack">
          {list.map((item, i) => (
            <article
              className="courseCard"
              key={`${item.name}-${i}`}
              ref={i === 0 ? cardRef : null} /* کارت اول برای اندازه‌گیری */
            >
              <div className="courseImgWrap">
                <img className="courseImg" src={item.img} alt={item.name} />
                {item.esli ? <span className="badge">{item.esli}</span> : null}
              </div>

              <div className="courseBody">
                <h3 className="courseName">{item.name}</h3>
                <p className="courseDesc">{item.secription}</p>
                
                <br />
                <hr />
                <br />
                <div className="courseMeta">
                  <span className="metaItem">مدرس: {item.stad}</span>
                  <span className="metaItem">بازدید: {item.viwe}</span>
                </div>
     <br /><hr />
                <div className="coursePriceRow">
                  {item.pric ? <span className="oldPrice">{item.pric}</span> : <span />}
                  <span className="newPrice">{item.pric1}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
