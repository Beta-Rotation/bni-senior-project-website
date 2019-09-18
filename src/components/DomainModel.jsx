import React from "react";
import styled from "styled-components";
import image from "../assets/DomainModel.jpeg";

const ScDM = styled.img`
    width: 100%;
`;

const DomainModel = () => {
    return (
        <React.Fragment>
            <h2>Domain Model</h2>
            <ScDM src={image} />
        </React.Fragment>
    );
};

export default DomainModel;