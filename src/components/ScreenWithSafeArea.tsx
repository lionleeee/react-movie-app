import { FC } from 'react';

interface ScreenWithSafeAreaProps {
  children: React.ReactNode;
  
  exceptPb?: boolean;
}

const ScreenWithSafeArea: FC<ScreenWithSafeAreaProps> = ({
  children,
  exceptPb,
}) => {
  const mediaQueryStyles = {
    paddingTop: 'env(safe-area-inset-top)',
    paddingBottom: `${exceptPb ? '0' : 'env(safe-area-inset-bottom)'}`,
    paddingLeft: 'env(safe-area-inset-left)',
    paddingRight: 'env(safe-area-inset-right)',
  };

  return <div style={mediaQueryStyles}>{children}</div>;
};

export default ScreenWithSafeArea;