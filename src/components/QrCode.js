import React from "react";
import qrimage from '../assets/qrimage.png'

const QrCode = () => {
    return <>
        <div className="bg-indigo-100 h-screen flex items-center justify-center">
            <div className="p-2 bg-white w-52 rounded-xl shadow-lg">
                <img src={qrimage} alt="img" className="w-full h-48 object-cover rounded-md "/>
                <div className="my-3 text-center">
                    <h1 className=" px-2 font-bold text-sm">Improve your front-end skills by building projects</h1>
                    <p className="text-xs mt-2 text-gray-400">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
                </div>
            </div>
        </div>
        <div className="attribution absolute bottom-0 w-full flex items-center justify-center">
            Challenge by<a href="https://www.frontendmentor.io?ref=challenge" target="_blank">&nbsp;Frontend Mentor</a>.
            Coded by&nbsp;<a href="#">&nbsp;Patience Asare</a>.
        </div>
    </>

}

export default QrCode