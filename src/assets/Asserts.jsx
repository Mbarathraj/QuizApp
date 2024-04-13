import { FaRegUserCircle } from "react-icons/fa";
import './Asserts.css'
// Define your React component
function UserIcon() {
  return (
    <>
      <FaRegUserCircle className="icon User"/>
    </>
  );
}

function addIcon()
{
  return(
    <FaPlusCircle className="icon Add"/>
  )
}


export default {UserIcon,addIcon};
