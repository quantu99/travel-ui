import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Fragment, useState } from 'react';
import { publicRoutes } from '../src/routes';
import data from './Data/Data';
import './App.css';
function App() {
    const { placeDatas } = data;
    const [messages, setMessages] = useState([]);
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route) => {
                        const Layout = route.layout === null && Fragment;
                        const Page = route.component;
                        return (
                            <Route
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page placeDatas={placeDatas} messages={messages} setMessages={setMessages} />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
