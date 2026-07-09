import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Distributions = () => {
  const markdownFilePath = 'Languages/Python/Advanced/Packaging/Distributions';

  return (
    <>
      <PageLayout>
        <PageTitle title="Distributions" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Distributions;
