import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Connect = () => {
  const markdownFilePath = 'FrontEnd/Redux/Basics/ReactIntegration/Connect';

  return (
    <>
      <PageLayout>
        <PageTitle title="connect (legacy)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Connect;
