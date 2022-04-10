import React, {useState} from "react";
import { ContentBox, HomePageMain, VideoContent, VideoDescription, HomePageBg, VideoBg } from "./HomePageStyled";
import {InfoBox} from "./HomePageStyled"
import sample from "../../video/space.mp4"


function HomePage() {

    const [youtubeID] = useState('RQvrURl8T94')

    return (
        <HomePageMain>
            <HomePageBg>
                <VideoBg autoPlay loop muted src={sample} type='video/mp4' />
            </HomePageBg>
            <ContentBox>
                <h1>Sua viagem espacial começa <span>agora!</span></h1>
                <InfoBox>
                    <h2>DESTAQUES</h2>
                    <div>
                        <h3>Colônia Lunar</h3>
                        <p>01/10/2022 - 30/10/2022 (30 dias)</p>
                        <button>Saiba +</button>
                    </div>
                    <br />
                    <div>
                        <h3>Colônia Marte</h3>
                        <p>01/11/2022 - 15/12/2022 (45 dias)</p>
                        <button>Saiba +</button>
                    </div>
                </InfoBox>
            </ContentBox>

            <VideoContent>
                <h2>Um universo de <span>possibilidades</span></h2>
                <iframe className='video'
                    title='Youtube player'
                    frameborder='0'
                    width="60%"
                    height="560"
                    sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
                    src={`https://youtube.com/embed/${youtubeID}?autoplay=0`}>
                </iframe>

                <VideoDescription>
                    <span>Aventuras, descobertas, emoções.</span>
                    <p>
                        A Labe<span>X</span> nasceu com o objetivo de realizar o sonho de levar pessoas comuns ao espaço. Preparamos um programa completo para você se aventurar em nossas colônias espaciais. Desde uma pequena visita a estação espacial mãe á excursões espaciais guiadas pela nossa equipe técnica.
                    </p>
                    <p>
                        Proporcionamos uma experiência completa com quartos individuais e coletivos, restaurantes temáticos, espaços kids e esportivos, área de lazer, spa, festas, espetáculos interativos e aventuras espaciais.
                    </p>
                    <p>
                        Aqui quem decide o que fazer é você! Basta escolher uma de nossas excursões e fazer as malas que cuidamos de todo o resto.
                    </p>
                    <span>Nos vemos no espaço!</span>
                </VideoDescription>
            </VideoContent>
        </HomePageMain>
    )
}

export default HomePage
