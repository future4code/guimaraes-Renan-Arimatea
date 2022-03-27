import styled from "styled-components";

export const Cont = styled.div`
  height: 600px;
  width: 400px;
  left: 35%;
  right: 50%;
  border: 1px solid #DD2E44;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.06) 0px 0px 4px;
  background-color: white;
`

export const Header = styled.div`
  height: 50px;
  border-bottom: 1px solid lightgray;
  display: flex;
  justify-content: space-evenly;
`

export const Img = styled.img`
  height: 40px;
  width: 200px;
  margin-top: 5px;
  margin-left: 80px;
  cursor: pointer;
`

export const ImgMatches = styled.img`
  margin-top: 4px;
  margin-left: 30px;
  height: 45px;
  cursor: pointer;
`

export const Like = styled.button`
  border-radius: 50%;
  width: 80px;
  height: 80px;
  border: 1px solid #EB4585;
  color: #EB4585;
  position: relative;
  overflow: hidden;
  font-size: 50px;
  cursor: pointer;
  transform: scale(0.7);
  transition: all 0.2s ease 0s;
  box-shadow: rgb(205 205 205 / 73%) 0px 0px 15px 0px;
  :hover {
    color: white;
    background-color: #EB4585;
    transform: scale(0.8);
  }
`

export const Dislike = styled.button`
  border-radius: 50%;
  width: 80px;
  cursor: pointer;
  height: 80px;
  border: 1px solid red;
  color: red;
  position: relative;
  overflow: hidden;
  font-size: 50px;
  transform: scale(0.7);
  transition: all 0.2s ease 0s;
  box-shadow: rgb(205 205 205 / 73%) 0px 0px 15px 0px;
  :hover {
    color: white;
    background-color: red;
    transform: scale(0.8);
  }
`

export const Clear = styled.button`
margin-top: 10px;
background-color: #EB4585;
color: white;
padding: 10px;
border: 1px solid pink;
border-radius: 30px;
:hover {
    color: white;
    background-color: #EB4585;
    transform: scale(1.1);
    transition: 0.3s;
    cursor: pointer;
  }
`

export const Footer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 10px 0px;
`

export const Match = styled.div`
  box-shadow: rgb(117 117 117 / 70%) 0px 8px 8px 0px;
  position: relative;
  border-radius: 5px;
  overflow: hidden;
  transition: all 0.5s ease 0s;
  height: 430px;
  animation: 0.5s ease 0s 1 normal forwards running none;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
`

export const ImgMatch = styled.img`
  width: 100%;
  display: block;
  z-index: 1;
`

export const Info = styled.div`
  height: 30%;
  position: absolute;
  bottom: 0px;
  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent);
  color: white;
  padding: 15px;
  z-index: 2;
  justify-content: flex-end;
  flex-direction: column;
  width: 100%;
`

export const NameAge = styled.div`
  display: flex;
  align-items: baseline;
`

export const Name = styled.div`
  font-weight: bold;
  font-size: 24px;
`

export const Age = styled.div`
  margin-left: 20px;
  font-size: 20px;
`

export const DivImg = styled.div`
  filter: blur(30px);
  height: 100%;
  width: 100%;
  position: absolute;
`

export const ContDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

export const BodyCont = styled.div`
  padding: 20px 20px 0px;
  display: flex;
  flex-direction: column;
  flex: 1 1 0%;
  -webkit-box-pack: end;
  justify-content: flex-end;
`

export const Bio = styled.p`
  margin-top: 10px;
  margin-right: 30px;
  font-size: 20px;
`

export const PerfIcon=styled.img`
width:50px;
height:50px;
object-fit: cover;
border-radius: 50%;
`

export const PerfName=styled.span`
font-size: 1rem;
margin-left: 1em;
`

export const Perf=styled.div`
display: flex;
align-items: center;
padding: 1em;
`

export const Lista=styled.div`
overflow-y: auto;
max-height: 550px;
`

export const ImgHeart = styled.img`
width: 70px;
height:70px;
`

export const DivHeart=styled.div`
display:flex;
flex-direction: column;
justify-content:center;
align-items: center;
margin-top: 200px;
`

export const ImgHeartBroken = styled.img`
width: 200px;
height:200px;
`

export const DivHeartBroked=styled.div`
display:flex;
flex-direction: column;
justify-content:center;
align-items: center;
margin-top: 130px;
font-size: 20px;
`
