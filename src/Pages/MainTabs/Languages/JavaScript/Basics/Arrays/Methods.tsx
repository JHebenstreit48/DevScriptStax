import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Methods = () => {
  const markdownFilePath = 'Languages/JavaScript/Basics/Arrays/Methods';

  return (
    <>
      <PageLayout>
        <PageTitle title="JavaScript Arrays - Methods" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Methods;