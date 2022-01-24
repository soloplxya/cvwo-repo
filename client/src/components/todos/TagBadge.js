import react from 'react'; 
import '../../App.css'; 

 // styles
const badgeStyles = {
    textOverflow: "ellipsis", 
    whiteSpace: "nowrap", 
    width: "100px", 
    display: "inline-block", 
    overflow: "hidden", 
    marginRight: "3px"
};

const TagBadge = ({text}) => {
    return (
        <div className="Badge" style={badgeStyles}> 
            { text }
        </div>
    )
}

export default TagBadge;