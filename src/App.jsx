import "./App.css";
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import LikeButton from './components/LikeButton';

import Emily from './assets/images/Emily.jpg';
import Glasses from './assets/images/glasses.png';
import ClickablePicture from './components/ClickablePicture';

function App() {
  return (
    <div className="App">
      {/* I1: Render IdCard components */}
      <IdCard
        lastName="Doe"
        firstName="John"
        gender="male"
        height={178}
        birth={new Date("1992-07-14")}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
      <IdCard
        lastName="Delores"
        firstName="Obrien"
        gender="female"
        height={172}
        birth={new Date("1988-05-11")}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />

      {/* I2: Greetings Examples */}
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>

      {/* I3: Random Component Examples */}
      <Random min={1} max={6} />
      <Random min={1} max={100} />

      {/* I4: BoxColor Examples */}
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />

      {/* I8: Like Button */}
      <LikeButton />

      {/* I9: Clickable Picture */}
       <ClickablePicture
        img = {Emily}
        imgClicked = {Glasses}
      />

    </div>
  );
}

export default App;

