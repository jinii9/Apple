import { useState } from "react";
import { AboutApple, AppleStore, Services, ShopAndLearn } from "./FooterData";
import '../assets/footer.css';

function FooterAccordion() {
    const [accordion1, setAccordion1] = useState(false);
    const [accordion2, setAccordion2] = useState(false);
    const [accordion3, setAccordion3] = useState(false);
    const [accordion4, setAccordion4] = useState(false);

    function handleClick1() {
        setAccordion1(!accordion1);
    }

    function handleClick2() {
        setAccordion2(!accordion2);
    }

    function handleClick3() {
        setAccordion3(!accordion3);
    }

    function handleClick4() {
        setAccordion4(!accordion4);
    }

    return (
        <div className="mt-4 text-stone-600">
            <div className="py-2 border-b border-stone-300">
                <div onClick={handleClick1} className="flex justify-between text-sm cursor-pointer hover:text-black">
                    <h2>쇼핑 및 알아보기</h2>
                    <span className={`font-bold icon ${accordion1 ? 'open' : ''}`}>∨</span>
                </div>
                <div className={(accordion1 ? "flex" : "hidden") + " flex-col gap-2 px-8 py-2 text-sm"}>
                    {ShopAndLearn.map(item => (
                        <ul key={item.id}>
                            <li>
                                <a className="hover:underline" href={item.link}>{item.name}</a>
                            </li>
                        </ul>
                    ))}
                </div>
            </div>

            <div className="py-2 border-b border-stone-300">
                <div onClick={handleClick2} className="flex justify-between text-sm cursor-pointer hover:text-black">
                    <h2>엔터테인먼트</h2>
                    <span className={`font-bold icon ${accordion2 ? 'open' : ''}`}>∨</span>
                </div>
                <div className={(accordion2 ? "flex" : "hidden") + " flex-col gap-2 px-8 py-2 text-sm"}>
                    {Services.map(item => (
                        <ul key={item.id}>
                            <li>
                                <a className="hover:underline" href={item.link}>{item.name}</a>
                            </li>
                        </ul>
                    ))}
                </div>
            </div>

            <div className="py-2 border-b border-stone-300">
                <div onClick={handleClick3} className="flex justify-between text-sm cursor-pointer hover:text-black">
                    <h2>Apple Store</h2>
                    <span className={`font-bold icon ${accordion3 ? 'open' : ''}`}>∨</span>
                </div>
                <div className={(accordion3 ? "flex" : "hidden") + " flex-col gap-2 px-8 py-2 text-sm"}>
                    {AppleStore.map(item => (
                        <ul key={item.id}>
                            <li>
                                <a className="hover:underline" href={item.link}>{item.name}</a>
                            </li>
                        </ul>
                    ))}
                </div>
            </div>

            <div className="py-2 border-b border-stone-300">
                <div onClick={handleClick4} className="flex justify-between text-sm cursor-pointer hover:text-black">
                    <h2>Apple 정보</h2>
                    <span className={`font-bold icon ${accordion4 ? 'open' : ''}`}>∨</span>
                </div>
                <div className={(accordion4 ? "flex" : "hidden") + " flex-col gap-2 px-8 py-2 text-sm"}>
                    {AboutApple.map(item => (
                        <ul key={item.id}>
                            <li>
                                <a className="hover:underline" href={item.link}>{item.name}</a>
                            </li>
                        </ul>
                    ))}
                </div>
            </div>
        </div>  
    )
}

export default FooterAccordion;