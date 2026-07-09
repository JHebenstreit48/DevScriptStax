import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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