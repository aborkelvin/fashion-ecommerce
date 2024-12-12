import { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownSection = () => {

    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 2); // Set target date 2 days from now

    const calculateTimeLeft = (): TimeLeft => {        
        const now = new Date();
        const difference = targetDate.getTime() - now.getTime(); // Use getTime() to get timestamps as numbers

        let timeLeft: TimeLeft = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
        };

        if (difference > 0) {
        timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const timerComponents = Object.keys(timeLeft).map((interval) => {
        const key = interval as keyof TimeLeft; // Explicitly type the key    
        return (        
            <div key={key} className="text-center bg-[#FEFEFE] p-3.5">            
                <p className="text-black-100 text-2xl font-bold">
                    {String(timeLeft[key]).padStart(2, '0')}
                </p>
            </div>    
        );
    });

  return (    
        <div className="bg-black-100 text-white flex flex-col-reverse md:flex-row items-center md:items-stretch justify-between">
            <div className="flex justify-center flex-1 w-full md:w-1/2">
                <img
                    src="/images/limited-glove.png"
                    alt="Golf gear"
                    className="w-full"
                />
            </div>
            <div className=" flex flex-col md:items-start flex-1 w-full md:max-w-1/2 px-4 phones:px-8 py-7 xl:px-0 xl:ml-[72px] xl:py-24 box-border overflow-hidden ">
                <p className="text-primary-green font-bold uppercase tracking-wider">Limited Edition</p>
                <h1 className="text-[34px] lg:text-[40px] font-medium font-Poppins mt-1">Hurry up! 30% OFF</h1>
                <p className="text-[#FEFEFE] text-sm lg:text-xl mt-1">Find clubs that are right for your game</p>
                <p className="text-[#FEFEFE] mt-4">Offer expires in:</p>
                <div className="flex space-x-4 mt-4">{timerComponents}</div>
                <button className="bg-primary-green text-black-100 font-bold py-2 px-10 rounded-lg mt-6 hover:bg-green-600 transition">
                    Shop now
                </button>
            </div>
        </div>
  );
};

export default CountdownSection;
