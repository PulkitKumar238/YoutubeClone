import React from 'react'
import { BrowserRouter , Routes, Route} from 'react-router-dom';
import { AppContext } from './utils/contextApi';
import Header from './components/Header';
import Feed from './components/Feed';
import SearchResults from './components/SearchResults';
const App = () => {
  return (
    <AppContext>
      <BrowserRouter>
        <div className="flex flex-col h-full">
          <Header />
          <Routes>
            <Route path="/" exact/*initial*/ element={<Feed />} />
            <Route 
            path="/searchResult/:searchQuery"
            element={<SearchResults />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </AppContext>
    
  )
}

export default App; 