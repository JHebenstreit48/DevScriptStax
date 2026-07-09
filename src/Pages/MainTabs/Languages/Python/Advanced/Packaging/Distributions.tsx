import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
