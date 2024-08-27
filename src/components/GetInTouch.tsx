import React from 'react';
import { useState } from 'react';
export default function GetInTouch() {
    const [subscribemail, setSubscribeEmail] = useState('');
    const [error, setError] = useState('');

    const onClickSubscribe = async () => {
        if (!subscribemail) {
            console.log('All fields are required=', subscribemail)
            setError('All fields are required.');
            return;
        }

        const payload = {
            subscribemail
        }
        setError('');
        try {

            const response = await fetch('api/send_subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ action: 'sendSubscribe', payload }),
            });

            if (!response.ok) {
                throw new Error('Failed to subscribe. Please try again later.');
            }

            const data = await response.json();
            if (data.status === 'success') {
                console.log("Subscribed successfully:", data);
            } else {
                setError('Subscription failed. Please try again.');
            }

            setSubscribeEmail('');
        } catch (error) {
            console.error("Error during subscription:", error);
            setError("afefefe");
        }
    }
    return (
        <div className='flex flex-row justify-between items-center py-[99.5px] px-[206.5px] get-in-touch'>
            <div className='flex flex-col gap-[24px] gint-header'>
                <div className="w-[212px] text-white text-4xl font-semibold font-['Inter'] leading-10 gint-title">Get in touch</div>
                <div className="w-[552px] text-white text-lg font-normal font-['Inter'] leading-7 gint-text">Be the first to know about new products, sales and promotions.</div>
            </div>
            <div className="w-[767px] h-[68px] relative gint-input">
                <input onChange={(e) => setSubscribeEmail(e.target.value)} value={subscribemail} style={{ "fontSize": "16px", }} className="w-[767px] h-[68px] py-[22px] px-[23px] text-black bg-[#fefefe] rounded-[50px] focus:outline-none sm:text-sm placeholder-gray-400" type='text' placeholder='Your email' />
                <div className="w-[201.94px] h-[68px] p-2.5 left-[565.06px] top-0 absolute bg-[#73c018] rounded-[120px] justify-center items-center gap-2.5 inline-flex gint-send-btn">
                    <button onClick={onClickSubscribe} className="text-white text-lg font-normal font-['Inter'] leading-7">Subscribe</button>
                </div>
            </div>
        </div>
    );
};

