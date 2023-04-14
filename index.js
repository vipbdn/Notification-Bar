const Notification = (props) => {
  const { className, url } = props;
  return (
    <div className={className}>
      <img src={url} className="img-size" />
      <p className="notification-text">Information Message</p>
    </div>
  );
};

const element = (
  <div>
    <Notification
      className="main-container bg-color1"
      url="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
    />
    <Notification
      className="main-container bg-color2"
      url="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
    />
    <Notification
      className="main-container bg-color3"
      url="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
    />
    <Notification
      className="main-container bg-color4"
      url="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
    />
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
