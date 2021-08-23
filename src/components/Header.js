import AboutModal from './AboutModal'
const Header = () => {
  return (
    <>
      <header className="header">
        <h1>
          Wild Earth <span>(Powered by NASA)</span>
        </h1>
        <AboutModal />
      </header>
    </>
  )
}

export default Header
