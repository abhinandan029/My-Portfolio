
import MyInfo from './pages/MyInfo.jsx'
import NavigationBar from './pages/NavigationBar.jsx'
import Projects from './pages/Projects.jsx'
import Feedback from './pages/Feedback.jsx'
import Footer from './pages/Footer.jsx'

function App() {
return(
  <>
    <NavigationBar />
    <div>
      <MyInfo />
      <Projects />
      <Feedback />
      <Footer />
    </div>
  </>
  
);
}

export default App
