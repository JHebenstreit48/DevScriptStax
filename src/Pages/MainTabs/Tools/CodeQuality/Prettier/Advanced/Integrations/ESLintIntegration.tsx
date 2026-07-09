import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ESLintIntegration = () => {
  const markdownFilePath = 'Tools/CodeQuality/Prettier/Advanced/Integrations/ESLintIntegration';

  return (
    <>
      <PageLayout>
        <PageTitle title="ESLint Integration" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ESLintIntegration;
