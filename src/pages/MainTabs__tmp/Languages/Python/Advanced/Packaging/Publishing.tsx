import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Publishing = () => {
  const markdownFilePath = 'Languages/Python/Advanced/Packaging/Publishing';

  return (
    <>
      <PageLayout>
        <PageTitle title="Publishing" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Publishing;
