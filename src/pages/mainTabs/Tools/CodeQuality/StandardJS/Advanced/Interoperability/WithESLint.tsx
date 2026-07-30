import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const WithESLint = () => {
  const markdownFilePath = 'Tools/CodeQuality/StandardJS/Advanced/Interoperability/WithESLint';

  return (
    <>
      <PageLayout>
        <PageTitle title="With ESLint" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default WithESLint;
