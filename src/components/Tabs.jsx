import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "../assets/styles/style.css";
import jsProjects from "../data/javascriptProjects";
import ProjectCard from "./ProjectCard";

export default function TabComponent() {
  return (
    <div id="tabs" className="tabs">
      <Tabs>
        <TabList>
          <Tab>JavaScript</Tab>
        </TabList>
        <TabPanel className="tab-panel">
          {jsProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </TabPanel>
      </Tabs>
    </div>
  );
}
