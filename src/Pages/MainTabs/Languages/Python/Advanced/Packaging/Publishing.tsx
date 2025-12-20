import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Publishing = () => {
  const markdownFilePath = 'Languages/Python/Advanced/Packaging/Publishing';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Publishing" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Publishing;
