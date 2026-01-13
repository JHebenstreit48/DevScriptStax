import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const DetailedGuide = () => {
  const markdownFilePath = 'BackEnd/APIs/REST/HTTPMethods/DetailedGuide';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Detailed Guide" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DetailedGuide;
