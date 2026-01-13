import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Management = () => {
  const markdownFilePath = 'BackEnd/Databases/MongoDB/Intermediate/Indexes/Management';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Management" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Management;
