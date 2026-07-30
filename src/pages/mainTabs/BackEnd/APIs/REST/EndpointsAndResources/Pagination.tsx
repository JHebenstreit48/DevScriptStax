import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
