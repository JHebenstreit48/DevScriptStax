import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const CommonMisconceptions = () => {
  const markdownFilePath = 'BackEnd/APIs/Basics/APIFundamentals/CommonMisconceptions';

  return (
    <>
      <PageLayout>
        <PageTitle title="Common Misconceptions" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CommonMisconceptions;
