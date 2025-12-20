import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CommonPitfalls = () => {
  const markdownFilePath = 'FrontEnd/React/Advanced/BestPractices/CommonPitfalls';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Common Pitfalls" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CommonPitfalls;
