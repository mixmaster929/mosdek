"use client"
import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Partner from "@/components/Partner";
import GetInTouch from "@/components/GetInTouch";
import Main_Image from "@/components/Main_Image";
import Tyre_Info_first from "@/svg/Tyre_Infor_first";
import Tyre_Infor_second from "@/svg/Tyre_Infor_second";
import Tyre_Infor_third from "@/svg/Tyre_Infor_third";
import Tyre_22 from "../../public/image/tyre(22).png"
import Product_detail from "../../public/image/product_detail.png"
import { SetStateAction, useState } from "react";
import { useEffect } from 'react';
import Swiper from 'swiper';
import { Navigation } from "swiper/modules";
import { Thumbs } from "swiper/modules";
import 'swiper/swiper-bundle.css';
import Dfacebook from "@/svg/Dfacebook";
import Dinstagram from "@/svg/Dinstagram";
import Dlinkedin from "@/svg/Dlinkedin";
import Dtwitter from "@/svg/Dtwitter";
import Dyoutube from "@/svg/Dyoutube";
import Left_arrow from "@/svg/Left_arrow";
import Small_Left_arrow from "@/svg/Small_left_arrow";
import Cancel from "@/svg/Cancel";
import External_link from "@/svg/External_link";
import Help_circle from "@/svg/Help_circle";
import Help_circle_one from "@/svg/Help_circle_one";

const inter = Inter({ subsets: ["latin"] });

export default function Pricing() {

    return (
        <div className="home-container flex flex-col">
            <Header />
            <main style={{ "width": '100%' }}>
                <div className="main-container flex flex-col justify-center w-[100%]">
                    <Main_Image />
                    <div className="product-cart-pan flex flex-col pt-[32px] pl-[204px] pr-[248px] pb-[69px] bg-white max-[1535px]:px-[80px] max-[1227px]:pl-[81px] max-[1227px]:pr-[90px] max-[1227px]:pt-[12px] max-[1227px]:pb-[22px] max-[966px]:px-[19px] max-[834px]:pt-[9px] max-[834px]:pb-[18px]">
                        <div className="pcp-title flex flex-row gap-[10px] items-center">
                            <Small_Left_arrow />
                            <p className="text-lg leading-7 font-normal font-['Inter'] text-black max-[1227px]:text-sm">Fortsette å handle</p>
                        </div>
                        <div className="pcp-main-title pt-[77px] max-[1227px]:pt-[35px] max-[834px]:pt-[24px]">
                            <p className="text-4xl leading-10 font-semi-bold text-black max-[1227px]:text-2xl max-[834px]:text-xl max-[834px]:pl-[6px]">1 -  HANDLEHURV</p>
                        </div>
                        <div className="pcp-main-info flex flex-row justify-between pt-[95px] pl-[40px] gap-[167px] max-[1903px]:gap-[0px] max-[1266px]:pl-[8px] max-[1227px]:pt-[31px] max-[966px]:pl-[6px] max-[834px]:pt-[16px]">
                            <div className="pm-minfo flex flex-row gap-[279px] items-center max-[1774px]:gap-[50px] max-[1227px]:gap-[65px] max-[834px]:gap-[7px] max-[572px]:flex-col ">
                                <div className="flex flex-row gap-[26px] max-[1227px]:gap-[15px] max-[834px]:gap-[14px] max-[572px]:items-start">
                                    <div className="pm-minfo-image w-[161px] h-[161px] flex justify-center items-center bg-[#F7F7F7] max-[1227px]:w-[109px] max-[1227px]:h-[110px] max-[834px]:w-[69px] max-[834px]:h-[69px]">
                                        <Image src={Product_detail} alt="Tire image" className="w-[84px] h-[130px] max-[1227px]:w-[55px] max-[1227px]:h-[85px] max-[834px]:w-[35px] max-[834px]:h-[54px]"></Image>
                                    </div>
                                    <div className="pm-minfo-text gap-[20px] flex flex-col justify-center max-[1227px]:gap-[3px] max-[446px]:h-[57px] max-[446px]:w-[161px]">
                                        <p className=" text-3xl leading-10 font-semi-bold text-black max-[1227px]:text-xl max-[834px]:text-sm">SAILUN - ATREZZO ELITE - V</p>
                                        <p className=" text-3xl leading-10 font-semi-bold text-black max-[1227px]:text-xl max-[834px]:text-sm">205/55R16 91V</p>
                                    </div>

                                </div>
                                <div className="choose-amount-pan flex flex-row gap-[2px]">
                                    <div className="choose-item flex justify-center items-center rounded-[4px] w-[56px] h-[55px] text-4xl leading-7 text-black font-normal font-['Inter'] bg-white border-[#73C018] border-[1px] max-[834px]:w-[32px] max-[834px]:h-[32px] max-[834px]:text-2xl">-</div>
                                    <div className="choose-item flex justify-center items-center rounded-[4px] w-[56px] h-[55px] text-lg leading-7 text-black font-normal font-['Inter'] bg-white border-[#73C018] border-[1px]  max-[834px]:w-[32px] max-[834px]:h-[32px]">1</div>
                                    <div className="choose-item flex justify-center items-center rounded-[4px] w-[56px] h-[55px] text-4xl leading-7 text-black font-normal font-['Inter'] bg-white border-[#73C018] border-[1px]  max-[834px]:w-[32px] max-[834px]:h-[32px] max-[834px]:text-2xl" >+</div>
                                </div>
                            </div>
                            <div className="pm-priceam flex flex-row gap-[27px] items-center max-[1227px]:gap-[19px] max-[446px]:flex-col-reverse max-[446px]:items-end max-[446px]:gap-[40px] ">

                                <div className="flex-col gap-[7px] flex items-end">
                                    <p className="text-3xl leading-9 font-semi-bold text-[#73C018] max-[1227px]:text-xl max-[834px]:text-base">Kr. 2 296</p>
                                    <p className="text-lg leading-7 font-medium text-[#AAAAAA] max-[1227px]:text-sm max-[834px]:text-xs">Kr. 574 / stk</p>
                                </div>
                                <div className="flex items-center cancel-btn">
                                    <Cancel />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cart-bar px-[208px] h-[1px] bg-white max-[1535px]:px-[80px] max-[966px]:px-[19px] max-[834px]:hidden">
                        <div className="h-[1px] w-full bg-[#AAAAAA]"></div>
                    </div>
                    <div className="final-cart-info-pan bg-white pt-[46px] pl-[258px] pr-[246px] pb-[203px] flex flex-row justify-between max-[1464px]:pl-[112px] max-[1464px]:pr-[80px] max-[1024px]:pt-[20.29px] max-[1024px]:pb-[171px] max-[896px]:pl-[19px] max-[896px]:pr-[16px] max-[732px]:flex-col-reverse	max-[732px]:items-end max-[732px]:gap-[36px] max-[732px]:pt-[0px] max-[732px]:pb-[42px]">
                        <div className="flex flex-col gap-[39px] max-[1024px]:gap-[10.71px] max-[896px]:pl-[19px] max-[896px]:pr-[16px] max-[732px]:items-end max-[732px]:pr-[0px]">
                            <div className="flex flew-row gap-[24px] items-center max-[732px]:gap-[2px]">
                                <External_link />
                                <p className="text-lg leading-7 font-medium text-[#73C018]">Del handlekurv</p>
                            </div>
                            <div className="flex flew-row gap-[24px] items-center pl-[4px] max-[732px]:gap-[2px]">
                                <input
                                    type="checkbox"
                                    className="form-checkbox h-[18px] w-[18px] text-blue-600 border-black border-[3px]"
                                />
                                <p className="text-lg leading-7 font-medium text-black">Rabattkode</p>
                            </div>
                        </div>
                        <div className="flex flex-col w-[691px] max-[1160px]:w-[472px] max-[512px]:w-[340px]">
                            <div className="flex flex-row mb-[41px] max-[1024px]:mb-[18px] max-[732px]:mb-[10px]">
                                <span className="text-lg leading-7 font-medium text-black max-[1024px]:text-sm max-[1024px]:text-[#AAAAAA]">Totalsum:</span>
                                <span className="w-full border-dashed border-[#AAAAAA] border-t-[1px] mt-[20px] ml-[3px] max-[1024px]:mt-[15px]" ></span>
                                <div className="text-lg leading-7 font-medium text-black min-w-[15%] max-[1166px]:min-w-[19%] max-[512px]:min-w-[22%] ml-[15px] flex justify-end max-[1024px]:text-sm max-[1024px]:text-[#AAAAAA]">Kr. 2 2296</div>
                            </div>
                            <div className="flex flex-row mb-[18px] max-[1024px]:mb-[8px] max-[732px]:mb-[3px]">
                                <div className="flex flex-row gap-[10px] lg:gap-[0px] fcip-item max-[1024px]:hidden">
                                    <span className="text-lg leading-7 font-medium text-black max-[1024px]:text-sm max-[1024px]:text-[#AAAAAA]">Miljøavgift:</span>
                                    <Help_circle />
                                </div>
                                <div className="flex flex-row gap-[10px] max-[1024px]:gap-[0px] fcip-item hidden max-[1024px]:flex">
                                    <span className="text-lg leading-7 font-medium text-black max-[1024px]:text-sm max-[1024px]:text-[#AAAAAA]">Miljøavgift:</span>
                                    <Help_circle_one />
                                </div>
                                
                                <span className="w-full border-dashed border-[#AAAAAA] border-t-[1px] mt-[20px] ml-[3px] max-[1024px]:mt-[15px]"></span>
                                <div className="text-lg leading-7 font-medium text-black min-w-[15%] max-[1166px]:min-w-[19%] max-[512px]:min-w-[22%] ml-[15px] flex justify-end max-[1024px]:text-sm max-[1024px]:text-[#AAAAAA]">Kr. 100</div>
                            </div>
                            <div className="flex flex-row mb-[41px] max-[1024px]:mb-[18px] max-[732px]:mb-[14px]">
                                <span className="text-lg leading-7 font-medium text-black max-[1024px]:text-sm max-[1024px]:text-[#AAAAAA]">Fraktkostnad</span>
                                <span className="w-full border-dashed border-[#AAAAAA] border-t-[1px] mt-[20px] ml-[3px] max-[1024px]:mt-[15px]"></span>
                                <div className="text-lg leading-7 font-medium text-black min-w-[15%] max-[1166px]:min-w-[19%] max-[512px]:min-w-[22%] ml-[15px] flex justify-end max-[1024px]:text-sm max-[1024px]:text-[#AAAAAA]">Kr. 2 2296</div>
                            </div>
                            <div className="flex flex-row mb-[51px]  max-[1024px]:mb-[30px] max-[732px]:mb-[23px]">
                                <span className="text-xl leading-7 font-semi-bold text-black max-[1024px]:text-base">Totalt:</span>
                                <span className="w-full border-dashed border-[#AAAAAA] border-t-[1px] mt-[20px] ml-[3px] max-[1024px]:mt-[15px]"></span>
                                <div className="text-xl leading-7 font-semi-bold text-black min-w-[15%] max-[1166px]:min-w-[19%] max-[512px]:min-w-[22%] ml-[15px] flex justify-end max-[1024px]:text-base">Kr. 100</div>
                            </div>
                            <div className="flex justify-end">
                                <div className="py-[11.5px] px-[11px] bg-[#EF4225] rounded-[4px] max-[1024px]:py-[15.5px] max-[1024px]:px-[10px] max-[512px]:p-[10px]">
                                    <p className="text-lg leading-7 font-medium max-[1024px]:text-sm">SJEKK UT</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Partner />
                    <GetInTouch />
                    <Footer />
                </div>
            </main>
        </div>

    );
}

