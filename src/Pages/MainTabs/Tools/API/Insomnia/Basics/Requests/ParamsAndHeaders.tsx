import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ParamsAndHeaders = () => {
  const markdownFilePath = 'Tools/APITools/Insomnia/Basics/Requests/ParamsAndHeaders';

  return (
    <>
      <PageLayout>
        <PageTitle title="Params & Headers" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ParamsAndHeaders;
