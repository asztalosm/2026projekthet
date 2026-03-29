'use client'

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Overpass_Mono } from "next/font/google";
import { useRef } from "react";
import { ScrollSmoother }from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";


const OverpassMono = Overpass_Mono({
    subsets: ['latin'],
    display: 'fallback',
    weight: "700"
})

export default function Title() {
    gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
    ScrollSmoother.create(
        {
            content: "#smooth-content",
            wrapper: "#smooth-wrapper",
            smooth:1,
            effects:true,
            smoothTouch:0.1,
        }
    )
    const titleRef = useRef(null)
    const titleBGRef = useRef(null)
    const titleImageRefHolder = useRef(null)
    useGSAP(() => {
        let timeline = gsap.timeline();
        timeline.fromTo((titleBGRef.current), {x: -50, scaleX: 0, skewX:("0deg")}, {scaleX:1.1, skewX:("-3deg"), transformOrigin: "left"})
        timeline.fromTo((titleRef.current), {scaleX: 0}, {scaleX: 1, ease:"circ.out", duration:0.8, transformOrigin: "right"})
        timeline.fromTo((titleImageRefHolder.current), {scaleX: 0}, {scaleX: 1, transformOrigin: "left"}, "<")
        //timeline.fromTo((titleImageRef.current), {scaleX: 0, scaleY: 1}, {scaleX: 1, scaleY: 1, ease:"circ.out", duration:0.8, transformOrigin: "left"}, "<")
        /*
        timeline.from((titleRef.current), {scaleY: 0, transformOrigin: "bottom"})
        timeline.to((titleRef.current), {scaleY: 1, scaleX: 0, duration:0.7, ease:"circ.out"});
        timeline.from((titleRef.current), {scaleX: 0.3, transformOrigin: "right"})
        timeline.to((titleRef.current), {scaleX: 1, duration:5, ease:"expo.out"}, '+=0.5');
        */
        }, []);


    return (
        <div>
            <div id="smooth-wrapper">
                <div id="smooth-content">

                    <div id="titleContainer">
                        <div id="titleSecondBG" ref={titleBGRef}>
                            <div id="titleBG">
                                <h1 className={OverpassMono.className} id="title" ref={titleRef}>A MESTERSÉGES<br />INTELLIGENCIA</h1>
                            </div>
                        </div>

                        <div id="titleImageHolder" ref={titleImageRefHolder}>
                            <img src="/titleBackground.jpg" id="titleImage" className="hueOverlay"/>
                        </div>
                    </div>

                    <div id="bodyContainer">
                        gdfngbkdsfhg<br />
                        gdfngbkdsfhg<br />
                        gdfngbkdsfhg<br />
                        gdfngbkdsfhg<br />
                        gdfngbkdsfhg<br />
                        gdfngbkdsfhg<br />
                        gdfngbkdsfhg<br />
                        gdfngbkdsfhg<br />
                        gdfngbkdsfhg<br />
                        gdfngbkdsfhg<br />
                        gdfngbkdsfhg<br />
                        gdfngbkdsfhg<br />
                        gdfngbkdsfhg<br />
                        gdfngbkdsfhg<br />
                        gdfngbkdsfhg<br />
                        gdfngbkdsfhg<br />
                        gdfngbkdsfhg<br />
                        gdfngbkdsfhg<br />
                        gdfngbkdsfhg<br />
                        gdfngbkdsfhg<br />v
                    </div>

                </div>
            </div>
        </div>
    )
}