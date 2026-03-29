'use client'

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Archivo_Black, Overpass_Mono } from "next/font/google";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother }from "gsap/ScrollSmoother";
import { ChevronDown } from "lucide-react";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

const OverpassMono = Overpass_Mono({
    subsets: ['latin'],
    display: 'fallback',
    weight: "700"
})
const archivoBlack = Archivo_Black({
    subsets: ['latin'],
    display:"swap",
    weight: "400"
})


export default function Title() {
    gsap.registerPlugin(ScrollSmoother, ScrollTrigger, ScrollToPlugin);
    const titleRef = useRef(null)
    const titleBGRef = useRef(null)
    const titleImageRefHolder = useRef(null)
    const approachRef = useRef(null)
    const imageGenTitle = useRef(null)
    const imageGenText = useRef(null)
    const videoGenTitle = useRef(null)
    const videoGenText = useRef(null)
    const textGenTitle = useRef(null)
    const textGenText = useRef(null)
    useGSAP(() => {
        ScrollSmoother.create(
            {
                content: "#smooth-content",
                wrapper: "#smooth-wrapper",
                smooth:1,
                effects:true,
                smoothTouch:0.1,
            }
        )
        gsap.fromTo(('#chevronFloat'), {y: -10}, {y: 10, repeat:-1, duration:1, yoyo:true, ease:"circ.inOut"})
        let timeline = gsap.timeline();
        timeline.fromTo((titleBGRef.current), {x: -50, scaleX: 0, skewX:("0deg")}, {scaleX:1.1, skewX:("-3deg"), transformOrigin: "left"})
        timeline.fromTo((titleRef.current), {scaleX: 0}, {scaleX: 1, ease:"circ.out", duration:0.8, transformOrigin: "right"})
        timeline.fromTo((titleImageRefHolder.current), {xPercent: -200}, {xPercent: 0, transformOrigin: "left"}, "<")
        gsap.fromTo(('#approachTitle'), {scaleY: 0}, {scaleY:1, ease:"power1", duration:0.6, transformOrigin: "left", scrollTrigger:'#approachContainer'})
        gsap.fromTo(('#supervised'), {yPercent: 100}, {yPercent: 0, scrollTrigger: '#approaches', duration:0.2, ease:"power2"})
        gsap.fromTo(('#unsupervised'), {yPercent: 100}, {yPercent: 0, scrollTrigger: '#approaches', duration:1.0, ease:"power2"})
        gsap.fromTo(('#reinforced'), {yPercent: 100}, {yPercent: 0, scrollTrigger: '#approaches', duration:1.5, ease:"power2"})
        gsap.fromTo((imageGenTitle.current), {xPercent: -100}, {xPercent: -5, duration:0.5, scrollTrigger: '#imageGenTitle', transformOrigin: 'left', ease:"power2", skewX:("-25deg")})
        gsap.fromTo((imageGenText.current), {xPercent: 100}, {xPercent: 5, delay:0.5, duration:0.8, scrollTrigger: '#imageGenTitle', transformOrigin: 'right', ease:"power2", skewX:("-25deg")})
        gsap.fromTo((videoGenTitle.current), {xPercent: -100}, {xPercent: -5, delay:1.0, duration:0.5, scrollTrigger: '#imageGenTitle', transformOrigin: 'left', ease:"power2", skewX:("-25deg")})
        gsap.fromTo((videoGenText.current), {xPercent: 100}, {xPercent: 5, delay:1.5, duration:0.8, scrollTrigger: '#imageGenTitle', transformOrigin: 'right', ease:"power2", skewX:("-25deg")})
        gsap.fromTo((textGenTitle.current), {xPercent: -100}, {xPercent: -5, delay:2.0, duration:0.5, scrollTrigger: '#imageGenTitle', transformOrigin: 'left', ease:"power2", skewX:("-25deg")})
        gsap.fromTo((textGenText.current), {xPercent: 100}, {xPercent: 5, delay:2.5, duration:0.8, scrollTrigger: '#imageGenTitle', transformOrigin: 'right', ease:"power2", skewX:("-25deg")})
        gsap.fromTo(('#card1'), {scaleY: 0}, {scaleY: 1, transformOrigin:"bottom", duration:1.2, ease:"power2", scrollTrigger: "#card1"})
        gsap.fromTo(('#card2'), {scaleY: 0}, {scaleY: 1, transformOrigin:"bottom", delay:0.6, duration:1.2, ease:"power2", scrollTrigger: "#card1"})
        gsap.fromTo(('#card3'), {scaleY: 0}, {scaleY: 1, transformOrigin:"bottom", delay:1.2, duration:1.2, ease:"power2", scrollTrigger: "#card1"})
        gsap.fromTo(('#solutionTitle'), {scaleX: 0}, {scaleX: 1, transformOrigin:"left", delay:0.4, duration:1.2, ease:"power2", scrollTrigger: "#solutionTitle"})
        gsap.fromTo(('#solutionText'), {scaleX: 0}, {scaleX: 1, transformOrigin:"right", delay:0.4, duration:1.2, ease:"power2", scrollTrigger: "#solutionText"})
        }, []);

    const jumpToApproaches = () => {
        gsap.to(window, {scrollTo: "#approachContainer", duration: 1, ease: "power2.out",});
    }

    return (
        <div>
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    {/*Title*/}
                    <div id="titleOverlay">
                        <div id="titleContainer">
                            <div id="titleSecondBG" ref={titleBGRef}>
                                <div id="titleBG">
                                    <h1 className={archivoBlack.className} id="title" ref={titleRef}>A MESTERSÉGES<br />INTELLIGENCIA</h1>
                                </div>
                                <button type="button" onClick={jumpToApproaches} id="chevronFloat">
                                    <ChevronDown width={48} height={48}/>
                                </button>
                            </div>
                            <div id="titleImageHolder" ref={titleImageRefHolder}>
                                <img src="/titleBackground.png" id="titleImage" className="hueOverlay"/>
                            </div>
                        </div>
                    </div>

                    {/*Approaches*/}
                    <div id="approachContainer">    
                        <h1 className={OverpassMono.className} id="approachTitle">AI TANULÁSI MÓDOK</h1>
                        <div id="approaches" ref={approachRef}>
                            <div className="approach" id="supervised">
                                <h1 className={archivoBlack.className}>FELÜGYELT</h1>
                                <p className={OverpassMono.className}>Tartalmazza a kívánt eredményt, és a bemenetet, ezt nevezzük edzési adatnak. Az így edzett model, ezt az adatot használja új kimenetek kiszámítására. Ezt főleg jóslásokra, és minősítésre használják.</p>
                            </div>
                            <div className="approach" id="unsupervised">
                                <h1 className={archivoBlack.className}>FELÜGYELETLEN</h1>
                                <p className={OverpassMono.className}>Hasonló a felügyelt tanuláshoz bemenet és kimenet terén, azonban itt az eredmény nincsen kategorizálva. Főleg képgenerálásnál alkalmazzák összekötve egy autoencoderrel és diffuzió modellel.</p>
                            </div>
                            <div className="approach" id="reinforced">
                                <h1 className={archivoBlack.className}>MEGERŐSÍTÉSES</h1>
                                <p className={OverpassMono.className}>Megadott bemeneteket a semmiből kezd el használni, egy értelmezőrendszer pontokat oszt ki a helyes kimenetekért. Ez egy nagyon általános módja a tanulásnak, szinte mindenhol alkalmazható.</p>
                            </div>
                        </div>
                    </div>
                    <h1 className={OverpassMono.className} id="typesTitle">FŐBB AI TÍPUSOK</h1>
                    <div className="typesContainer">
                        <div className="typeTitleContainer" ref={imageGenTitle}>
                            <h1 id="imageGenTitle" className={`${OverpassMono.className} typeTitle`}>KÉP GENERÁLÁS</h1>
                        </div>
                        <div className="typeTextContainer" ref={imageGenText}>
                            <p id="imageGenText" className={`${OverpassMono.className} typeText`}>
                               Sokan azt hiszik, az AI csak összevág darabokat meglévő képekből, mint egy kollázst, de ez tévedés. Zaj a kiindulási pont, ezt kezdi el úgy alakítani, hogy egy kép legyen belőle.
                            </p>
                        </div>
                    </div>
                    <div className="typesContainer">
                        <div className="typeTitleContainer" ref={videoGenTitle}>
                            <h1 className={`${OverpassMono.className} typeTitle`}>VIDEO GENERÁLÁS</h1>
                        </div>
                        <div className="typeTextContainer" ref={videoGenText}>
                            <p className={`${OverpassMono.className} typeText`} >
                               A legnehezebbben létrehozható AI tartalom. A kép elkészítése a legkisebb probléma, az AI-nak ki kell találnia, hogy hogyan fog a fizika hatni az elkészített videóban. És mivel csak másol, és nem érti meg, ezért nem tud realisztikus videókat készíteni.
                            </p>
                        </div>
                    </div>
                    <div className="typesContainer">
                        <div className="typeTitleContainer" ref={textGenTitle}>
                            <h1 className={`${OverpassMono.className} typeTitle`}>SZÖVEG GENERÁLÁS</h1>
                        </div>
                        <div className="typeTextContainer" ref={textGenText}>
                            <p className={`${OverpassMono.className} typeText`} >
                               Leggyakoribb fajtája annak amit manapság AI-nak nevezünk. Másik ismert neve az LLM. Koordináta rendszerben tárolva vannak szavak. A kontextus és beszédstílus alapján megkeresi a legközelebbi szövegbe illő szót, és azt jeleníti meg. 
                            </p>
                        </div>
                    </div>

                    <h1 className={OverpassMono.className} id="typesTitle">A GYENGE LLM</h1>
                    {/* Split harsh layout */}
                    <div className="brutalGrid">
                        <div className="brutalCard" id="card1">
                            <h1 className={archivoBlack.className}>01</h1>
                            <p className={OverpassMono.className}>
                            Nem gondolkoznak, amelyik igen, az se emlékszik arra amire gondolt. Legtöbb nyílt modelen, amely gondolkodással rendelkezik, nem tud hozzáférni a saját "gondolataihoz".
                            </p>
                        </div>
                        <div className="brutalCard" id="card2">
                            <h1 className={archivoBlack.className}>02</h1>
                            <p className={OverpassMono.className}>
                            Hallucinációk. Túlságosan "magabiztosak" az LLM-ek, mivel nincsen olyan tudása amivel le tudná ellenőrizni magát, ezért, hogy minél segítőkészebb legyen, hamis információt ad.
                            </p>
                        </div>
                        <div className="brutalCard" id="card3">
                            <h1 className={archivoBlack.className}>03</h1>
                            <p className={OverpassMono.className}>
                            Önelégültséget, lustaságot okoz. Kritikus gondolkozást lassan leváltja az, hogy az emberek az LLM-eket kérdezik. Hatékonyság tagadhatatlan, azonban ha a forrás megmérgeződik, akkor az aki fogyaszt belőle is meg lesz mérgezve. Fontos, hogy ne vegyük szent írásként azt amit egy számítógép mond.
                            </p>
                        </div>
                    </div>

                    {/* Brutalist Divider */}
                    <div className="brutalDivider" id="solutionTitle">
                        <h1 className={archivoBlack.className}>A MEGOLDÁS</h1>
                    </div>

                    {/* Big statement block */}
                    <div className="brutalSection" id="solutionText">
                        <h1 className={archivoBlack.className}>
                            AGENTIC MODELS
                        </h1>
                        <p className={OverpassMono.className}>
                            Az "Ügynök" modelek gondolkodnak, futtatnak, maguktól cselekednek. Önállóságuk miatt kevesebb felhasználói beavatkozásra van szükség, de ezek is hibázhatnak. Több esetben is töröltek ki egész kódbázisokat véglegesen.
                        </p>
                    </div>


                    {/* Offset text blocks */}
                    <div className="brutalOffset">
                    <div className="left">
                        <h1 className={archivoBlack.className}>
                            <a href="/aiDemo">AI DEMO MEGTEKINTÉSE</a>
                        </h1>
                    </div>
                    <div className="right">
                        <p className={OverpassMono.className}>
                        Használt források: Wikipédia <br />
                        <a href="/LLMComparisons.png">LLM összehasonlítás</a>
                        </p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}