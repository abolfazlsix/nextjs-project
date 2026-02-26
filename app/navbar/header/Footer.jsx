import React from "react";
import "./Footer.css"
export default function Footer(){
    return(
        <div className="asli">
          <div className="jh">
                        <div className="hedd">
                <div className="hed1">
                    <div className="but1">تلگرام</div>
                    <div className="but1">اینستاگرام</div>
                    <div className="but1">لینکدین</div>
                </div>
                <div className="hed2">
                    <img className="logo" src="https://sabzlearn.ir/sabzlearn-logo.svg" alt="" />
                </div>
            </div>
            <div className="ati">
                <h1 className="hp">sabzlearn_support@</h1>
                <h1 className="hp">info@sabzlearn.ir</h1>
            </div>
            <hr />
            <div className="enamd"> 
                 <div className="de4">
                    <div>
                        <h1>درباره سبزلرن</h1>
                        <p>شروع هرچیزی سخته، ولی وقتی مسیر درستی رو انتخاب کنی، با خیال راحت و بدون استرس میتونی از مسیر لذت ببری. ما در سبزلرن، توی سفر به دنیای برنامه نویسی کنارت هستیم تا باهم رشد کنیم و از نتیجه زحمات مون لذت ببریم.</p>
                    </div>
                </div>
              <div className="sdf">
                        <div className="de2">
                    <div>
                        <h1>دسترسی سریع</h1>
                        <p>قوانین و مقررات</p>
                        <p>ارسال تیکت</p>
                        <p>همه دوره ها</p>
                    </div>
                </div>
                    <div className="de3">
                    <div>
                        <h1>دوره های پیشنهادی</h1>
                        <p>آموزش پایتون</p>
                        <p>آموزش جاوا اسکریپت</p>
                        <p>آموزش htm</p>
                        <p>آموزش css</p>
                        <p>آموزش وردپرس</p>
                        <p>آموزش ری‌اکت ReactJS</p>
                    </div>
                </div>
                </div>
                <div className="de1">
                    <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAH4AfQMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABAcDBQYCAQj/xAA/EAABAwMCAwUFBQUHBQAAAAABAgMEAAURBiESMVEHEyJBYRQycYGhI0JikbEVM3LB0RZSosLh8PEkQ1OS0v/EABkBAQADAQEAAAAAAAAAAAAAAAACAwQBBf/EACMRAAICAgIDAAIDAAAAAAAAAAABAgMREgQhEzFBI2EiUbH/2gAMAwEAAhEDEQA/ALxpSlAKUpQClKUBHuE6Nbobsua6lphoZUo/751TeqNdXK+vqjW8uRYZPClps+Nz+Ij9B9ay9pepFXe6m3RVkwoquHwnZxzzPy5D59a7bQOj2bJDbmzWwq5OpyeIfuQfuj16n5VuhCNEN5rLfoyylK2WsfRVytJ39MQylWmSGkjJynxAfw8/pXrTOp7hp6UlcZ1S4xP2sdR8Kx5/A+tfoCqI7RIjMLV05uOgIQrhc4QNgVJBP1zVtN/nbhJFdlXiSlFl4w5LUyIzKYVxNPIS4g9QRkVmrn9AqUrR9sK857ojfpxHH0roK86a1k0bYvKTFKUqJ0UpSgFKUoBSlKAVo9a3c2XTkuUhXC8pPds/xq2B+W5+Vbyqw7Zpxzbrek7eJ9Y/wp/zVdRDexIrtlrBs5zs2tKbrqdpTyeJmKO/WDyJHuj8yD8jV5VX3Y7CDVnmTSnCn3ggH8KR/VR/KrBqfLntZj+iNEcQPilBKSpRASBkk+VfnvUs83vUcyWyCoPvcLQA3KR4U/QCu67StZJDbtktTuVKymU8k8h5oB69fy61G7MNJLdebvlwb4WkHMVtQ99X9/4Dy9d6uoj4YOyRVa/JJQiWNY4X7Ns0KEQOJhhCFY81Ab/XNTqUrC3l5NaWBStRqPUMDT0Pv5znjVnu2U++4fQdPWtFojXKdQSnoc5tuPKyVMJSdlo6b/eH1+VTVU3HZLog5xUtfp2lKUqsmKUpQClKUAqke1OQXtYPtk5DDTbY/wDXi/zVZ1+1jZbHxIkSQ7IH/YY8Ss+vkPmapTUNz/bN6l3ANlsPryEE5wMAD9K3cOuSls10ZeTNa6otvRs632PRFucuEtmOFoU541bqyonYczt0rldWdoci5BUCwocZZX4FPY+0czthI8h9fhXN6e0pd9QLSqKyUR+RkO5CAPTr8BVs6X0XbNPBLqU+0zfOQ4Nx/CPu/r61Kaqqk5S7ZyLsnFJdI5TRXZ4pSm7hqFvCR4m4auZ9V/8Az+fSrPSkJSEpACQMADyr7UW5z49rgPTZi+BllPEo9fQep5VkssnbLs0QhGC6PF2ukOzwly7g8lppPXmo9APM1yCZWpdYOgRUO2azE7vK2edT6fH029TXDzdbXCTfTdFMRnCjwxmn0caWBnmkZ971q3tKy50+wxJlzCBIfSXClCeEBJPh+mD86ulU6I5a7KozVrwvRoNc6MbulpZXbUYmwmghoE7utge6T16Hr8a5fQehpkqQxdLl3sSO2oLaQMpccI5H8I9eZ+tW7Sq48mcYaE3TFy2FKUqgtFKVgnS2IEN6XKWEMsoK1q6AU9gwXm7QrLBXMuDwbbTsB95Z6JHmaqHUOtbxqKSYtuD0eMo8KGI+Stz+Ijc/AbfGtwmyXnX9yFyuJVBtY/cJUN+D8I6nzUfryrv7Hp612Jngt0ZKFEYU6rdavir+XKtkXXR77l/hne9vrpFY2Pszus4JduLiIDR34SONw/IbD5n5VoNX2QafvjsBtS1tBKVtrXzUCN/rkfKv0FVfdrlkVKt7F2YRlcXwPY/8ZOx+R/Wp08qUrMS9MhZRGMOjZ9mN0bn6YZj8Q7+GS0tOd8Zyk/DG3yNddX51sV6m2GcmXb3OFfJSFbpWOhFWJH7V4ZZ/6m2PpdxybcCkk/E4qN/Fnu3FZTJVXx1xIsaqb7RtSqvtyRa7aouRGV8I4N++d5ZHUDkPn6Vj1P2h3C8x1xIbQhRljC+FXEtY6E7YHw/Ot72aaOWypF7urXCrGYrKhuPxkfp+fSu11KheSz38Ryc/K9IHzTnZgWn25F+fbWlOFezM5IUeildPQfnVlpASAlIAA2AHlX2lZbLZWPMi+EIwWEKUpVZMUpSgFR5sOPOaS1LaDrQWF8CvdJHLI8998GpFKZwBSlKAV4dbQ80tp1AW2tJSpKhkEHmKhXy922wQxMvEtEWOVhsOKBI4jnA2Hoa9NXeA9dFWxqShcxLAkFpOT9mTgKzyxmgK01J2ZzWpS3rDwPx1nIYWsJW36ZOxHzz+tamL2c6lecCXYrUdP9919JH+Ek1bNn1JZ70JZtc9uSIauF/gB8B36jfkeXSozetdOOWNy9ourRtrbvcrf4VYC9vDjGc7jyrUuZYlgofHg3k1Wl+zy32haJM9Qmy07p4k4bQfQeZ9T+QrtK01z1TY7VEhS7jcW2GJuDGWoK+0BAOeW2xHOvV71NZ7C8wzdZfcuyAotIDS1lQGMnCQeWRVE5ym8yZbGKisI29Kg2q72+8QBOtctuVGOR3jRzgjmCOYPpzrJa7hGusBmdCUtUd4EoUttTZO+PdUARy6VAkSqUpQClKUApSlAK53tBhXe46RnxdPuFE9aU8ISvgK08Q4kg7YJTkcx8RXQOLS22pxZwlIJJ9BUe2zUXCGiQ2CkKyCknkRUd4qWueyWr12+FURdH3iRbWo8mJKXDcvkN5cF9lDSGWk5DqkgPOeEgjO43zgdPds05qrTl2vy40Z2ahi0GFaZAWnicBWC2DkjdAVg5x7nwq3qimc3+0RCx4yjiz/AC/LepESrbHpDUmmJgDTLMyNLsjkR0Rkd33bqElTZXlR4lEkp4h15CtdG7Or8ICoC4oRb3bUJKmu8TtPEZTIRjOc5UFZ5ZHOrtqPPlJhRVvrHEE4wnPOgKmmaO1LqJq3wn2WoTFv0+3DCpiA5xvqQO8KeFWxHCkcR6edbFtjUjc7Rt4m2KbIkW+C+xMaZW2VhZSEJPiWB4sZ5+dWc04l1pDiPdWkKHwNeqAr7TNvvtnduUiRZiHL9OdecZYfQRATw+EqOcKUTz4f9K1On9J3uQ/pRm/NTREiwXhOT7UQC73hUgL4VZP3T8hVmxJzcp6Q0gYLKuE78/8Ae9SqAUqJNnNw3I6HBkvL4R6ev1FS6AUpSgFKUoDk7u9d23zCkPo7p/IQsIACh8uVYIi7hEkCFa3krS6eMDhBAHLOT8K3l3tC7nMYUt0IjtpOQPeJJrExYfYrozKhOYZGQttZOwI8q8Gzh8l8ndSeuce+8fT1YcirxYeM49Y6yZ7mbkxEQ7HdStSEfa+Ab9SP6VzBmyDM9r4/ts54semK7Wc249DeaZIC1oKQTy3rUf2aZ9l4e9V3/Pj8vhjpXupYWDyn2SrYbk/EW7IeSlS0/ZDgG3qa0F2lz1KMWcoeBWcAAZ9a6yA24zDZaeIK0JCSU8tq171mEu4uyZastnAQhJ5jHnXQa2ySLlIKI8dxKWW/eUpIOBU69yLnDWXmVp9mOOSR4T61ntdsXbpbxQsKjuJGMnxA5/5rNd4bs6MlhpaUArBWT0oDkoMuTHfKoqvtHPDjGc5NdVwXT9n/AL5v2vPF7oxjHu/H1qG/p5CENrhOFLzeDlZ2Uf5VvaA4SfLkyXh7Wrxt5TjGMVv7JIuUxYdecT7MNt0jKvhXxjTyFpdXNcKnnCT4Dsn+tTrPCdgR1sOLSscZKCOm1AT6UpQClKUAqPNmsQWg5JXwpK0ozjzUoJHyyob1IqBdLLbruWjcoqJHdBQQFE4HFjOwO/IfkK7HGezjzjowzL7Di3CNDK0qU6Vcas4DaQhxWc8ju2R6VniXWJLfLTL7SiUpU3wqzxhQJHl+FXXlWqi6LsrLa2nYTDrailRTwY8Sc4PPoakf2SsBjuRzbGS24sLWCTkqAIBznPmfzNWPxfMkVuYmNTB20PXFUNTIQ5wIZcdTxq8QSSQM8OCrcVLtd59vafediuxWW3yygukFSiDg5SPd36/GoS9E6fU62oW2OEITgowfF03z/wA1mkadQiIxGssk2xLPGMNtJcSpKscQIVnPIb11+J+ji3+kq3Xhmat0ABCUPLbSsuJIXwqCeudyoY+XWoz2poDUlCS4lUVTSle0IJUAoLSnhwBn7w3qMvQ9hU02n2FsrSEJU4oElYSMb74yR5j41JY0lYGJTclq2Mh5sgoUcnBHLYnG3l0p+L9j+ZJtd3auEJmT3ZbC0lS0lQPdD8R8tq+P6gtMdaUvTmk5cLXEc8IWMEgq5DmOZrDK0rY5b6X5FvbWtKeH3lBJGSd0g4PM8xUW26LsttkmRHjJLnelaS6AvgSRjhGfL15+tc/F+zv8zo6UpVRMUpSgP//Z" alt="" />
                </div>
                </div>
                  <div className="end">
                <div> <h1 className="hp">ساخته شده با قلب در سبزلرن</h1></div>
                <div className="f">
                    <h1 className="hp">کلیه حقوق مادی و معنوی سایت برای سبز لرن محفوظ است</h1>
                </div>
            </div>
                </div>
        </div>
    )
}