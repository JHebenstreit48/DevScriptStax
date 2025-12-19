import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const NamingModularityConventions = () => {
  const markdownFilePath = 'Languages/TypeScript/Advanced/BestPractices/PatternsStyle/NamingModularityConventions';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Naming, Modularity, Conventions" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default NamingModularityConventions;
