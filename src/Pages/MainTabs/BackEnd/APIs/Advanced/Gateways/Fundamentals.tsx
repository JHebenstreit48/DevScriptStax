import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Fundamentals = () => {
  const markdownFilePath = 'BackEnd/APIs/Advanced/Gateways/Fundamentals';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Gateways: Fundamentals" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Fundamentals;
