export const LeftHandComponent: React.FC<{name: string}> = ({name}) => {
    return <h1 data-testid="lhc-h1" style={{backgroundColor: "green"}}>{name}</h1>;
  };
