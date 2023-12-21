interface SkillsProps {
    darkMode: boolean;
}

const Skills: React.FC<SkillsProps> = ({ darkMode }) => {

    return (
        <section className="skills mt-5 m-4 m-md-5" id="skills">
            <h2 className="display-3 text-center mb-5">Skills</h2>

            <div className="mx-md-5">
            <div className={`skills-container mx-auto d-flex flex-wrap justify-content-center gap-5 rounded shadow-lg p-5 ${darkMode ? 'bg-secondary' : 'bg-success'}`}>

                    <article>
                        <div className="d-flex align-items-center gap-2 icon-box">
                            <img className="icon" src="/html.svg" alt="Icon of HTML" />
                            <p className="mb-0 fs-5 fw-bold">HTML</p>
                        </div>
                    </article>

                    <article>
                        <div className="d-flex align-items-center gap-2 icon-box">
                            <img className="icon" src="/css.svg" alt="Icon of CSS" />
                            <p className="mb-0 fs-5 fw-bold">CSS</p>
                        </div>
                    </article>

                    <article>
                        <div className="d-flex align-items-center gap-2 icon-box">
                            <img className="icon" src="/sass.svg" alt="Icon of SASS" />
                            <p className="mb-0 fs-5 fw-bold">SASS</p>
                        </div>
                    </article>

                    <article>
                        <div className="d-flex align-items-center gap-2 icon-box">
                            <img className="icon" src="/bootstrap.svg" alt="Icon of Bootstrap" />
                            <p className="mb-0 fs-5 fw-bold">Bootstrap</p>
                        </div>
                    </article>

                    <article>
                        <div className="d-flex align-items-center gap-2 icon-box">
                            <img className="icon" src="/tailwind.svg" alt="Icon of Tailwind" />
                            <p className="mb-0 fs-5 fw-bold">Tailwind</p>
                        </div>
                    </article>

                    <article>
                        <div className="d-flex align-items-center gap-2 icon-box">
                            <img className="icon" src="/javascript.svg" alt="Icon of JavaScript" />
                            <p className="mb-0 fs-5 fw-bold">JavaScript</p>
                        </div>
                    </article>

                    <article>
                        <div className="d-flex align-items-center gap-2 icon-box">
                            <img className="icon" src="/typescript.svg" alt="Icon of TypeScript" />
                            <p className="mb-0 fs-5 fw-bold">TypeScript</p>
                        </div>
                    </article>

                    <article>
                        <div className="d-flex align-items-center gap-2 icon-box">
                            <img className="icon" src="/react.svg" alt="Icon of React" />
                            <p className="mb-0 fs-5 fw-bold">React</p>
                        </div>
                    </article>

                    <article>
                        <div className="d-flex align-items-center gap-2 icon-box">
                            <img className="icon" src="/react.svg" alt="Icon of React Native" />
                            <p className="mb-0 fs-5 fw-bold">React Native</p>
                        </div>
                    </article>

                    <article>
                        <div className="d-flex align-items-center gap-2 icon-box">
                            <img className="icon" src="/git.svg" alt="Icon of Git" />
                            <p className="mb-0 fs-5 fw-bold">Git</p>
                        </div>
                    </article>

                    <article>
                        <div className="d-flex align-items-center gap-2 icon-box">
                            <img className="icon" src="/postgres.svg" alt="Icon of PostgreSQL" />
                            <p className="mb-0 fs-5 fw-bold">PostgreSQL</p>
                        </div>
                    </article>

                    <article>
                        <div className="d-flex align-items-center gap-2 icon-box">
                            <img className="icon" src="/node.svg" alt="Icon of Node" />
                            <p className="mb-0 fs-5 fw-bold">Node</p>
                        </div>
                    </article>

                    <article>
                        <div className="d-flex align-items-center gap-2 icon-box">
                            <img className="icon" src="/figma.svg" alt="Icon of Figma" />
                            <p className="mb-0 fs-5 fw-bold">Figma</p>
                        </div>
                    </article>

                </div>
            </div>
        </section>
    )
}

export default Skills;