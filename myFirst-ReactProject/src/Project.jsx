function Project() {

    const project1 = "qwert"
    const project2 = "abcd"

    return (
        <>
            <div className="project" id="project1">{project1.toUpperCase()}</div>
            <div className="project" id="project2">{project2.toUpperCase()}</div>

        </>
    );

}

export default Project