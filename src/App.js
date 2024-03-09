import React,{useState} from 'react';
import { MainContext } from './ContextStore/MainContext';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomeScreen from '../src/Screens/HomeScreen/HomeScreen'
import FeedBack from '../src/Screens/FeedBackScreen/FeedBackScreen'
import StudentsTable from '../src/Components/StudentsTable/StudentsTable'
import StudentDataScreen from './Screens/StudentDataScreen/StudentDataScreen';
import MarksVisibleScreen from './Screens/MarksVisibleScreen/MarksVisibleScreen';
function App() {
  const [feedBackMsg, setFeedBackMsg] = useState('')
  return (
    <div className="App">
    <MainContext.Provider value={{
    }} >
      <Router>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/StudentDataScreen" element={<StudentDataScreen/>}/>
          <Route path="/MarksVisibleScreen" element={<MarksVisibleScreen/>}/>
          <Route path="/FeedBack" element={<FeedBack/>}/>
        </Routes>
      </Router>
    </MainContext.Provider>
    {/* <StudentsTable/> */}
    </div>
  );
}

export default App;
