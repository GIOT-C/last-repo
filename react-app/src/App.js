
import './index.css';
import ActivitiesBody from './Pro-components/ActivitiesBody';
import Cover from './Pro-components/Cover';
import DestinationBody from './Pro-components/DestinationBody';
import FooterBody from './Pro-components/FooterBody';
import HotelsBody from './Pro-components/HotelsBody';
import TravelBody from './Pro-components/TravelBody';
function App() {
  return (
    <>
      <Cover></Cover>
      <DestinationBody></DestinationBody>
      <HotelsBody></HotelsBody>
      <TravelBody></TravelBody>
      <ActivitiesBody></ActivitiesBody>
      <FooterBody></FooterBody>
    </>
  );
}

export default App;
