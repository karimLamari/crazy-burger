import {useState} from "react";

function LoginForm() {
     //state
        const [prenom, setPrenom] = useState('');


    //Comportements: 

        const handleSubmit = (e) => {
            e.preventDefault();
            alert(`bonjour ${prenom} `);
            setPrenom('');       
        }
    //Render
    
    return (

        <div>
            
            <form onSubmit={handleSubmit}>
                            <h1> Bienvenue chez nous !</h1>
            <p> Connectez-vous</p>
                <label htmlFor="prenom"></label>
                <input
                    id="prenom"
                    type="text"
                    placeholder="Entrez votre prénom"
                    value={prenom}
                    onChange={(e) => setPrenom(e.target.value)}
                    required />
                <button
                    type="submit"
                >
                    Accéder a votre espace
                </button>
            </form>

        </div>
    )
}
export default LoginForm