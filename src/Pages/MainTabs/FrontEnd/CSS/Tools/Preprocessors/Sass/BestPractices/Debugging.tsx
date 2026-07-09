import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Debugging = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Preprocessors/Sass/BestPractices/Debugging';

  return (
    <>
      <PageLayout>
        <PageTitle title="Debugging" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Debugging;
