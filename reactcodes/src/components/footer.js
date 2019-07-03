import React from "react";
import './css/main.css';

function Footer() {
return ( 

<div id="part6">
    <div id="up">

        <div id="header">	
            <div id="left">
                <ul className="block" id="first">
                    <li className="title">اپلیکیشن های موبایل</li>
                    <li>
                        <a href="https://app.adjust.com/x5ks5h">
                            <img src={require("./mocks/google-play-dark.png")}/>
                        </a>				
                        <a href="https://www.reyhoon.com/app/ios">
                            <img src={require("./mocks/sib-app-dark.png")}/>
                        </a>
                        <a href="https://cafebazaar.ir/app/reyhoon.androidapp/?l=fa&_branch_match_id=640585749355987351">
                            <img src={require("./mocks/cafebazaar-dark.png")}/>
                        </a>					
                    </li>
                </ul>
                <ul className="block" id="second">
                    <li className="title">پشتیبانی ریحون</li>
                    <li>سوالات متداول</li>
                    <li>تماس با پشتیبانی</li>
                    <li>قوانین و مقررات</li>
                </ul>
                <ul className="block" id="third">
                    <li className="title">رستوران ها</li>
                    <li>ثبت رستوران</li>
                </ul>
                <ul className="block" id="forth">
                    <li className="title">تماس با ریحون</li>
                    <li>درباره ریحون</li>
                    <li>تماس با ما</li>
                    <li>وبلاگ ریحون</li>
                </ul>
            </div>

    <div id="right">
        <div>
            <p>مراقبت و محافظت از حساب کاربری و رمز عبور هر کاربر بر عهده کاربر است. ریحون سریع ترین راه سفارش آنلاین غذا است. منوی عکس دار رستوران های اطرافتان را بر اساس مکان خود به راحتی مشاهده کنید و سفارش دهید</p>
        </div>
        <div><a href="url">لیست رستوران ها</a></div>
    </div>

    </div>
        <div id="footer">
        <div><a href="https://eanjoman.ir/#reyhoon.com" target="_blank"><img src={require("./mocks/6-logo2.png")}/></a></div>
        <div><a href="https://trustseal.enamad.ir/Verify.aspx?id=1963&p=gsaJpR2wRrA9HCag" target="_blank"><img src={require("./mocks/6-logo.png")}/></a></div>
        </div>
    </div>
    <div id="down">
        <p>© 2017, Reyhoon, All Rights Reserved.</p>
            <div>
                <a href="https://plus.google.com/u/0/110461935266638365339">
                    <img src={require("./mocks/i1.png")}/></a>
                <a href="https://www.instagram.com/reyhoonia/">
                    <img src={require("./mocks/i2.png")}/></a>
                <a href="http://www.twitter.com/reyhoonia">
                    <img src={require("./mocks/i3.png")}/></a>
                <a href="https://www.facebook.com/reyhoonia">
                    <img src={require("./mocks/i4.png")}/></a>
                <a href="https://t.me/reyhoonia">
                    <img src={require("./mocks/i5.png")}/></a>
            </div>
    </div>
</div>

	);
};

export default Footer;

