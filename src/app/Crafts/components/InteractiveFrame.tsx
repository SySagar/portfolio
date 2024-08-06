type typeURL = {
  src: string;
};

const InteractiveFrame = ({ src }:typeURL) => {
  return (
    <div style={{ width: '500px', height: '400px', borderRadius:"8px" }}>
      <iframe
       loading="lazy"
       allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
       sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
        src={src}
        className="rounded-lg"
        style={{ width: '100%', height: '100%', border: 'none' }}
        title="Interactive Frame"
      ></iframe>
    </div>
  );
};

export default InteractiveFrame;
