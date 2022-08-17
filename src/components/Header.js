import AboutModal from './AboutModal'
import nasa from '../images/nasa.png'
const Header = () => {
  return (
    <>
      <header className="header">
        <div className="logo-container">
          <img src={nasa} alt="nasa logo" width="30px" height="30px" />
          <h1>
            Wild Earth <span>(Powered by NASA)</span>
          </h1>
        </div>
        <div className="modal-container">
          <AboutModal />
        </div>
      </header>
    </>
  )
}

export default Header
