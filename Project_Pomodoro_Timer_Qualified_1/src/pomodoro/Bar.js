import React from "react";

function Bar() {
  const progressbar = (props) => {
    const { bgcolor, complete } = props;

    const containerStyles = {
      height: 20,
      width: "100%",
      backgroundColor: "#e0e0de",
      borderRadius: 50,
      margin: 50,
    };

    const fillerStyles = {
      height: "100%",
      width: `${completed}%`,
      backgroundColor: bgcolor,
      borderRadius: "inherit",
      textAlign: "right",
    };

    return (
      <div style={containerStyles}>
        <div style={fillerStyles}>
          <span style={labelStyles}>{`${completed}%`}</span>
        </div>
      </div>
    );
  };
}

export default Bar