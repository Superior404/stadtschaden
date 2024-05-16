import { useState } from "react";
import Dropdown from "../Components/Dropdown";
import TextFilter from "../Components/TextFilter";
import { streetDamageCategories } from "../../constants/StreetDamageCategories";
import {statusCategories} from "../StatusCategorys";
import TicketsOverview from "../Components/TicketsOverview";



const StaffTicketOverview = () => {
  // ===== filter section =====
  const [category, setCategory] = useState("All");
  const [status, setStatus] = useState("All");
  const [bearbeiter, setBearbeiter] = useState("");
  const [straße, setStraße] = useState("");

  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    // Do something with the selected category, like filtering search results
  };

  const streetCat: string[] = ['All'];
  streetDamageCategories.map(
    (category) => streetCat.push(category.category)
  )

  const statCat: string[] = ['All'];
  statusCategories.map(
    (category) => statCat.push(category.category)
  )


  // =====


  return (
    <div>
      <div className=" flex flex-wrap bg-midlightgray shadow-2xl p-3 rounded-3xl mx-20 my-14 justify-between justify-items-center">
        {/* <Dropdown name="Kategorie" hight={10} with={40} /> */}
        
        <Dropdown name="Category"
          hight={12}
          with={"w-52"}
          options={streetCat}
          value={category}
          onChange={(selected: string) => setCategory(selected)}
        />

        <Dropdown name="status"
          hight={12}
          with={"w-52"}
          options={statCat}
          value={status}
          onChange={(selected: string) => setStatus(selected)}
        />

        <TextFilter
          hight={12}
          with={72}
          name="Bearbeiter"
          value={bearbeiter}
          onChange={(event) => setBearbeiter(event.target.value)}
        />

        <TextFilter
          hight={12}
          with={72}
          name="Straße"
          value={straße}
          onChange={(event) => setStraße(event.target.value)}
        />
      </div>
      <div className="mx-20">
        <TicketsOverview/>
      </div>
    </div>
  )
}

export default StaffTicketOverview