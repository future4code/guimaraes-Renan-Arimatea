import styled from "styled-components";

export const NavbarMenu = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    background-color: black;
    padding: 1em 2em;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    

    img {
        width: 120px;

        :hover {
            cursor: pointer;
        }
    }

    nav {
        display: flex;
    }

    nav a {
        margin: 0;
        padding: .5em;
        color: #FFF;
        text-decoration: none;

        :hover {
            cursor: pointer;
            transform: scale(1.15);
            transition: .3s;
            color: #7CB342;
        }
    }

    nav p {
        margin: 0;
        padding: .5em;
        color: #FFF;

        :hover {
            cursor: default;
        }
    }

`
