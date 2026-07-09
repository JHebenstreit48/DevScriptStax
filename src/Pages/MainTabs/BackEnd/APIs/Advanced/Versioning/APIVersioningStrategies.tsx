import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const APIVersioningStrategies = () => {
  const markdownFilePath = 'BackEnd/APIs/Advanced/Versioning/APIVersioningStrategies';

  return (
    <>
      <PageLayout>
        <PageTitle title="API Versioning Strategies" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default APIVersioningStrategies;
