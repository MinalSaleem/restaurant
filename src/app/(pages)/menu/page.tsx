import Header from "@/components/(pages)/Header";
import MenuCard from "@/components/(pages)/MenuCard";
import MenuComp from "@/components/(pages)/MenuComp";
import { main } from "../../../../data/menu";

export default function Menu() {
  return (
    <div className="bg-white">
      <Header title="Our Menu" route="Menu" />
      <div>
        <MenuCard
          image={main[0].image}
          title={main[0].title}
          h1={main[0].h1}
          p1={main[0].p1}
          h2={main[0].h2}
          p2={main[0].p2}
          h3={main[0].h3}
          p3={main[0].p3}
          h4={main[0].h4}
          p4={main[0].p4}
        />
      </div>

     <div>
        <MenuCard
          image={main[1].image}
          title={main[1].title}
          h1={main[1].h1}
          p1={main[1].p1}
          h2={main[1].h2}
          p2={main[1].p2}
          h3={main[1].h3}
          p3={main[1].p3}
          h4={main[1].h4}
          p4={main[1].p4}
        />
      </div>

      <MenuComp />
      

     <div>
        <MenuCard
          image={main[2].image}
          title={main[2].title}
          h1={main[2].h1}
          p1={main[2].p1}
          h2={main[2].h2}
          p2={main[2].p2}
          h3={main[2].h3}
          p3={main[2].p3}
          h4={main[2].h4}
          p4={main[2].p4}
        />
      </div>

      
      <div>
        <MenuCard
          image={main[3].image}
          title={main[3].title}
          h1={main[3].h1}
          p1={main[3].p1}
          h2={main[3].h2}
          p2={main[3].p2}
          h3={main[3].h3}
          p3={main[3].p3}
          h4={main[3].h4}
          p4={main[3].p4}
        />
      </div> 
    </div>
  );
}
