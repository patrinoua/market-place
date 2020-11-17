import styled from 'styled-components';
import colors from '../constants/colors';

interface TypographyProps {
  lineHeight?: string;
  caps?: boolean;
  color?: string;
}
export const H1 = styled.div<TypographyProps>`
  font-family: 'Open Sans', sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: ${({ lineHeight }) => lineHeight || '56px'};
  color: ${({ color }) => colors[color] || colors.charcoal};
  font-style: normal;
  letter-spacing: 0.05em;
  text-transform: ${({ caps }) => caps === true && 'uppercase'};
`;
export const H2 = styled.div<{ caps?: boolean; lineHeight?: string }>`
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  font-size: 18px;
  line-height: ${({ lineHeight }) => lineHeight || '56px'};
  color: ${({ color }) => colors[color] || colors.charcoal};
  text-transform: ${({ caps }) => caps === true && 'uppercase'};
`;
export const H3 = styled.div<{ color?: string }>`
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  font-size: 16px;
  color: ${({ color }) => colors[color] || colors.charcoal};
`;
export const Regular = styled.div<{ color?: string; lineHeight?: string }>`
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: ${({ lineHeight }) => lineHeight || '24px'};
  color: ${({ color }) => colors[color] || colors.charcoal};
`;
export const RegularMedium = styled.div<{
  color?: string;
  lineHeight?: string;
}>`
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: ${({ lineHeight }) => lineHeight || '24px'};
  color: ${({ color }) => colors[color] || colors.charcoal};
`;
export const Body = styled.div<{ color?: string }>`
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: ${({ color }) => colors[color] || colors.charcoal};
  text-transform: uppercase;
`;
export const MenuMedium = styled.div<{ color?: string }>`
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: ${({ color }) => colors[color] || colors.charcoal};
  text-transform: uppercase;
`;
export const MenuBold = styled.div<{ color?: string }>`
  font-family: 'Open Sans', sans-serif;
  font-weight: 800;
  font-size: 16px;
  line-height: 24px;
  color: ${({ color }) => colors[color] || colors.white};
  text-transform: uppercase;
`;
export const Subtitle = styled.div<{ color?: string }>`
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: ${({ color }) => colors[color] || colors.mediumGray};
`;
export const SubtitleMedium = styled.div<{ color?: string }>`
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  color: ${({ color }) => colors[color] || colors.charcoal};
`;
export const Button = styled.div<{ color?: string }>`
  font-family: 'Open Sans', sans-serif;
  font-weight: 800;
  font-size: 16px;
  color: ${({ color }) => colors[color] || colors.white};
`;
