import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Coverage = () => {
  const markdownFilePath = 'Languages/Dart/Testing/QualityAndCI/Coverage';

  return (
    <>
      <PageLayout>
        <PageTitle title="Coverage" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Coverage;
