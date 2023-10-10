import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Homepage from "./pages/Homepage";
import ServiceDetailsPublic from "./pages/ServiceDetailsPublic";
import ServiceListPublic from "./pages/ServiceListPublic";
import DepartmentDetailsPublic from "./pages/DepartmentDetailsPublic";
import DoctorListPublic from "./pages/DoctorListPublic";
import DepartmentListPublic from "./pages/DepartmentListPublic";
import DoctorDetailsPublic from "./pages/DoctorDetailsPublic";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/service-detailspublic":
        title = "";
        metaDescription = "";
        break;
      case "/servicelistpublic":
        title = "";
        metaDescription = "";
        break;
      case "/department-detailspublic":
        title = "";
        metaDescription = "";
        break;
      case "/doctorlistpublic":
        title = "";
        metaDescription = "";
        break;
      case "/department-listpublic":
        title = "";
        metaDescription = "";
        break;
      case "/doctordetailspublic":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/service-detailspublic" element={<ServiceDetailsPublic />} />
      <Route path="/servicelistpublic" element={<ServiceListPublic />} />
      <Route
        path="/department-detailspublic"
        element={<DepartmentDetailsPublic />}
      />
      <Route path="/doctorlistpublic" element={<DoctorListPublic />} />
      <Route path="/department-listpublic" element={<DepartmentListPublic />} />
      <Route path="/doctordetailspublic" element={<DoctorDetailsPublic />} />
    </Routes>
  );
}
export default App;
