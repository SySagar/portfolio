type typeURL = {
  Component: any;
};

const InteractiveFrame = ({ Component }:typeURL) => {
  return (
    <div style={{ width: '500px', height: '400px', borderRadius:"8px" }}>
    <Component />
    </div>
  );
};

export default InteractiveFrame;
