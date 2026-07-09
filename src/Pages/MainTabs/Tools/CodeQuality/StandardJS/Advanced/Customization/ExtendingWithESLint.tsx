import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
