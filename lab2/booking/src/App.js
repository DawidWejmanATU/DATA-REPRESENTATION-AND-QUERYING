import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Content from './components/content';
import Footer from './components/footer';
function App() {
  return (
  <BrowserRouter>
  <div className="App">
  <Navbar bg="primary" data-bs-theme="dark">
  <Container>
  <Navbar.Brand href="/">Navbar</Navbar.Brand>
  <Nav className="me-auto">
  <Nav.Link href="/">Home</Nav.Link>
  <Nav.Link href="/read">Read</Nav.Link>
  <Nav.Link href="/create">Create</Nav.Link>
  </Nav>
  </Container>
  </Navbar>
  <Routes>
  <Route path='/' element={<Content />} exact />
  <Route exact path='/create' element={<Header />} />
  <Route path='/read' element={<Footer />} />
  </Routes>
  </div>
  </BrowserRouter>
  );
  }
  export default App;



