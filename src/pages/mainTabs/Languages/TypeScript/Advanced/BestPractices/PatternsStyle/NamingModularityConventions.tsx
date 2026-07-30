import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const NamingModularityConventions = () => {
  const markdownFilePath = 'Languages/TypeScript/Advanced/BestPractices/PatternsStyle/NamingModularityConventions';

  return (
    <>
      <PageLayout>
        <PageTitle title="Naming, Modularity, Conventions" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default NamingModularityConventions;
