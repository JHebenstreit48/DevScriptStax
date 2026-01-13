import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ControlAndExpiry = () => {
  const markdownFilePath = 'BackEnd/APIs/Advanced/Caching/ControlAndExpiry';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Control & Expiry" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ControlAndExpiry;
