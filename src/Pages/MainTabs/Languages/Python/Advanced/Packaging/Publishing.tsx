import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
