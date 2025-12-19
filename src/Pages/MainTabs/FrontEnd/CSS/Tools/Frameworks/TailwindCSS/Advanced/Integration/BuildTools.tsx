import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const BuildTools = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Frameworks/TailwindCSS/Advanced/Integration/BuildTools';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Build Tools (Vite/Webpack)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default BuildTools;
