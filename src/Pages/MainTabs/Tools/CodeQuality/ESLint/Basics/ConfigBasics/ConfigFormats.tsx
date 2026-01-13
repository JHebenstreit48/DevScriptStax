import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ConfigFormats = () => {
  const markdownFilePath = 'Tools/CodeQuality/ESLint/Basics/ConfigBasics/ConfigFormats';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Config Formats" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ConfigFormats;
