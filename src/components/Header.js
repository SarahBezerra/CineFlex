import styled from "styled-components";

export default function Header() {
    return(
        <Topo>
            CINEFLEX
        </Topo>
    );
}

const Topo = styled.div`
    background-color: #C3CFD9;

    position: absolute;
    height: 67px;
    left: 0px;
    top: 0px;
    width: 100%;

    font-size: 34px;
    color: #E8833A;
    font-weight: 400;
    line-height: 39.84px;

    display: flex;
    justify-content: center;
    align-items: center;
`;