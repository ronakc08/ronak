import React from "react";
import Seo from "../components/Seo/Seo";
import Project from "../components/Project/Project";
import projects from "../constants/projects";
import { graphql } from "gatsby";

const ProjectsPage = ({ data }) => {
  const nodes = data.allFile.nodes;
  return (
    <>
      <Seo title="Projects" />
      <main>
        {projects.map((project, index) => {
          const image = nodes.find((image) => image.name === project.imgName);
          return (
            <Project
              title={project.title}
              tools={project.tools}
              description={project.description}
              github={project.github}
              demo={project.demo}
              reversed={index % 2 === 1 ? true : false}
              image={image.childImageSharp.gatsbyImageData}
              key={index}
            />
          );
        })}
      </main>
    </>
  );
};

export const query = graphql`
  {
    allFile(filter: { extension: { ne: "svg" } }) {
      nodes {
        name
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  }
`;

export default ProjectsPage;
