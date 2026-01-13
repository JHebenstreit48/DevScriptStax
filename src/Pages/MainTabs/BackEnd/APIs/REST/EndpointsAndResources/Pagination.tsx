import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Pagination = () => {
  const markdownFilePath = 'BackEnd/APIs/REST/EndpointsAndResources/Pagination';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Pagination" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Pagination;
