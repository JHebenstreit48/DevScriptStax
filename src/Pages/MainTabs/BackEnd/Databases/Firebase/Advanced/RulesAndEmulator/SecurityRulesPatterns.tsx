import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const SecurityRulesPatterns = () => {
  const markdownFilePath = 'BackEnd/Databases/Firebase/Advanced/RulesAndEmulator/SecurityRulesPatterns';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Security Rules Patterns" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SecurityRulesPatterns;
