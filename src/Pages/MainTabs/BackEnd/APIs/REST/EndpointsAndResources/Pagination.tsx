import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Pagination = () => {
  const markdownFilePath = 'BackEnd/APIs/REST/EndpointsAndResources/Pagination';

  return (
    <>
      <PageLayout>
        <PageTitle title="Pagination" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Pagination;
