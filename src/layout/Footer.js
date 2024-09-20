import { useEffect, useState } from "react";
import FooterAccordion from "./FooterAccordion";
import { FooterLinks } from "./FooterData";
import FooterMdScreen from "./FooterMdScreen";

function Footer() {

    const [width, setWidth] = useState(window.innerWidth);
    const breakpoint = 760;

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth)
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
      <footer id="footer" className="mt-4 bg-stone50">
        <div className="container px-8 mx-auto text-stone-600">
          <div className="py-6 text-sm border-b border-stone-500">
            <ul style={{ fontSize: "12px" }}>
              <li>
                사업자등록번호 : 120-81-84429 | 통신판매업신고번호 : 제
                2011-서울강남-00810호
                <br />
                대표이사 : PETER DENWOOD | 주소 : 서울 특별시 강남구 영동대로
                517
                <br />
                대표전화 : 080-330-8877 | 팩스 : 02-6928-0000
                <br />
                <br />
                ⁺ 신규 구독자에게만 적용됩니다. 무료 혜택 기간 종료 이후에는 월
                8,900원의 요금이 청구됩니다. 본 프로모션은 한정된 기간 동안
                진행되며, 적용 대상 새 기기를 구입한 Apple Music 신규
                구독자에게만 적용됩니다. 적용 대상 오디오 기기에 대해 혜택을
                이용하려면 iOS 또는 iPadOS 최신 버전을 설치한 Apple 기기와
                연결하거나 페어링해야 합니다. Apple Watch에 대해 혜택을
                이용하려면 iOS 최신 버전을 설치한 iPhone에 연결하거나 페어링해야
                합니다. 무료 체험 혜택은 적용 대상 기기 활성화 이후 3개월 안에
                신청할 수 있습니다. 구입한 적용 대상 기기 수에 상관없이, 무료
                체험 혜택은 Apple ID당 한 번만 제공됩니다. 구독은 취소할 때까지
                자동으로 갱신됩니다. 특정 제한 사항 및 기타 약관(새 창에서
                열림)이 적용됩니다.
                <br />
                <br />
                ° Apple TV+ 이용을 위해서는 구독이 필요합니다.
                <br />
                <br />
                1. 보상 판매 금액은 보상 판매되는 제품의 상태, 연도, 구성에 따라
                달라집니다. 일부 기기는 보상 판매 대상이 아닙니다. 크레딧 또는
                Apple Store Gift Card로 보상 판매를 받으려면 19세 이상이어야
                합니다. 보상 판매 금액은 적용 가능한 새 기기 구입 시 적용하거나
                Apple Store Gift Card로 받을 수 있습니다. 최종 확정 금액은 보상
                판매 대상 기기를 수령한 후, 예상 금액 산정 시 제시한 기기의
                설명과 일치하는지 비교 검수 후 정해집니다. 부가세는 새로 구입한
                기기의 총액을 바탕으로 부과됩니다. 매장에서 보상 판매를 받으려면
                사진이 부착된 유효한 신분증이 필요합니다(현지 법률에 따라 해당
                정보를 저장해야 할 수 있음). 일부 매장에서는 보상 판매를
                제공하지 않으며, 매장 내 보상 판매와 온라인 보상 판매 프로그램
                간 내용에 차이가 있을 수 있습니다. 일부 매장은 추가 요구 사항이
                있을 수 있습니다. Apple 또는 보상 판매 파트너사는 어떤 보상
                판매도 거래를 거부하거나, 보상 판매 수량을 제한할 권리를
                보유합니다. 적용 가능 기기의 보상 판매 및 재활용에 대한 자세한
                내용은 Apple의 보상 판매 파트너사에서 확인할 수 있습니다. 규제
                및 제한이 적용될 수 있습니다.
                <br />
                <br />
                2.
                <strong>이용 약관 </strong>
                위 할부 서비스는 Apple Online Store, Apple 전화 판매 및 Apple 리테일 매장에서 구입하는 경우에만 이용할 수 있습니다.<br />
                할부 서비스는 신용 카드 발급사인 신한, BC, KB, NH, 롯데, 삼성, 현대, 하나, KEB 및 시티은행에서 제공합니다. 모든 할부 구입은 신용 카드 발급사의 승인을 받아야 합니다. 신용 카드 발급사에서 할부 구입을 승인해 주지 않는 경우에도 Apple 직원에게 승인 거부 사유가 전달되지 않습니다. 할부 구입에 대한 승인 결과는 신용 카드 발급사에 문의하십시오. 할부 조건, 수수료, 청구액 등은 신용 카드 발급사에 문의하십시오. 청구액은 카드 명세서에 표시됩니다.
                <br />
                할부 서비스를 이용하려면 한국 거주자여야 합니다.
                <br />
                할부 서비스를 이용하려면 구입 시 현지 발급 신용 카드 또는 현지 발급 제휴 카드(Visa, Mastercard, AMEX, China Union Pay)를 사용해야 합니다. 해외 신용 카드(한국 외 다른 국가 또는 지역에서 발급 받은 신용 카드), 직불/체크 카드 및 현지 발급/제휴 법인 카드는 할부 서비스를 이용할 수 없습니다. 할부는 광고 가격 또는 정찰 가격을 기준으로 합니다. 모든 주문 제품은 무료 배송됩니다.
                <br />
                이 정보는 2021년 03월 16일 기준 최신 정보입니다.
                <br />
                <br />
                3. 특별 할인가는 이용 자격을 갖춘 고객에게 적용됩니다. 특별 할인 혜택을 받는 방법에 관한 자세한 내용은 매장 내 Apple 스페셜리스트에게 문의하거나 080-330-8877에 전화로 문의하시기 바랍니다.
                <br />
                <br />
                보다 오래 안심할 수 있도록. 이제 AppleCare+가 우발적인 손상에 대한 수리 서비스를 횟수 제한 없이 제공합니다.
              </li>
            </ul>
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