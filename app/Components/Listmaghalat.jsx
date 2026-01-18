"use client"
import "./card.css"
import React, { useState } from "react";
export function Listmaghalat(){
    const [list,setList]=useState([
    {name:"آموزش جامع و پروژه محور n8n",img:"https://sabzlearn.ir/wp-content/uploads/2025/11/n8n-768x432.webp",
   secription:"",
   stad:"مهرشاد براتی",
   pric:"4,000,000",
   pric1:"3,200,000 تومان",
   esli:"20%",
   viwe:"81"
},
    {name:"آموزش جامع توسعه وردپرس",img:"https://sabzlearn.ir/wp-content/uploads/2025/07/6-768x432.webp",
   secription:"در این دوره یاد می‌گیرید بدون کدنویسی، کارهای تکراری را خودکار کنید و بین سرویس‌ها اتوماسیون‌های حرفه‌ای بسازید. همه مفاهیم با تمرین و پروژه‌های واقعی آموزش داده می‌شود و در پایان می‌توانید برای کسب‌وکارها اتوماسیون‌های کاربردی طراحی کنید.",
   stad:"مهرشاد براتی",
   pric:"5,000,000",
   pric1:"4,000,000  تومان",
   esli:"20%",
   viwe:"81"
},
    {name:"آموزش جامع زبان GO",img:"https://sabzlearn.ir/wp-content/uploads/2025/11/golang-768x432.webp",
   secription:"در این دوره یاد می‌گیرید بدون کدنویسی، کارهای تکراری را خودکار کنید و بین سرویس‌ها اتوماسیون‌های حرفه‌ای بسازید. همه مفاهیم با تمرین و پروژه‌های واقعی آموزش داده می‌شود و در پایان می‌توانید برای کسب‌وکارها اتوماسیون‌های کاربردی طراحی کنید.",
   stad:"مهرشاد براتی",
   pric:"6,000,000",
   pric1:"4,800,000 تومان",
   esli:"20%",
   viwe:"81"
},
    {name:"سکوی پرتاب به دنیای برنامه نویسی",img:"https://sabzlearn.ir/wp-content/uploads/2025/08/%D8%B3%DA%A9%D9%88%DB%8C-%D9%BE%D8%B1%D8%AA%D8%A7%D8%A81-768x432.jpg",
   secription:"در این دوره یاد می‌گیرید بدون کدنویسی، کارهای تکراری را خودکار کنید و بین سرویس‌ها اتوماسیون‌های حرفه‌ای بسازید. همه مفاهیم با تمرین و پروژه‌های واقعی آموزش داده می‌شود و در پایان می‌توانید برای کسب‌وکارها اتوماسیون‌های کاربردی طراحی کنید.",
   stad:"مهرشاد براتی",
   pric:"1,000,000",
   pric1:"رایگان",
   esli:"100%",
   viwe:"81"
},
    {name:"آموزش جامع نتورک پلاس",img:"https://sabzlearn.ir/wp-content/uploads/2025/11/network-plus-768x432.webp",
   secription:"در این دوره یاد می‌گیرید بدون کدنویسی، کارهای تکراری را خودکار کنید و بین سرویس‌ها اتوماسیون‌های حرفه‌ای بسازید. همه مفاهیم با تمرین و پروژه‌های واقعی آموزش داده می‌شود و در پایان می‌توانید برای کسب‌وکارها اتوماسیون‌های کاربردی طراحی کنید.",
   stad:"مهرشاد براتی",
  //  pric:"",
   pric1:"2,000,000",
  //  esli:"100%",
   viwe:"81"
},
    {name:"آموزش ساخت ربات تلگرام با سی شارپ",img:"https://sabzlearn.ir/wp-content/uploads/2025/11/csharp-bot-telegram-768x432.webp",
   secription:"در این دوره یاد می‌گیرید بدون کدنویسی، کارهای تکراری را خودکار کنید و بین سرویس‌ها اتوماسیون‌های حرفه‌ای بسازید. همه مفاهیم با تمرین و پروژه‌های واقعی آموزش داده می‌شود و در پایان می‌توانید برای کسب‌وکارها اتوماسیون‌های کاربردی طراحی کنید.",
   stad:"مهرشاد براتی",
   pric:"",
   pric1:"1,200,000 تومان",
  //  esli:"20%",
   viwe:"81"
},

    {name:"آموزش پروژه محور NestJS از صفر!",img:"https://sabzlearn.ir/wp-content/uploads/2025/07/2-768x432.webp",
   secription:"در این دوره یاد می‌گیرید بدون کدنویسی، کارهای تکراری را خودکار کنید و بین سرویس‌ها اتوماسیون‌های حرفه‌ای بسازید. همه مفاهیم با تمرین و پروژه‌های واقعی آموزش داده می‌شود و در پایان می‌توانید برای کسب‌وکارها اتوماسیون‌های کاربردی طراحی کنید.",
   stad:"مهرشاد براتی",
  //  pric:"4,000,000",
   pric1:"2,600,000 تومان",
  //  esli:"20%",
   viwe:"81"
},
    {name:"آموزش جامع زبان C",img:"https://sabzlearn.ir/wp-content/uploads/2025/11/c-768x432.webp",
   secription:"در این دوره یاد می‌گیرید بدون کدنویسی، کارهای تکراری را خودکار کنید و بین سرویس‌ها اتوماسیون‌های حرفه‌ای بسازید. همه مفاهیم با تمرین و پروژه‌های واقعی آموزش داده می‌شود و در پایان می‌توانید برای کسب‌وکارها اتوماسیون‌های کاربردی طراحی کنید.",
   stad:"مهرشاد براتی",
   pric:"3,200,000",
   pric1:"2,560,000 تومانءء",
   esli:"20%",
   viwe:"81"
},
    {name:"آموزش جامع PHP از صفر + پروژه محور",img:"https://sabzlearn.ir/wp-content/uploads/2025/07/4-2-768x432.webp",
   secription:"در این دوره یاد می‌گیرید بدون کدنویسی، کارهای تکراری را خودکار کنید و بین سرویس‌ها اتوماسیون‌های حرفه‌ای بسازید. همه مفاهیم با تمرین و پروژه‌های واقعی آموزش داده می‌شود و در پایان می‌توانید برای کسب‌وکارها اتوماسیون‌های کاربردی طراحی کنید.",
   stad:"مهرشاد براتی",
   pric:"4,000,000",
   pric1:"3,200,000 تومانءء",
   esli:"20%",
   viwe:"81"
},
    {name:"آموزش جامع فریمورک Alpine.js",img:"https://sabzlearn.ir/wp-content/uploads/2025/11/AlpineJS8-1-768x432.webp",
   secription:"در این دوره یاد می‌گیرید بدون کدنویسی، کارهای تکراری را خودکار کنید و بین سرویس‌ها اتوماسیون‌های حرفه‌ای بسازید. همه مفاهیم با تمرین و پروژه‌های واقعی آموزش داده می‌شود و در پایان می‌توانید برای کسب‌وکارها اتوماسیون‌های کاربردی طراحی کنید.",
   stad:"مهرشاد براتی",
  //  pric:"4,000,000",
   pric1:"900,000 تومان",
  //  esli:"20%",
   viwe:"81"
},
    {name:"clean architecture در فلاتر",img:"https://sabzlearn.ir/wp-content/uploads/2025/11/clean-architecture-768x432.webp",
   secription:"در این دوره یاد می‌گیرید بدون کدنویسی، کارهای تکراری را خودکار کنید و بین سرویس‌ها اتوماسیون‌های حرفه‌ای بسازید. همه مفاهیم با تمرین و پروژه‌های واقعی آموزش داده می‌شود و در پایان می‌توانید برای کسب‌وکارها اتوماسیون‌های کاربردی طراحی کنید.",
   stad:"مهرشاد براتی",
  //  pric:"4,000,000",
   pric1:"900,000  تومان",
  //  esli:"20%",
   viwe:"81"
},
])
   return (
 <div>
  <div className="divhed">
    <div className="d1">
       <div className="d2"><p>آخرین دوره های ما</p></div>
    <div className="d3">
      <div className="d31">همه دوره ها</div>
    <div className="d32">سکوی پرتاپ شما به سمت موفقیت</div>

    </div>
    </div>
  
   </div>
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

    {item.esli && <button className="card__btn">
      
    {item.esli}
      <span className="icon"></span>
    </button>}
  </div>
</div>

      );
    })}
  </div>
 </div>
);

}
export default Listmaghalat;






function toggleList(type){
  console.log(type, `type`);
  document.execCommand(
    type === "ol" ? "insertOrderedList" : "insertUnorderedList"
  );
}






{/* <ToolbarGrop lable="فهرست">
  <ToolbarButton title="فهرست نقطه ای" onClick={()=> toggleList("ul")}>
    * list
  </ToolbarButton>
  <ToolbarButton title="فهرست شماره ای" onClick={()=> toggleList("ol")}>
    1 list
  </ToolbarButton>
</ToolbarGrop> */}
























<ToolbarGrop lable="فهرست">
  <ToolbarButton
    title="فهرست نقطه ای"
    onMouseDown={(e) => e.preventDefault()}      // ← اضافه شد
    onClick={() => toggleList("ul")}
  >
    * list
  </ToolbarButton>

  <ToolbarButton
    title="فهرست شماره ای"
    onMouseDown={(e) => e.preventDefault()}      // ← اضافه شد
    onClick={() => toggleList("ol")}
  >
    1 list
  </ToolbarButton>
</ToolbarGrop>













function toggleList(type){
  console.log(type, `type`);

  // تعیین فرمان صریحاً
  const command =
    type === "ol" ? "insertOrderedList" :
    type === "ul" ? "insertUnorderedList" :
    null;

  if (!command) return;

  try {
    // اگر ادیتورِ شما contentEditable است و رفرنسی دارد، می‌توانید اینجا فوکوس کنید:
    // editorRef?.current?.focus && editorRef.current.focus();

    // فراخوانی با آرگومان‌های کامل (بعضی مرورگرها به این شکل پایدارتر عمل می‌کنند)
    const ok = document.execCommand(command, false, null);
    console.log("execCommand result:", command, ok);
  } catch (err) {
    console.error("execCommand error:", err);
  }
}

