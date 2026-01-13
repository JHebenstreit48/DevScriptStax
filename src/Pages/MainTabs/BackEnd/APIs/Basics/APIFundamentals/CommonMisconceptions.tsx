import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CommonMisconceptions = () => {
  const markdownFilePath = 'BackEnd/APIs/Basics/APIFundamentals/CommonMisconceptions';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Common Misconceptions" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CommonMisconceptions;
