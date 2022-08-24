import "./style.css";


export const LoadingSpinner = ({ color }) => {
    const customSpinnerColor = {
        borderTopColor: color ? color : "#fff",
    }

    return <div id="loading" className="display" style={customSpinnerColor}></div>
}
