import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ParamsAndArgs = () => {
  const markdownFilePath = 'Languages/JavaScript/Basics/Functions/ParamsAndArgs';

  return (
    <>
      <PageLayout>
        <PageTitle title="JavaScript Functions - Parameters and Arguments" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ParamsAndArgs;