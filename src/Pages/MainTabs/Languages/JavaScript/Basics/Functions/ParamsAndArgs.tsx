import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ParamsAndArgs = () => {
  const markdownFilePath = 'Languages/JavaScript/Basics/Functions/ParamsAndArgs';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="JavaScript Functions - Parameters and Arguments" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ParamsAndArgs;