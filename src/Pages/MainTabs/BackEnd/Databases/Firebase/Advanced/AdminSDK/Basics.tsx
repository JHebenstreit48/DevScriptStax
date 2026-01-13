import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Basics = () => {
  const markdownFilePath = 'BackEnd/Databases/Firebase/Advanced/AdminSDK/Basics';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="AdminSDK: Basics" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Basics;
