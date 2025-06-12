// props = read-only properties thar are shared between components.
//          A parent Component can send data to a child component.
//          <component key=value />


import Header from './Header'
import Footer from './Footer'
import Student from './Student';

function App() {

  return (<>
    <Header />
    <Student name="Rahul Kumar" age={25} isStudent={true} />
    <Student name="Kaushal Raj" age={35} isStudent={false} />
    <Student name="Kamal Kumar" age={67} isStudent={true} />
    <Student name="Suraj Kumar Choudhary" age={20} isStudent={false} />
    <Student name="Shidhar Singh" age={30} isStudent={true} />
    <Student name="Brajendra Sharma" age={27} isStudent={false} />
    <Student />
    
    <Footer />

  </>);

}

export default App
