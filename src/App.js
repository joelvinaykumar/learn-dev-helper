import React from 'react';
import styled from "styled-components";
import { Tab } from 'semantic-ui-react';

import 'semantic-ui-css/semantic.min.css'

import { ColorPalette, IconLibrary } from './tabs';

function App() {

  const panes = [
    { menuItem: 'Color Palette', render: () => <TabPane attached={false}><ColorPalette /></TabPane> },
    { menuItem: 'Icon Library', render: () => <TabPane attached={false}><IconLibrary /></TabPane> },
  ]

  return <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
}

export default App;

const TabPane = styled(Tab.Pane)`
  width: 100%;
`;

const TabHeader = styled.div`
  width: 50%;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  cursor: pointer;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #eee;
  }
`;