import React, { useState, useEffect } from "react";
import Navbar from "./Task/Effect/Navbar";
import NewsComponent from "./Task/Effect/NewsComponent";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    const pageSize = 6;
    const apiKey = `00bfe7d97b874b33a1ad13d4f678d930`;
    const [progress, setProgress] = useState(0);

    return (
        <div>
            <Router>
                <Navbar />
                <LoadingBar
                    color="red"
                    height={5}
                    progress={progress}
                />
                <Routes>
                    <Route
                        exact
                        path="/"
                        element={
                            <NewsComponent
                                setProgress={setProgress}
                                apiKey={apiKey}
                                key="general"
                                pageSize={pageSize}
                                country="id"
                                category="general"
                            />
                        }
                    />
                    <Route
                        exact
                        path="/business"
                        element={
                            <NewsComponent
                                setProgress={setProgress}
                                apiKey={apiKey}
                                key="business"
                                pageSize={pageSize}
                                country="id"
                                category="business"
                            />
                        }
                    />
                    <Route
                        exact
                        path="/entertainment"
                        element={
                            <NewsComponent
                                setProgress={setProgress}
                                apiKey={apiKey}
                                key="entertainment"
                                pageSize={pageSize}
                                country="id"
                                category="entertainment"
                            />
                        }
                    />
                    <Route
                        exact
                        path="/health"
                        element={
                            <NewsComponent
                                setProgress={setProgress}
                                apiKey={apiKey}
                                key="health"
                                pageSize={pageSize}
                                country="id"
                                category="health"
                            />
                        }
                    />
                    <Route
                        exact
                        path="/science"
                        element={
                            <NewsComponent
                                setProgress={setProgress}
                                apiKey={apiKey}
                                key="science"
                                pageSize={pageSize}
                                country="id"
                                category="science"
                            />
                        }
                    />
                    <Route
                        exact
                        path="/sports"
                        element={
                            <NewsComponent
                                setProgress={setProgress}
                                apiKey={apiKey}
                                key="sports"
                                pageSize={pageSize}
                                country="id"
                                category="sports"
                            />
                        }
                    />
                    <Route
                        exact
                        path="/technology"
                        element={
                            <NewsComponent
                                setProgress={setProgress}
                                apiKey={apiKey}
                                key="technology"
                                pageSize={pageSize}
                                country="id"
                                category="technology"
                            />
                        }
                    />
                </Routes>
            </Router>
        </div>
    );
};

export default App;
