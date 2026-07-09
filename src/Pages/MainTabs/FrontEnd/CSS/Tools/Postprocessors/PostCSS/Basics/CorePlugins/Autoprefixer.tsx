import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Autoprefixer = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Postprocessors/PostCSS/Basics/CorePlugins/Autoprefixer';

  return (
    <>
      <PageLayout>
        <PageTitle title="Autoprefixer" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Autoprefixer;
