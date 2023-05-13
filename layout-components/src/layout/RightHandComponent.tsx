export const RightHandComponent: React.FC<{message: string}> = ({message}) => {
    return <p data-testid="rhc-p" style={{backgroundColor: "red"}}>{message}</p>;
  };
  