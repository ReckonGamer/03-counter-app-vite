import PropTypes from "prop-types";

export const FirstApp = ( { title, subTitle, name } ) => {  // This is a component.
    
    // console.log(props);

    if( !title ) { // If title doesn't exist
        throw new Error("Título no existe");
    }   
    return ( // If title exists
        <>
            <div data-testid="test-title"> { title } </div>
            { /* <code> { JSON.stringify ( newMessage ) } </code> */ }
            <p> { subTitle } </p>
            <p> { subTitle } </p>
        </>
    )
}

FirstApp.propTypes = { // Ask for the title and subtitle. It has to be like the type of the value.
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
}

FirstApp.defaultProps = { // If there are not title, subtitle or name (by default).
    title: "No hay título",
    subTitle: "No hay subtítulo",
    name: "Pau Robles",
}