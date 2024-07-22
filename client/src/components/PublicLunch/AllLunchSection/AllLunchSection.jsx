import { useEffect, useState } from "react";
import axios from "axios";
import DishCard from "../DishCard/DishCard";
import SectionDescription from "../../Alerts/SectionDescription/SectionDescription";
import EmptyAlert from "../../Alerts/EmptyAlert/EmptyAlert";
import Search from "../Search/Search";

const AllLunchSection = (props) => {
  const { userData } = props;
  const [allLunch, setAllLunch] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/api/v1/dishes`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setAllLunch(response.data.data || []);
      })
      .catch((error) => {
        console.error("Get all dishes error:", error);
      });
  }, []);

  return (
    <section
      className="container d-flex flex-column justify-content-start align-items-center g-3"
      style={{ minHeight: "86vh" }}
    >
      <SectionDescription
        headline="Visi mūsų patiekalai"
        text="Čia galite peržiūrėti visus patiekalus, jų įvertinimus ir kurią dieną jie bus gaminami. Taip pat galite užsisakyti šios dienos pietus."
      >
        <Search setAllLunch={setAllLunch} />
      </SectionDescription>
      <div className="d-flex flex-wrap w-100 justify-content-center align-items-center">
        {allLunch.length ? (
          allLunch.map((dishData, index) => {
            return (
              <DishCard key={index} dishData={dishData} userData={userData} />
            );
          })
        ) : (
          <EmptyAlert text="Patiekalų nėra." />
        )}
      </div>
    </section>
  );
};

export default AllLunchSection;
