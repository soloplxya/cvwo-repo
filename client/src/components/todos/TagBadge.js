import react from 'react'; 
import '../../App.css'; 


const TagBadge = ({text}) => {
    return (
        <div className="Badge" style={{textOverflow: "ellipsis", whiteSpace: "nowrap", width: "200px", display: "inline-block", overflow:"hidden"}}> 
            { text }
        </div>
    )
}

export default TagBadge;