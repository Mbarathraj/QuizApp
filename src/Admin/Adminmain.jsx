import './Admin.css'
import Admin from './Admin'
import AdminaddQuestion from './AdminaddQuestion'
import Addlogicals from './Addlogicals'

const Adminmain = () => {
  return (
    <div>
          <div className="main">
              <Admin />
              <Addlogicals />
              <AdminaddQuestion/>
          </div>
    </div>
  )
}

export default Adminmain
