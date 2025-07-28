import 'bulma/css/bulma.css';
import ProfileCard from "./ProfileCard";
import AlexaImage from './images/Alexa.JPEG';
import SiriImage from './images/siri.jpg';
import OipImage from './images/oip.Webp';
console.log(AlexaImage, SiriImage, OipImage);
function App (title, description) {
  return (
    <div>
      <section class="hero is-primary">
  <div class="hero-body">
    <p class="title" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height:'6px' }} >Top Luxury Overwater Retreats Around the World</p>
  </div>
</section>
      <div className='container'>
        <section className='section'>
          <div className='columns'>
            <div className='columns is-flex is-align-items-stretch'>
          <div className='column is-4 row is-flex'>
<ProfileCard title="Serene Shores Maldives Resort" description="Step into paradise at Serene Shores, where crystal-clear waters meet luxurious overwater villas. Bask in the golden glow of the sunrise while sipping your coffee on a private deck — this is more than a vacation, it's a tranquil escape curated just for you." image={AlexaImage}/>
          </div>
          <div className='column is-4'>
             <ProfileCard title="Azure Horizon Bora Bora Villas" description="Discover elegance and seclusion at Azure Horizon, nestled in the heart of Bora Bora. With an endless boardwalk leading into turquoise waters, every step here is a step closer to nature’s peace. Ideal for romantic getaways and mindful escapes." image={SiriImage} />
          </div>
          <div className='column is-4 row is-flex'>
                  <ProfileCard title="Sunset Haven Tahiti Retreat" description="Unwind at Sunset Haven, where every evening is painted in hues of lavender and fire. This Tahitian gem offers an unmatched overwater experience with cozy interiors and ambient lighting — perfect for those who crave solitude with a splash of magic." image={OipImage} />
          </div>
          </div>
          </div>
        </section>
      </div>
      <div>
      </div>
    </div>
  );
}
export default App;