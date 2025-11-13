import { Route, Routes } from "react-router"
import HomePage from "./pages/HomePage"
import ArticlePage from "./pages/ArticlePage"
import ArticlesPage from "./pages/ArticlesPage"
import SignInPage from "./pages/signInPage"
import SignUpPage from "./pages/signUpPage"
import Header from "./components/Header"
import Footer from "./components/Footer"


const App = () => {
  return (
    <div>

      {/* header */}
      <Header />

      <main>
        {/* routes */}
        <Routes>
          
          {/* public Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/articles" element={<ArticlesPage />} /> /
          <Route path="/article/:id" element={<ArticlePage />} />

          {/* authanticated routes (redirect to home if logged in) */}
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />

        </Routes>

      </main>

      {/* footer */}
      <Footer /> 

    </div>
      
    
  )
}

export default App