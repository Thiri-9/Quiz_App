import logoImg from "../assets/quiz-logo.png"

export function Header(){
    return <header>
    <img src={logoImg} alt="Logo" />
    <h1>React Quiz</h1>
    </header>
}