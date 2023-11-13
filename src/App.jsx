import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Main from "./pages/Main";
import Order from "./pages/Order";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="/order" element={<Order />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

// const router = createBrowserRouter([
//   {
//     path: "/dishes/",
//     element: <App />,
//     children: [
//       {
//         path: "/dishes/",
//         element: <Layout />,
//         children: [
//           {
//             index: true,
//             element: <Main />,
//           },
//           {
//             path: "/dishes/info",
//             element: <Info />,
//           },
//           {
//             path: "/dishes/order",
//             element: <Order />,
//           },
//           { path: "*", element: <Navigate to="/dishes/" replace /> },
//         ],
//       },
//     ],
//   },
// ]);
