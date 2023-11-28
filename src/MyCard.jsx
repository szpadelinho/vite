const MyCard = ({children}) => {

    const myCardStyle = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#dda15e",
        color: "white",
        borderRadius: "8px",
        marginBottom: "10px",
        padding: "10px"
    }

    return(
        <div style={myCardStyle}>
            {children}
        </div>
    )
}

export default MyCard;