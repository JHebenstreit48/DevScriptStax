import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ExtendingWithESLint = () => {
  const markdownFilePath = 'Tools/CodeQuality/StandardJS/Advanced/Customization/ExtendingWithESLint';

  return (
    <>
      <PageLayout>
        <PageTitle title="Extending with ESLint" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ExtendingWithESLint;
