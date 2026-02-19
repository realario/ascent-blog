import { ToastContainer } from "react-toastify"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Layout from "./components/Layout";
import PostList from "./components/PostList";
import PostPage from "./context/PostPage";
import NotFound from "./pages/NotFound";
import { PostsProvider } from "./context/PostsContext";

function App() {
    return (
        <PostsProvider>
            <Router>
                <ToastContainer
                    limit={1}
                    pauseOnHover={false}
                    pauseOnFocusLoss={false}
                />
                <Navbar />
                <Layout>
                    <Routes>
                        {/* Home / Feed */}
                        <Route path="/" element={<PostList />} />

                        {/* Single-Post View */}
                        <Route path="/posts/:id" element={<PostPage />} />

                        {/* 404 */}
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </Layout>
            </Router>
        </PostsProvider>
    );
}

export default App;
