import './titlebar.css'
const TitleBar = ({title}) => {
    return ( 
        <div className="titlebar-container">
            <p>{title}</p>
        </div>
     );
}
 
export default TitleBar;