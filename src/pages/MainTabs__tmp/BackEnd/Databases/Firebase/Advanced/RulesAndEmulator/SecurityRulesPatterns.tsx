import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const SecurityRulesPatterns = () => {
  const markdownFilePath = 'BackEnd/Databases/Firebase/Advanced/RulesAndEmulator/SecurityRulesPatterns';

  return (
    <>
      <PageLayout>
        <PageTitle title="Security Rules Patterns" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SecurityRulesPatterns;
