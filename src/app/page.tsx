
import Hero from "@/components/Herro";



import CustomerCarousel from "@/components/Customer";

import Top_sell from "./product/sell";
import Product from "./product/page";
import Brands from "@/components/Brands";
import DressStyle from "@/components/DressStyle";



export default function Home() {
  return (
    <>
   <section>
   
    <Hero/>
    <Brands/>

    {/* <NewArivel/>
    <BestSelling/> */}
    <Product/>
    <Top_sell/>
    {/* <Dress/> */}
    <DressStyle/>
    <CustomerCarousel/>
    
   </section> 
   </>
  );
}
