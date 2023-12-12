const Skills: React.FC = () => {
  return (
    <section className="m-md-5 pt-3 pb-5">
        <h2 className="display-5 text-center mb-4">Skills</h2>
        <p className="text-center w-50 mx-auto mb-5">Passionate about programming and science. Committed to excellence in web development. Always looking for new challenges and learning opportunities.</p>

        <div className="mx-md-5">
            <div className="d-flex flex-wrap justify-content-center gap-5 rounded shadow-lg p-5 m-5">

                <article>
                    <div className="d-flex align-items-center gap-1 icon-box">
                        <img className="icon" src="/html.svg" alt="Icon of HTML" />
                        <h5 className="mb-0">HTML</h5>
                    </div>
                </article>

                <article>
                    <div className="d-flex align-items-center gap-1 icon-box">
                        <img className="icon" src="/css.svg" alt="Icon of CSS" />
                        <h5 className="mb-0">CSS</h5>
                    </div>
                </article>

                <article>
                    <div className="d-flex align-items-center gap-1 icon-box">
                        <img className="icon" src="/sass.svg" alt="Icon of SASS" />
                        <h5 className="mb-0">SASS</h5>
                    </div>
                </article>

                <article>
                    <div className="d-flex align-items-center gap-1 icon-box">
                        <img className="icon" src="/bootstrap.svg" alt="Icon of Bootstrap" />
                        <h5 className="mb-0">Bootstrap</h5>
                    </div>
                </article>

                <article>
                    <div className="d-flex align-items-center gap-1 icon-box">
                        <img className="icon" src="/tailwind.svg" alt="Icon of Tailwind" />
                        <h5 className="mb-0">Tailwind</h5>
                    </div>
                </article>

                <article>
                    <div className="d-flex align-items-center gap-1 icon-box">
                        <img className="icon" src="/javascript.svg" alt="Icon of JavaScript" />
                        <h5 className="mb-0">JavaScript</h5>
                    </div>
                </article>

                <article>
                    <div className="d-flex align-items-center gap-1 icon-box">
                        <img className="icon" src="/typescript.svg" alt="Icon of TypeScript" />
                        <h5 className="mb-0">TypeScript</h5>
                    </div>
                </article>

                <article>
                    <div className="d-flex align-items-center gap-1 icon-box">
                        <img className="icon" src="/react.svg" alt="Icon of React" />
                        <h5 className="mb-0">React</h5>
                    </div>
                </article>

                <article>
                    <div className="d-flex align-items-center gap-1 icon-box">
                        <img className="icon" src="/react.svg" alt="Icon of React Native" />
                        <h5 className="mb-0">React Native</h5>
                    </div>
                </article>

                <article>
                    <div className="d-flex align-items-center gap-1 icon-box">
                        <img className="icon" src="/git.svg" alt="Icon of Git" />
                        <h5 className="mb-0">Git</h5>
                    </div>
                </article>

                <article>
                    <div className="d-flex align-items-center gap-1 icon-box">
                        <img className="icon" src="/postgres.svg" alt="Icon of PostgreSQL" />
                        <h5 className="mb-0">PostgreSQL</h5>
                    </div>
                </article>

                <article>
                    <div className="d-flex align-items-center gap-1 icon-box">
                        <img className="icon" src="/node.svg" alt="Icon of Node" />
                        <h5 className="mb-0">Node</h5>
                    </div>
                </article>

                <article>
                    <div className="d-flex align-items-center gap-1 icon-box">
                        <img className="icon" src="/figma.svg" alt="Icon of Figma" />
                        <h5 className="mb-0">Figma</h5>
                    </div>
                </article>

            </div>
        </div>
    </section>
  )
}

export default Skills