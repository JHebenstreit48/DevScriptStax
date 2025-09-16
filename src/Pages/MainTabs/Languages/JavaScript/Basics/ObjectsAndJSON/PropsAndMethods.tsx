import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const PropsAndMethods = () => {
  const markdownFilePath = 'Languages/JavaScript/Basics/ObjectsAndJSON/PropsAndMethods';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="JavaScript - Properties and Methods" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PropsAndMethods;