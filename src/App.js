import UserProfile from './components/UserProfile/index'
import './App.css'
// object for a single user needed to display user in a list
// this is passed as props to component
const userDetailsList = [
  {
    uniqueNo: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Sathwik',
    role: 'Web Developer',
  },
  {
    uniqueNo: 2,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Sai',
    role: 'Coder',
  },
  {
    uniqueNo: 3,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Mahesh',
    role: 'Data Analyst',
  },
  {
    uniqueNo: 4,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Chandra',
    role: 'CP',
  },
]

// const App = () => <h1>Users List App</h1>
const App = () => (
  <div className="list-container">
    <h1 className="title">Users List</h1>
    <ul>
      {userDetailsList.map(eachItem => (
        <UserProfile userDetails={eachItem} key={eachItem.uniqueNo} />
      ))}
    </ul>
  </div>
)

export default App
