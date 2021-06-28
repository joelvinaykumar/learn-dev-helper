import React, { useState } from 'react';
import styled from "styled-components";
import { CopyToClipboard } from 'react-copy-to-clipboard';

import Icon, { iconMap } from "./components/Icon/Icon";

export const IconLibrary = () => {

  const [clipMessage, setClipMessage] = useState(null);

  return (
    <ColorPaletteContainer>
      <SubTitle>Click to copy component to clipboard!</SubTitle>
      <ClipMessage>{clipMessage}</ClipMessage>
      {Object.keys(iconMap).map(name => (
        <>
          <CopyToClipboard
            text={`<Icon name={${name}} size={15} />`}
            onCopy={() => setClipMessage(`<Icon name={${name}} size={15} /> code copied to clipboard!`)}
          >
            <IconContainer>
              <Icon name={name} size={30} />
              <p>{name}</p>
            </IconContainer>
          </CopyToClipboard>
        </>
      ))}
    </ColorPaletteContainer>
  );
}

const ColorPaletteContainer = styled.div`
  padding: 30px;
  display: flex;
  flex=direction: column;
  justify-content: center;
  flex-wrap: wrap;
`;

const SubTitle = styled.p`
  font-size: 20px;
  line-height: 28px;
  letter-spacing: 0.32;
  text-align: center;
  font-weight: 500;
  width: 100%;
`;

const IconContainer = styled.div`
  padding: 50px;
  width: 200px;
  background-color: #fee;
  dispaly: flex !important;
  justify-content: center;
  align-items: center;
  margin: 15px;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
`;

const ClipMessage = styled.p`
  font-size: 15px;
  line-height: 19px;
  letter-spacing: 0.32;
  text-align: center;
  font-weight: 500;
  width: 100%;
`;