import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const DetailedGuide = () => {
  const markdownFilePath = 'BackEnd/APIs/REST/HTTPMethods/DetailedGuide';

  return (
    <>
      <PageLayout>
        <PageTitle title="Detailed Guide" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DetailedGuide;
