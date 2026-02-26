"use client"
import Context, {} from "./Context"
import "./card.css"
import React, { useState } from "react";
export function Listcors(){
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
   return (
 <div>
  <div className="divhed">
    <div className="d1">
       <div className="d2"><p>آخرین دوره های ما</p></div>
    <div className="d3">
   
    <div className="d32">سکوی پرتاپ شما به سمت موفقیت</div>

    </div>
    </div>
  
   </div>
      <div className="d31">همه دوره ها</div>
   <div className="cardsGrid">
    
    {list.map((item) => {
      return (
    
 <div className="card" key={item.name}>
  <div className="card__media">
    <img src={item.img} alt={item.name} />
   {/* {item.esli &&  <span className="card__btn">
      <p className="icon"></p>
      {item.esli}
    </span>} */}
  </div>

  <div className="card__body">
    <h2 className="card__title">{item.name}</h2>
    <p className="card__desc">{item.secription}</p>

    <div className="card__meta">
      <div className="metaItem">
        <span className="icon">مدرس    </span>
        <span>{item.stad}</span>
      </div>

      <div className="metaItem">
        <span className="icon">دانشجو</span>
        <span>{item.viwe}</span>
      </div>
    </div>
  </div>

  <div className="card__footer">
    <div className="priceBox">
      <div className="priceRow">
        <span className="icon"></span>
        <span className="priceOff">{item.pric}</span>
      </div>

      <div className="priceRow">
        <span className="priceMain">{item.pric1}</span>
      </div>
    </div>

   <button className={item.esli?"card__btn":"cardnot"}>
      
    {item.esli}
      <span className="icon"></span>
    </button>
  </div>
</div>

      );
    })}
  </div>

 </div>
);

}
export default Listcors;