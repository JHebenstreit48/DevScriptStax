import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const LargeProjects = () => {
  const markdownFilePath = 'Tools/CodeQuality/TSLint/Advanced/Performance/LargeProjects';

  return (
    <>
      <PageLayout>
        <PageTitle title="Large Projects" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default LargeProjects;
