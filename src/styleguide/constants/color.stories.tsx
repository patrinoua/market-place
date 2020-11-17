import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import styled from 'styled-components';
import colors from './colors.js';

interface ColorBoxProps {
  label: string;
  hexCode: string;
}

const BoxContainer = styled.div`
  display: flex;
  align-items: center;
  font-family: sans-serif;
`;
const Box = styled.div<{ color: String }>`
  width: 55px;
  height: 55px;
  background-color: ${({ color }) => color};
  border-radius: 5px;
  display: flex;
  margin: 10px;
`;
const Label = styled.div`
  padding-bottom: 5px;
`;

const HexCode = styled.div``;

const ColorBox = ({ label, hexCode }: ColorBoxProps) => (
  <BoxContainer>
    <Box color={hexCode} />
    <div>
      <Label>{label}</Label>
      <HexCode>{hexCode}</HexCode>
    </div>
  </BoxContainer>
);

const ColorsContainer = () => (
  <div
    style={{
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'column',
      maxHeight: '580px',
      maxWidth: '700px'
    }}
  >
    {Object.keys(colors).map((item) => {
      return <ColorBox label={item} hexCode={colors[item]} key={item} />;
    })}
  </div>
);

export default {
  title: 'Styleguide/Colors',
  component: ColorsContainer,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as Meta;

const Template: Story = () => <ColorsContainer />;

export const AllColors = Template.bind({});
