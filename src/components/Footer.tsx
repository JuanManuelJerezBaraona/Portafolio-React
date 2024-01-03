const Footer = () => {
  return (
    <footer className="bg-dark p-3">
        <nav className="container d-flex justify-content-center border-bottom pb-4 gap-5 my-4">
            <a className="text-primary underlined fs-4" href="#home">Home</a>
            <a className="text-primary underlined fs-4" href="#projects">Projects</a>
            <a className="text-primary underlined fs-4" href="#skills">Skills</a>
        </nav>
        <p className="mb-3 text-primary text-center">Copyright &#169; 2024 Juan Manuel Jerez Baraona. All rights reserved.</p>
    </footer>
  )
}

export default Footer