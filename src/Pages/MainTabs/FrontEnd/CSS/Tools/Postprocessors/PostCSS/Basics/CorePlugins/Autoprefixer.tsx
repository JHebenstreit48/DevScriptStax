import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Autoprefixer = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Postprocessors/PostCSS/Basics/CorePlugins/Autoprefixer';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Autoprefixer" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Autoprefixer;
