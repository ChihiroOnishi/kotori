import React from 'react';
import { BiCookie, BiFootball } from 'react-icons/bi';
import { RiBus2Line, RiPencilRulerLine } from 'react-icons/ri';
import { IoColorPaletteOutline, IoDesktopOutline } from 'react-icons/io5';
import { GrDocumentPdf } from "react-icons/gr";
import { ServicesCard, ServicesContainer, ServicesH1, ServicesH2, ServicesIcon, ServicesP, ServicesWrapper, GuidelineWrapper, GuidelineDate, GuidelineLinkRouter, Discription } from './ServicesElements';
import { ButtonUnderline } from '../ButtonElements';

const Services = () => {
    return (
        <ServicesContainer>
            <ServicesH1>サービスの内容</ServicesH1>
            <Discription>
                令和6年度から児童発達支援・放課後等デイサービスの支援の提供する支援の見える化を図ることを目的として、新たに五領域（「健康・生活」「運動・感覚」「認知・行動」「言語・コミュニケーション」「人間関係・社会性」）との関係性を明確に示した支援計画を作成し公表する必要があります。<br />
                ことりにおいても支援プログラムを公表させていただきます。
                <a href="https://s3.ap-northeast-1.amazonaws.com/www.kotori-haibara.com/%E3%81%93%E3%81%A8%E3%82%8A%E6%94%AF%E6%8F%B4%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0.pdf"
                    target="_blank"
                    rel="noopener noreferrer">
                    <ButtonUnderline>
                        <GrDocumentPdf /> 支援プログラム
                    </ButtonUnderline>
                </a>
            </Discription>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon><BiFootball /></ServicesIcon>
                    <ServicesH2>運動</ServicesH2>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon><RiPencilRulerLine /></ServicesIcon>
                    <ServicesH2>学習支援</ServicesH2>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon><IoDesktopOutline /></ServicesIcon>
                    <ServicesH2>パソコン</ServicesH2>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon><IoColorPaletteOutline /></ServicesIcon>
                    <ServicesH2>創作活動</ServicesH2>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon><BiCookie /></ServicesIcon>
                    <ServicesH2>おやつ作り</ServicesH2>
                </ServicesCard>
                <ServicesCard>
                    <ServicesP>ABC</ServicesP>
                    <ServicesH2>英会話実践体験</ServicesH2>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon><RiBus2Line /></ServicesIcon>
                    <ServicesH2>送迎サービス</ServicesH2>
                </ServicesCard>
            </ServicesWrapper>
            <GuidelineWrapper>
                <GuidelineLinkRouter
                    href="http://www.kotori-haibara.com.s3-website-ap-northeast-1.amazonaws.com/guidelines.pdf"
                    target="_blank"
                    rel="noopener noreferrer">
                        <GuidelineDate>2022/04/01</GuidelineDate>
                        放課後等デイサービスガイドライン 評価表
                </GuidelineLinkRouter>
            </GuidelineWrapper>
            <GuidelineWrapper>
                <GuidelineLinkRouter
                    href="https://s3.ap-northeast-1.amazonaws.com/www.kotori-haibara.com/guidlines_2023.pdf"
                    target="_blank"
                    rel="noopener noreferrer">
                        <GuidelineDate>2023/04/01</GuidelineDate>
                        放課後等デイサービスガイドライン 評価表
                </GuidelineLinkRouter>
            </GuidelineWrapper>
            <GuidelineWrapper>
                <GuidelineLinkRouter
                    href="https://s3.ap-northeast-1.amazonaws.com/www.kotori-haibara.com/guidlines_2024.pdf"
                    target="_blank"
                    rel="noopener noreferrer">
                        <GuidelineDate>2024/04/01</GuidelineDate>
                        放課後等デイサービスガイドライン 評価表
                </GuidelineLinkRouter>
            </GuidelineWrapper>
        </ServicesContainer>
    )
}

export default Services;
