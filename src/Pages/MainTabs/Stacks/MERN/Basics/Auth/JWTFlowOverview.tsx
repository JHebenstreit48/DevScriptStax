import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const JWTFlowOverview = () => {
  const markdownFilePath = 'Stacks/MERN/Basics/Auth/JWTFlowOverview';

  return (
    <>
      <PageLayout>
        <PageTitle title="JWT Flow Overview" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default JWTFlowOverview;
