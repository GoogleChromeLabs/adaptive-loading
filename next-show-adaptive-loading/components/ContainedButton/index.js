
import theme from '../../styles/theme';

const ContainedButton = ({ children, ...rest }) => (
  <>
    <button {...rest}>{children}</button>
    <style jsx>{`
      padding: 8px 16px;
      min-height: 32px;
      cursor: pointer;
      font-family: ${theme.typography.button.fontFamily};
      font-weight: ${theme.typography.fontWeightBold};
      font-size: ${theme.typography.button.fontSize};
      line-height: ${theme.typography.button.lineHeight};
      letter-spacing: ${theme.typography.button.letterSpacing};
      color: ${theme.palette.primary.contrastText};
      background-color: ${theme.palette.primary.main};
      border: none;
      border-radius: 2px;
    `}</style>
  </>
);

export default ContainedButton;
