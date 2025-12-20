import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const DunderMethods = () => {
  const markdownFilePath = 'Languages/Python/Advanced/DataModel/DunderMethods';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Dunder Methods" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DunderMethods;
