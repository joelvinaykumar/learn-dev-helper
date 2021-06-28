import React, { useState } from 'react';
import styled from "styled-components";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Table as SUITable } from 'semantic-ui-react'

import { theme } from "./utils/theme";

const { Header, HeaderCell, Body, Row, Cell } = SUITable;

export const ColorPalette = () => {

  const [clipMessage, setClipMessage] = useState(null);

  return (
    <ColorPaletteContainer>
      <SubTitle>Click to copy color code to clipboard!</SubTitle>
      <ClipMessage>{clipMessage}</ClipMessage>
      {Object.entries(theme).map(([type, obj]) => (
        <Palette>
          <SubTitleDiv>
            <SubTitle>{type}</SubTitle>
          </SubTitleDiv>
            <Table celled>
              <Header>
                <Row>
                  <StyledHeaderCell>Name</StyledHeaderCell>
                  <StyledHeaderCell>Hex code</StyledHeaderCell>
                  <StyledHeaderCell>Color</StyledHeaderCell>
                </Row>
              </Header>
              <Body>
                {Object.entries(obj).map(([k, v]) => (
                  <CopyToClipboard
                    text={`${type}.${k}`}
                    onCopy={() => setClipMessage(`${type}.${k} code copied to clipboard!`)}
                  >
                    <Row>
                      <StyledCell>{k}</StyledCell>
                      <StyledCell>{v}</StyledCell>
                      <StyledCell style={{ backgroundColor: v }} />
                    </Row>
                  </CopyToClipboard>
                ))}
              </Body>
            </Table>
            
        </Palette>
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

const Palette = styled.div`
  width: 40%;
  margin: 20px;
  display: flex;
  justify-content: center;
  align-items: stretch;
`;

const ClipMessage = styled.p`
  font-size: 15px;
  line-height: 19px;
  letter-spacing: 0.32;
  text-align: center;
  font-weight: 500;
  width: 100%;
`;

const SubTitleDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0 15px;
  background-color: #fef;
`;

const SubTitle = styled.p`
  font-size: 25px;
  line-height: 38px;
  letter-spacing: 0.32;
  text-align: center;
  font-weight: 500;
  width: 100%;
`;

const Table = styled(SUITable)`
  width: 100%;
  margin: 0 !important;
`;

const StyledHeaderCell = styled(HeaderCell)`
  text-align: center;
  line-height: 38px;
  letter-spacing: 0.32;
  font-size: 18px;
  background-color: #ffe;
`;

const StyledCell = styled(Cell)`
  text-align: center;
  line-height: 25px;
  font-size: 14px;
  cursor: pointer;
`;