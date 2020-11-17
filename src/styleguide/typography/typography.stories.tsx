import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import styled from 'styled-components';
import {
  H1,
  H2,
  H3,
  Regular,
  RegularMedium,
  Body,
  MenuMedium,
  MenuBold,
  Subtitle,
  SubtitleMedium,
  Button
} from './index';
import colors from '../constants/colors';
const Container = styled.div`
  margin: 10px;
`;

const Typography = () => (
  <Container>
    <H1>This is H1</H1>
    <br />
    <H1 caps={true}>This is H1 (caps = true)</H1>
    <br />
    <H2>This is H2</H2>
    <br />
    <H2 caps={true}>This is H2 (caps = true)</H2>
    <br />
    <H3>This is H3</H3>
    <br />
    <Regular>This is Regular</Regular>
    <br />
    <RegularMedium>This is RegularMedium</RegularMedium>
    <br />
    <Body>This is Body</Body>
    <br />
    <MenuMedium>This is Menu Medium</MenuMedium>
    <br />
    <div style={{ backgroundColor: colors.mediumGray, width: '160px' }}>
      <MenuBold>This is Menu Bold</MenuBold>
    </div>
    <br />
    <Subtitle>This is Subtitle</Subtitle>
    <br />
    <SubtitleMedium>This is SubtitleMedium</SubtitleMedium>
    <br />
    <div style={{ backgroundColor: colors.mediumGray, width: '160px' }}>
      <Button>This is Button</Button>
    </div>
    <br />
  </Container>
);

export default {
  title: 'Styleguide/Typography',
  component: Typography,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as Meta;

const Template: Story = () => <Typography />;

export const Fonts = Template.bind({});
