import React from 'react';
import Image from "next/image";
import { myFont } from '@/app/layout';

const Banner = () => {
     return (
          <div className="flex  justify-between items-center" >
               <div className="flex-1  space-y-3" >
                    <h1 className={`${myFont.className} text-6xl font-medium leading-18`} >আপনার শিশুকে দিন একটি  <span className="text-primary" >সুন্দর ভবিষ্যৎ</span> </h1>
                    <p className="text-2xl leading-15 font-medium" >Buy Every toy with up to 15% discount</p>
                    <button className="btn btn-primary btn-outline" >Get Started</button>
               </div>
               <div className="flex-1 " >
                    <Image width={800} height={600} src="/hero.png" alt="Hero Kids" />
               </div>

          </div>
     );
};

export default Banner;