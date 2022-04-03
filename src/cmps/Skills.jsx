import SkillBar from "./SkillBar";

function Skills() {

    const frameworks = ['angular', 'css', 'github', 'html', 'js', 'mongodb', 'node', 'php', 'react', 'sass', 'sql', 'typescript', 'vue']
    return (
        <div id="skills" className="skills main-cmp">
            <div className="skills-container">
                <h1>Skills</h1>
                <ul>
                    <SkillBar framework={'JavaScript'} percent={100}></SkillBar>
                    <SkillBar framework={'Html'} percent={100}></SkillBar>
                    <SkillBar framework={'Sass / CSS'} percent={100}></SkillBar>
                    <SkillBar framework={'Vue.js'} percent={100}></SkillBar>
                    <SkillBar framework={'React.js'} percent={100}></SkillBar>
                    <SkillBar framework={'Angular'} percent={90}></SkillBar>
                    <SkillBar framework={'Node.js'} percent={85}></SkillBar>
                </ul>
                <div className="logos-container">
                    {frameworks.map(framework => <img key={framework} className="framework-logo" src={require(`../assets/images/${framework}.png`)} />)}
                </div>
            </div>
        </div >
    );
}

export default Skills;