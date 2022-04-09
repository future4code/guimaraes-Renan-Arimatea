import styled from "styled-components";

export const NavbarMenu = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    background-color: black;
    padding: 1em 2em;
    

    img {
        width: 150px;
    }

    nav {
        display: flex;
    }

    nav a {
        margin: 0;
        padding: .5em;
        color: #FFF;

        :hover {
            cursor: pointer;
            transform: scale(1.15);
            transition: .3s;
            color: #008037;
        }
    }

    nav p {
        margin: 0;
        padding: .5em;
        color: #FFF;
    }

`

