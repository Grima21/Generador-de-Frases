import { useState } from "react";

function PhraseBox() {
  const [frase, setFrase] = useState("");
  const [animar, setAnimar] = useState(false);
  const [favorito, setFavorito] = useState([]);
  const frases = [
    "No hice el deploy porque Mercurio está retrógrado.",
    "No es un bug, es una feature.",
    "Mi gato cerró el Visual Studio sin querer.",
    "El backend dijo que funcionaba en su máquina.",
    "Tuve una excepción existencial no controlada.",
    "Mi café se cayó sobre el teclado y escribió eso.",
    "El proyecto compila, pero no con dignidad.",
    "Hoy no código, estoy en modo documental.",
    "No estoy procrastinando, estoy investigando.",
    "Tengo un commit que rompe todo, pero poéticamente.",
    "Las specs estaban en otro universo.",
    "Funcionaba en staging, te juro.",
    "Ese archivo no lo toqué, se autodestruyó.",
    "La IA escribió eso, no fui yo.",
    "¿Tests? Claro, hay tests... invisibles.",
    "Mi flow es tan ágil que no documenta.",
    "Solo yo entiendo este código y ya se me olvidó.",
    "Lo empujé a main con fe y café.",
    "Mi variable se llama 'x' por razones personales.",
    "Esta solución es temporal... como todo lo permanente.",
  ];

  const mostrarFrase = () => {
    const randomIndex = Math.floor(Math.random() * frases.length);
    setFrase(frases[randomIndex]);

    //Trigger efecto
    setAnimar(false);
    setTimeout(() => setAnimar(true), 10);
  };

  const copiarFrase = () => {
    if (!frase) {
      alert("No hay frase para copiar.");
      return;
    }
    navigator.clipboard
      .writeText(frase)
      .then(() => {
        alert("Frase copiada al portapapeles ✅");
      })
      .catch((err) => {
        console.error("Error al copiar", err);
      });
  };
  const toggleFavorito = () => {
    if (!frase) return;

    if (favorito.includes(frase)) {
      // Quitar de favoritos
      setFavorito(favorito.filter((f) => f !== frase));
    } else {
      // Agregar a favoritos
      setFavorito([...favorito, frase]);
    }
  };

  return (
    <div className="containerPhrases">
      <button className="btn-generador" onClick={mostrarFrase}>
        Generar Frase
      </button>

      <div className="container-group">
        <div className={`showPhrase ${animar ? "fade-in" : ""}`}>
          {frase ? (
            <>
              <p className="frase-cita">"{frase}"</p>
              {/* <p className="autor">— Anónimo</p> */}

              <div className="acciones">
                <button className="btn-copy" onClick={copiarFrase}>
                  📋 Copiar
                </button>
                <button
                  className={`btn-fav ${
                    favorito.includes(frase) ? "en-favoritos" : ""
                  }`}
                  onClick={toggleFavorito}
                >
                  {favorito.includes(frase) ? "💗 En favoritos" : "🤍 Favorito"}
                </button>
              </div>
            </>
          ) : (
            <p className="placeholder-inicial">
              Haz clic en "Generar Frase" para comenzar
            </p>
          )}
        </div>
        <div className="container-favorito">
          <h2>❤️ Mis frases favoritas</h2>
          <div className="containerPhraseFavorite">
            <div className="phraseFavorite">
              {favorito.length === 0 ? (
                <p>Aun no tienes frases favoritas.</p>
              ) : (
                <ul>
                  {favorito.map((f, index) => (
                    <li key={index}>{f}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhraseBox;
