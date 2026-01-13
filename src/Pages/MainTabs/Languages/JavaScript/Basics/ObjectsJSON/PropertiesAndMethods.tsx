import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const PropertiesAndMethods = () => {
  const markdownFilePath = 'Languages/JavaScript/Basics/ObjectsJSON/PropertiesAndMethods';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Properties and Methods" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PropertiesAndMethods;
