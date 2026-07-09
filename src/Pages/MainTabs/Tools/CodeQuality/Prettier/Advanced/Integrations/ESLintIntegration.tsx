import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
