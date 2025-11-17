
import './App.css'

function App() {
  return (
    <>
    {/*Header*/}
    <header className="header">
      <h1>Cinema Collection</h1>
      <p className='subtitle'>Movies That Inspired Me</p>
    </header>

    {/* Introduction Section*/}
    <section id ="intro" className="section">
      <p>Movies have always been a source of inspiration and joy for me. I love how they transport us to different worlds and evoke deep emotions.</p>
      <p>My favorite genres include thrillers, dramas, and sci-fi adventures.</p>
    </section>
    
    {/*Movie List*/}
    <section id ="movie-list" className="section">
      <h2>Top picks</h2>

      <div className='card'>
        <h3>Inception</h3>
        <p><b>Genre:</b> Sci-Fi, Action</p>
        <p>
          I love this movie because it has a very unique concept about dreams
          and reality. The visual effects and intense scenes make it unforgettable.
           The ending keeps me thinking every time I watch it.
        </p>
      </div>

      <div className='card'>
        <h3>Interstellar</h3>
        <p><b>Genre:</b> Sci-Fi, Drama</p>
        <p>
          The emotional story about family and space exploration makes this
          movie very special to me. The music and visuals are breathtaking.
          It shows how powerful love can be across time and space.
        </p>
      </div>

      <div className='card'>
        <h3>3 Idiots</h3>
        <p><b>Genre:</b> Comedy, Drama</p>
        <p>
          This movie is inspiring and funny at the same time. It teaches us
          to follow our passion instead of running behind marks. The characters
          are lovable and the message is strong.
        </p>
      </div>

      <div className='card'>
        <h3>Jai</h3>
        <p><b>Genre: </b> Action, Comedy, Drama</p>
        <p>
          This movie has strong connection to local culture and its impactful social messaging. 
          It grounds a universal story of political awakening and civic duty in the specific, 
          relatable struggles of a coastal Karnataka village, making the narrative feel authentic and urgent to the local audience.
        </p>
      </div> 
    </section>

    {/*Movie Preferences*/}
    <section id="movie-prefernce" className='section'>
      <h2>My Movie Preferences</h2>
      <p><b>Favorite Genres:</b> Sci-Fi, Action, Drama, Comedy</p>
      <p><b>Favorite Actor/Director:</b> Christopher Nolan</p>
      <p>
        I usually watch movies every weekend. Sometimes I also enjoy movie
        nights during weekdays when I have free time.
      </p>
    </section>

    {/*footer*/}
    <footer className='footer'>
      <p>2025 My Movie Showcase</p>
    </footer>
    </>
  )
}

export default App
