import { useEffect, useState } from "react";
import FooterAccordion from "./FooterAccordion";
import { FooterLinks } from "./FooterData";
import FooterMdScreen from "./FooterMdScreen";

function Footer() {

    const [width, setWidth] = useState(window.innerWidth);
    const breakpoint = 768;

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth)
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
      <footer id="footer" className="mt-4 bg-stone-50">
        <div className="container px-8 mx-auto text-stone-600">
          <div className="py-6 text-sm border-b border-stone-500">
            <ul style={{ fontSize: "12px" }}>
              <li>
              사업자등록번호 : 120-81-84429 | 통신판매업신고번호 : 제 2011-서울강남-00810호
              </li>
            </ul>
            <ol style={{ listStyle: "decimal" }}>
              {/* 숫자 표시 */}
              <li>

              </li>

            </ol>
          </div>

          {width > breakpoint ? <FooterMdScreen /> : <FooterAccordion />}

          <div className="py-2">
            <p style={{ fontSize: "12px" }}>
              다양한 쇼핑 방법:
              <a
                className="text-blue-500 hover:underline"
                href="https://www.apple.com/kr/retail/"
              >
                Apple Store를 방문
              </a>
              하거나
              <a
                className="text-blue-500 hover:underline"
                href="https://locate.apple.com/kr/ko"
              >
                리셀러
              </a>
              를 찾아보거나, 080-330-8877번으로 전화하세요.
            </p>
          </div>

          <div className="flex flex-col py-2 text-sm md:flex-col md:justify-between md:items-start md:border-t border-stone-300">
            <a
              href="https://www.apple.com/choose-country-region/"
              className="hover:underline"
              style={{ fontSize: "12px" }}
            >
              대한민국
            </a>
            <div className="flex flex-col py-2 text-sm md:flex-row lg:gap-10">
              <p style={{ fontSize: "12px" }}>
                Copyright © 2024 Apple Inc. 모든 권리 보유.
              </p>
              <ul className="flex gap-3" style={{ fontSize: "10px" }}>
                {FooterLinks.map((item) => {
                  return (
                    <li key={item.id}>
                      <a className="hover:underline" href={item.link}>
                        {item.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
}

export default Footer;