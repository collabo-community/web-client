import ProjectCard from './ProjectCard';
import styles from '../../@layout_app/styles/project_page.module.css';

const dummyData = [
  {
    id: 1,
    title: 'Node Mongo',
    projectsCount: 3,
    imgSrc: '/@images_app/node-mongo.svg',
  },
  {
    id: 2,
    title: 'Collabocate',
    projectsCount: 5,
    imgSrc: '/@images_app/project-4.svg',
  },
  {
    id: 3,
    title: 'Building Blocks',
    projectsCount: 2,
    imgSrc: '/@images_app/project-2.svg',
  },
  {
    id: 4,
    title: 'Use-me-for-experement',
    projectsCount: 4,
    imgSrc: '@images_app/project-3.svg',
  },


];


export default function ProjectList() {
  return (
    <div className={styles.cardGrid}>
      {
        dummyData.map(project => (
          <ProjectCard key={project.id} title={project.title} projectsCount={project.projectsCount} buttonText='Contribute to Project' imageSrc={project.imgSrc} altText={project.title} />
        ))
      }
    </div>
  );
}