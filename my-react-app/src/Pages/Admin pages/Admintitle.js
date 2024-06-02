const Admintitle = ({ titleText }) => {
    return (
      <div>
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          fontFamily: "verdana",
          fontSize: "3em",
          fontWeight: "bold",
          color: "#fd580b",
          textAlign: "center",
          backgroundColor: "#F6F5F2",
          width: "100%", // Ensure the h1 takes full width
          padding: "20px 0", // Add some padding for better spacing
        }}
      >
        { titleText }
      </h1>
      </div>
    );
  };
  
  export default Admintitle;
  