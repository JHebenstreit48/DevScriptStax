import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Optimization = () => {
  const markdownFilePath = 'Languages/Python/Advanced/Performance/Optimization';

  return (
    <>
      <PageLayout>
        <PageTitle title="Optimization" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Optimization;
