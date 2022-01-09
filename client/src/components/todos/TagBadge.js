import react from 'react'; 
import '../../App.css'; 


const TagBadge = ({text}) => {
    return (
        <div className="Badge"> 
            { text }
        </div>
    )
}

export default TagBadge;