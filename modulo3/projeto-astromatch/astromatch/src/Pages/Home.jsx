import { Cont, ContDiv, BodyCont, ImgHeart, DivHeart } from "../components/style";
import { ProfileMatch } from "../components/ProfileMatch";
import React from "react";
import { Head } from "../components/Head";
import { Foot } from "../components/Foot";
import { useState, useEffect } from "react";
import { getMatch } from "../services/HttpClient";
import PurpleHeart from "../assets/hearthpurple.gif"


export const Home = (props) => {
  const [match, setMatch] = useState({});

  useEffect(() => {

    getMatch(setMatch)

  }, [])

  return (
    <>
      <Cont>
        <ContDiv>
          <Head
            changeToMatches={props.changeToMatches}
            changeToInitial={props.changeToInitial}
          />

          {match ? (
            <BodyCont>
              <ProfileMatch {...match} />

              <Foot profileId={match.id} setMatch={setMatch} />
            </BodyCont>
          ) : (
            <DivHeart><ImgHeart src={PurpleHeart}></ImgHeart></DivHeart>
          )}
        </ContDiv>
      </Cont>
    </>
  )
}
