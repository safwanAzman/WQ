import { useRef,useState,useEffect } from 'react';
import { Inter } from 'next/font/google';
import { BottomTab } from '@/components/BottomTab';
import { Audio } from '@/components/Audio';
import { Section1 } from '@/components/section/Section1';
import { Section2 } from '@/components/section/Section2';
import { Section3 } from '@/components/section/Section3';
import { Section4 } from '@/components/section/Section4';
import { Section5 } from '@/components/section/Section5';
import { Section6 } from '@/components/section/Section6';
import { Section7 } from '@/components/section/Section7';
import Swal from 'sweetalert2';
import { ToastContainer } from 'react-toastify';



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(null);

  useEffect(() => {
    const showConfirmationDialog = async () => {
      try {
        const result = await Swal.fire({
          html: `
            <div>
                <h1 class="text-2xl font-bold">
                    sila matikan<br>
                    ~ DARK MODE ~
                </h1>
                <p class="pt-2 text-sm font-medium">pada “setting browser” anda untuk <span class="text-green-700"><br>TAMPILAN TERBAIK</span>, JIKA anda gunakan peranti :</p>
                <div class="border-y-[0.5px] p-4 flex items-center justify-center space-x-2 mt-4 text-sm font-bold text-orange-900 border-gray-400" >
                    "Samsung | Vivo | Huawei | Oppo"
                </div>
            </div> 
        `,
          icon: 'info',
          showCancelButton: false,
          confirmButtonText: 'Ok',
          cancelButtonText: 'No',
          allowOutsideClick: false,
        });

        if (result.isConfirmed) {
          handlePlay();
        }
      } catch (error) {

      }
    };
    showConfirmationDialog();
  }, []);

  
  const handlePlay = () => {
      audioRef.current.play();
      setIsPlaying(true);
  };

  const handlePause = () => {
      audioRef.current.pause();
      setIsPlaying(false);
  };
  
  return (
    <main className="flex justify-center min-h-screen bg-gray-100">
      <div className="container relative max-w-[26rem] p-0 mx-auto" >
      <ToastContainer autoClose={3000}/>
        <div className="relative bg-white shadow-xl">
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
    </main>
  )
}
