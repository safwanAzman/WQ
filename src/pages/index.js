import { useRef,useState,useEffect } from 'react';
import { Inter } from 'next/font/google';
import Image from 'next/image';
import { BottomTab } from '@/components/BottomTab';
import { Audio } from '@/components/Audio';
import { Section1 } from '@/components/section/Section1';
import { Section2 } from '@/components/section/Section2';
import { Section3 } from '@/components/section/Section3';
import { Section4 } from '@/components/section/Section4';
import { Section5 } from '@/components/section/Section5';
import { Section6 } from '@/components/section/Section6';
import { Section7 } from '@/components/section/Section7';
import {faHandPointRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ToastContainer } from 'react-toastify';

import Splash1 from '@/assets/splash/1.jpg';
import Splash2 from '@/assets/splash/2.jpg';
import Splash3 from '@/assets/splash/3.jpg';
import Splash4 from '@/assets/splash/4.jpg';
import Splash5 from '@/assets/splash/5.jpg';
import Splash6 from '@/assets/splash/6.jpg';
import Splash7 from '@/assets/splash/6.jpg';
import Splash8 from '@/assets/splash/8.jpg';
import Splash9 from '@/assets/splash/9.jpg';
import Splash10 from '@/assets/splash/10.jpg';



const inter = Inter({ subsets: ['latin'] })

const images = [Splash1, Splash2, Splash3, Splash4, Splash5, Splash6, Splash7, Splash8, Splash9,Splash10];

export default function Home() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [showBlackScreen, setShowBlackScreen] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentPercentage, setCurrentPercentage] = useState(10);
  


  useEffect(() => {
    if (currentImageIndex === images.length - 1) {
        return;
      }
  
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setCurrentPercentage((prevPercentage) => prevPercentage + 10);
      }, 280);
  
      return () => {
        clearInterval(interval);
      };
  }, [currentImageIndex]);


  const handleOpenButtonClick = () => {
    setShowBlackScreen(false);

    if(showBlackScreen == false){
      handlePlay();
    }
  };
  
  const handlePlay = () => {
      audioRef.current.play();
      setIsPlaying(true);
  };

  const handlePause = () => {
      audioRef.current.pause();
      setIsPlaying(false);
  };
  
  return (
    <main className="flex justify-center min-h-screen bg-black">
      {showBlackScreen && (
      <div className="fixed inset-0 flex flex-col items-center justify-center h-screen p-4 bg-black">
        <div className="relative text-white">
          <Image
            src={images[currentImageIndex]}
            alt="Image"
            className={`w-auto rounded-3xl h-96`}
            width=""
            height=""
            priority
          />
          <div className="absolute inset-0 flex items-center justify-center text-xl font-bold text-white bg-black/50 myFont">
            <h1>{currentPercentage}%</h1>
          </div>
        </div>
        {currentPercentage === 100 && (
            <button
              className="flex items-center justify-center px-4 py-2 mt-6 space-x-2 text-sm text-white border rounded-lg"
              onClick={handleOpenButtonClick}
            >
              <div className="animate__animated animate__swing animate__infinite">
                  <FontAwesomeIcon className="mr-3 text-xl text-white " icon={faHandPointRight} />
              </div>
              Open Card
            </button>
          )}
      </div>
    )}
    
    {!showBlackScreen && (
      <div className="container relative max-w-[26rem] p-0 mx-auto" >
        <ToastContainer autoClose={3000}/>
        <div className="relative bg-black shadow-xl">
            <Audio
              isPlayingProp={isPlaying}
              audioRef={audioRef}
              handlePause={handlePause}
              handlePlay={handlePlay}
            />
            <Section1/>
            <Section2/>
            <Section3/>
            <Section4/>
            <Section5/>
            <Section6/>
            <Section7/>
            <BottomTab/>
        </div>
      </div>
      )}

    </main>
  )
}
