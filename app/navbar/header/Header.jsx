
"use client"
import Hedaer1 from "./Header1"
import React, { useState } from "react";
import "./hedaer.css"
export function Header() {

    return (
        <header className="header">
            <div className="heroContent">
                  <div className="heroContent">
        <Hedaer1/>
        {/* بقیه متن و سرچ و آمار */}
      </div>

                <div className="dis2">
                    <div className="header2">
                    <h1 className="p1">سبزلرن، اولین گام برنامه‌نویس شدن</h1>
                </div>

                <div className="header3">
                    <h2 className="p">با آکادمی خصوصی سبزلرن، علم برنامه نویسی رو با خیال راحت یاد بگیر و پیشرفت کن</h2>
                </div>
                </div>
<div className="dis">
    
                <div className="header4">
                    <div className="inputsear">
                        <div className="imgsearch"></div>
                        <div className="divinput">
                            <input placeholder="جستجو بین دوره ..." type="text" />
                        </div>
                    </div>
                </div>

               <div className="header5">
                    <div className="div51">
                        <div className="divtext">
                         <div>
                                 <div>
                                <img src="https://sabzlearn.ir/wp-content/themes/sabzlearn-theme/images/conversation-min.webp" alt="" />
                            </div>
                            <div>
                                <p className="p">193072</p>
                            </div>
                            <div><p className="h4">دانشجو</p></div>
                         </div>
                        </div>

                    </div>
                    <div className="div51">
                        <div className="divtext">
                           <div>
                              <div>
                                <img src="https://sabzlearn.ir/wp-content/themes/sabzlearn-theme/images/book-min.webp" alt="" />
                            </div>
                            <div><p className="p">     84  </p></div>
                            <div><p className="h4">دوره آموزشی</p></div>
                           </div>

                        </div>
                    </div>
                    <div className="div51">
                        <div className="divtext">
                        <div>
                                <div><img src="https://sabzlearn.ir/wp-content/themes/sabzlearn-theme/images/clock-min.webp" alt="" /></div>
                            <div><p className="p">1717</p></div>
                            <div ><p className="h4">ساعت آموزش</p></div>
                        </div>
                        </div>

                    </div>
                </div>
</div>
            </div>
        </header>
    )
}
export default Header;


