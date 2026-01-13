import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const JWTFlowOverview = () => {
  const markdownFilePath = 'Stacks/MERN/Basics/Auth/JWTFlowOverview';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="JWT Flow Overview" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default JWTFlowOverview;
