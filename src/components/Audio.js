import { useRef,useState,useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faVolumeXmark} from "@fortawesome/free-solid-svg-icons";
import LottieMusicAnimated from '@/components/LottieMusicAnimated';
import mainAudio from '@/assets/mainAudio.mp3';

export const Audio = ({ isPlayingProp,audioRef,handlePause,handlePlay }) => {
    return (
        <>
        <div className=" z-50 fixed right-2 md:right-auto w-none md:w-[400px] flex items-end justify-end  bottom-[8rem] ">
        <audio ref={audioRef} src={mainAudio} autoPlay loop />
            {isPlayingProp ? (
                <button onClick={handlePause} className="flex items-center justify-center w-10 h-10 mx-2 border rounded-full shadow-xl bg-gradient-to-t from-black to-gray-900">
                    <LottieMusicAnimated />
                </button>
            ) : (
                <button onClick={handlePlay} className="flex items-center justify-center w-10 h-10 mx-2 border rounded-full shadow-xl bg-gradient-to-b from-black to-gray-900">
                    <FontAwesomeIcon className="text-sm text-primary-300" icon={faVolumeXmark} />
                </button>
            )}
        </div>
        </>
    )
}

