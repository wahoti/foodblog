import {
  Switch,
  Route,
  Link,
  useLocation,
} from 'react-router-dom'

import About from '../About'
import Blog from '../Blog'

import './App.css'

const NUMBER_OF_POSTS = 2

function App() {
  const location = useLocation()

  const nextIdx = (n) => {
    const idx = Number(location.pathname.replace('/','')) || 0
    const next = idx + n
    if (next < 0) return '/0'
    if (next > NUMBER_OF_POSTS - 1) return `/${NUMBER_OF_POSTS - 1}`

    return `/${next}`
  }

  const progress = (Number(window.location.href.split('/').pop()) || 0) + 1


  return (
    <>
      <div className="container tertiaryColorBack">
        <header className="primaryColorBack">
          food-blog
          <div>
            <Link className="icon-button" to={nextIdx(-1)}>&#8592;</Link>
            <span className="padding-left">{progress}/{NUMBER_OF_POSTS}</span>
            <Link className="icon-button padding-left" to={nextIdx(1)}>&#8594;</Link>
          </div>
        </header>
        <nav></nav>
        <main>
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path={`/:id`}>
                <Blog />
              </Route>
              <Route path="/">
                <Blog />
              </Route>
            </Switch>
        </main>
        <aside></aside>
        <footer></footer>
      </div>
    </>
  )
}

export default App