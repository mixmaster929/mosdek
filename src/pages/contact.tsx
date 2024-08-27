import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Partner from "@/components/Partner";
import Main_Image from "@/components/Main_Image"
import Google_map from "../../public/image/googlemap.png"
import Map_pin from "@/svg/Map_pin";
import Phone_Call_One from "@/svg/Phonecall_one";
import Contact_mail from "@/svg/Contact_mail";
import Input_user from "@/svg/Input_User";
import Input_alert from "@/svg/Input_alert";
import Input_mail from "@/svg/Input_Mail";
import Input_pen from "@/svg/Input_pen";
import Input_phone from "@/svg/Input_phone";
import Send from "@/svg/Send";
import { MdCheckBox } from "react-icons/md";
import Link from "next/link";
import { useState } from 'react';

const inter = Inter({ subsets: ["latin"] });

export default function Contact() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [subject, setSubject] = useState('');
    const [description, setDescription] = useState('');
    const [regNo, setRegNo] = useState('');
    const [isAgreed, setIsAgreed] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        if (!name || !email || !isAgreed || !phone || !subject || !description || !regNo) {
            console.log('All fields are required=>', { name, email, isAgreed, phone, subject, description, regNo });
            setError('All fields are required.');
            return;
        }
        const payload = {
            name,
            email,
            phone,
            subject,
            description,
            regNo,
        };

        setError('');
        try {
            const response = await fetch('https://dev.mossdekk.no/query.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ action: 'saveContact', payload }),
            });

            if (!response.ok) {
                throw new Error('Failed to subscribe. Please try again later.');
            }

            const data = await response.json();
            if (data.status === 'success') {
                console.log("Contact saved successfully:", data);
            } else {
                setError('Contact failed. Please try again.');
            }

            setName('');
            setEmail('');
            setPhone('');
            setSubject('');
            setDescription('');
            setRegNo('');
            setIsAgreed(false);
        } catch (error) {
            console.error("Error during subscription:", error);
            setError("afefefe");
        }
    };

    return (
        <div className="home-container flex flex-col">
            <Header />
            <main style={{ "width": '100%' }}>
                <div className="main-container flex flex-col justify-center w-[100%]">
                    <Main_Image />
                    <div className="google-map w-full">
                        <div className='relative w-full h-[655px] top-0 right-0 google-image'>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8109.663153793965!2d10.6886197!3d59.4594927!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf0c938655e220549!2sMoss%20Dekk%20AS!5e0!3m2!1sno!2sno!4v1591397614919!5m2!1sno!2sno"
                                style={{ objectFit: 'cover' }}
                                className='w-full h-full'
                            ></iframe>

                        </div>
                    </div>
                    <div className="contact-pan flex flex-col px-[208px] pt-[125px] pb-[132px] gap-[23px] bg-white">
                        <div className="contact-pan-title">
                            <p className="text-[#73c018] text-lg font-semi-bold font-['Inter'] leading-7">CONTACT US</p>
                        </div>
                        <div className="contact-pan-content flex flex-row gap-[122px]">
                            <div className="cpc-question flex flex-col gap-[40px]">
                                <div className="cpc-question-title">
                                    <p className="w-[310px] text-black text-4xl font-semi-bold font-['Inter'] leading-10">Have Questions? Get In Touch!</p>
                                </div>
                                <div className="cpc-question-contnet flex flex-col gap-[26px]">
                                    <div className="cpc-question-content-text">
                                        <p className="w-[680px] text-justify text-[#6d6d6d] text-lg font-normal font-['Inter'] leading-7">Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
                                    </div>
                                    <div className="cpc-question-content-item flex flex-col gap-[20px]">
                                        <div className="cpcqc-item-list flex flex-row items-center gap-[23px]">
                                            <Map_pin />
                                            <p className="text-justify text-[#6d6d6d] text-lg font-normal font-['Inter'] leading-7">Moss Dekk AS Skredderveien 5, 1537 Moss</p>
                                        </div>
                                        <div className="cpcqc-item-list flex flex-row items-center gap-[23px]">
                                            <Phone_Call_One />
                                            <p className="text-justify text-[#6d6d6d] text-lg font-normal font-['Inter'] leading-7">+47 45022450</p>
                                        </div>
                                        <div className="cpcqc-item-list flex flex-row items-center gap-[23px]">
                                            <Contact_mail />
                                            <p className="text-justify text-[#6d6d6d] text-lg font-normal font-['Inter'] leading-7">post@mossdekk.no</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <form onSubmit={handleSubmit} className="cpc-information-input flex flex-col gap-[66px]">
                                <div className="cpc-infor-input-pan gap-[55px] flex flex-col">
                                    <div className="cpc-iip-list responsive-cpc-iip-list flex flex-row gap-[28px]">
                                        <div className="flex w-full gap-[19px] items-center border-b border-[#aaaaaa] pb-[17px]">
                                            <Input_user />
                                            <input
                                                type="text"
                                                id="regNo"
                                                placeholder="Reg No"
                                                value={regNo}
                                                className="appearance-none bg-transparent border-none w-full text-[#6d6d6d] text-lg font-['Inter'] leading-tight focus:outline-none placeholder-[#6d6d6d]"
                                                onChange={(e) => setRegNo(e.target.value)}
                                                required={true}
                                            />
                                        </div>
                                    </div>
                                    <div className="cpc-iip-list flex flex-row gap-[28px]">
                                        <div className="flex w-[334px] gap-[19px] items-center border-b border-[#aaaaaa] pb-[17px]">
                                            <Input_user />
                                            <input
                                                type="text"
                                                id="name"
                                                placeholder="Name"
                                                value={name}
                                                className="appearance-none bg-transparent border-none w-full text-[#6d6d6d] text-lg font-['Inter'] leading-tight focus:outline-none placeholder-[#6d6d6d]"
                                                onChange={(e) => setName(e.target.value)}
                                                required={true}
                                            />
                                        </div>
                                        <div className="flex w-[334px] gap-[19px] items-center border-b border-[#aaaaaa] pb-[17px]">
                                            <Input_mail />
                                            <input
                                                type="email"
                                                id="email"
                                                placeholder="Email Address"
                                                value={email}
                                                className="appearance-none bg-transparent border-none w-full text-[#6d6d6d] text-lg font-['Inter'] leading-tight focus:outline-none placeholder-[#6d6d6d]"
                                                onChange={(e) => setEmail(e.target.value)}
                                                required={true}
                                            />
                                        </div>
                                    </div>
                                    <div className="cpc-iip-list flex flex-row gap-[28px]">
                                        <div className="flex w-[334px] gap-[19px] items-center border-b border-[#aaaaaa] pb-[17px]">
                                            <Input_phone />
                                            <input
                                                type="tel"
                                                id="phone"
                                                placeholder="Phone"
                                                value={phone}
                                                className="appearance-none bg-transparent border-none w-full text-[#6d6d6d] text-lg font-['Inter'] leading-tight focus:outline-none placeholder-[#6d6d6d] placeholder-text"
                                                onChange={(e) => setPhone(e.target.value)}
                                                required={true}
                                            />
                                        </div>
                                        <div className="flex w-[334px] gap-[19px] items-center border-b border-[#aaaaaa] pb-[17px]">
                                            <Input_alert />
                                            <input
                                                type="text"
                                                id="subject"
                                                placeholder="Subject"
                                                value={subject}
                                                className="appearance-none bg-transparent border-none w-full text-[#6d6d6d] text-lg font-['Inter'] leading-tight focus:outline-none placeholder-[#6d6d6d]"
                                                onChange={(e) => setSubject(e.target.value)}
                                                required={true}
                                            />
                                        </div>
                                    </div>
                                    <div className="cpc-iip-list responsive-cpc-iip-list flex flex-row gap-[28px]">
                                        <div className="flex flex-col w-full responsive-cpc-iip-list-item">
                                            <div className="cpc-iip-list-title flex items-center flex-row gap-[16px]">
                                                <Input_pen />
                                                <p className="text-justify text-[#6d6d6d] text-lg font-normal font-['Inter'] leading-7">How can we help you? Feel free to get in touch!</p>
                                            </div>
                                            <div className="flex w-full gap-[19px] items-center border-b border-[#aaaaaa] py-[17px]">
                                                <input
                                                    type="text"
                                                    id="description"
                                                    placeholder="Enter message here..."
                                                    value={description}
                                                    className="appearance-none bg-transparent border-none w-full text-[#6d6d6d] text-lg font-['Inter'] leading-tight focus:outline-none placeholder-[#6d6d6d]"
                                                    onChange={(e) => setDescription(e.target.value)}
                                                    required={true}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="cpc-infor-confirm-btn flex items-center flex-row gap-[48px]">
                                    <div className="w-[235px] h-[61px] p-2.5 bg-[#73c018] justify-center items-center gap-2.5 inline-flex">
                                        <div className="w-6 h-6 relative"><Send /></div>
                                        <button type="submit" className="text-justify text-white text-lg font-normal font-['Inter'] leading-7">GET IN TOUCH</button>
                                    </div>
                                    <div className="h-6 flex flex-row items-center gap-[7px]">
                                        <input
                                            type="checkbox"
                                            checked={isAgreed}
                                            onChange={(e) => setIsAgreed(e.target.checked)}
                                            className="form-checkbox h-5 w-5 text-blue-600"
                                            required={true}
                                        />
                                        <div className="text-justify flex flex-row"><p className="text-[#6d6d6d] text-base font-normal font-['Inter'] leading-normal">I agree with the site’s <Link className="text-[#6d6d6d] text-base font-normal font-['Inter'] underline leading-normal" href="/privacy">privacy policy.</Link></p></div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <Footer />
                </div>
            </main>
        </div>
    );
}
