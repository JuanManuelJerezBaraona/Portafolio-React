const Footer = () => {
  return (
    <footer className="bg-dark p-3">
        <nav className="d-flex justify-content-center gap-5 my-4">
            <a className="text-white underlined fs-5" href="#home">Home</a>
            <a className="text-white underlined fs-5" href="#projects">Projects</a>
            <a className="text-white underlined fs-5" href="#skills">Skills</a>
        </nav>
        <p className="mb-3 text-white text-center">Copyright &#169; 2023 Juan Manuel Jerez Baraona. All rights reserved.</p>
    </footer>
  )
}

export default Footer